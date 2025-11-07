package first.core

import first.cli.LoadCommand.LoadOpts
import first.config.Artifact
import first.config.ConfigReader
import first.config.FctxDef
import first.config.SwapAs
import first.remote.Cache
import first.remote.Downloader
import first.remote.UrlResolver

import java.net.URI

import os.*

class Load:
  private val cache = Cache()

  private def handleRemoteArtifact(artifact: Artifact): Either[String, Path] =
    // 1. Resolve URL
    UrlResolver.resolve(artifact.path).flatMap { uri =>
      // For remote artifacts, we download them to the cache.
      // The source path will be the path in the cache.

      // 2. Check cache
      artifact.sha256.flatMap(cache.get) match
        case Some(cachedPath) =>
          scribe.debug(s"Found artifact in cache: $cachedPath")
          Right(cachedPath)
        case None =>
          // 3. Download
          scribe.debug(s"Artifact not in cache, downloading from $uri")
          Downloader.download(uri).flatMap { content =>
            // 4. Verify checksum
            val actualSha256 = Hashing.calculateSha256(content)
            artifact.sha256 match
              case Some(expectedSha256) if actualSha256 != expectedSha256 =>
                Left(s"Checksum mismatch for ${artifact.path}: Expected $expectedSha256, got $actualSha256")
              case _ =>
                // 5. Put in cache
                val (hash, cachedPath) = cache.put(content)
                scribe.debug(s"Downloaded content size: ${content.length}")
                scribe.debug(s"Stored artifact in cache: $cachedPath with hash $hash")
                Right(cachedPath)
          }
    }

  def run(opts: LoadOpts, context: Context): Unit =
    if opts.verbose then
      scribe.Logger.root.withMinimumLevel(scribe.Level.Debug).replace()
      scribe.debug("Verbose logging enabled.")

    import context.workingDir
    val configReader = new ConfigReader()
    val fctxConfDir  = workingDir / ".then" / opts.contextName
    val artifactsDir = fctxConfDir / "artifacts"

    configReader.load(opts.contextName, workingDir) match
      case Left(error) =>
        scribe.error(s"Failed to load fctx definition: $error")
      case Right(fctxDef) =>
        scribe.info(s"Loading fctx '${fctxDef.name}'...")
        scribe.debug(s"Loaded fctxDef: $fctxDef")

        if opts.dryRun then
          scribe.info("DRY RUN: The following actions would be taken:")
          fctxDef.artifacts.foreach { artifact =>
            val sourcePathStr =
              if UrlResolver.isRemote(artifact.path) then s"remote artifact at ${artifact.path}"
              else (artifactsDir / os.RelPath(artifact.path)).toString
            val destPath =
              if UrlResolver.isRemote(artifact.path) then
                workingDir / os.RelPath(new URI(artifact.path).getPath.stripPrefix("/"))
              else workingDir / os.RelPath(artifact.path).last
            val action = artifact.swapAs match
              case SwapAs.Symlink => "Create symlink"
              case SwapAs.Copy    => "Copy artifact"
            scribe.info(s"- $action: $destPath -> $sourcePathStr")
          }
          return

        val backups      = collection.mutable.ListBuffer.empty[(Path, Path)]
        val createdFiles = collection.mutable.ListBuffer.empty[Path]

        try
          // Use a for comprehension to handle potential errors with remote artifacts
          val artifactProcessingResult =
            for artifact <- fctxDef.artifacts
            yield
              val sourcePathEither: Either[String, Path] =
                if UrlResolver.isRemote(artifact.path) then handleRemoteArtifact(artifact)
                else Right(artifactsDir / os.RelPath(artifact.path))

              sourcePathEither.map(sourcePath => (artifact, sourcePath))

          // Check for errors
          val (errors, successfulArtifacts) = artifactProcessingResult.partitionMap(identity)

          if errors.nonEmpty then
            errors.foreach(e => scribe.error(e))
            scribe.error("Failed to process one or more artifacts. Aborting load.")
            return

          successfulArtifacts.foreach { case (artifact, sourcePath) =>
            val destPath =
              if UrlResolver.isRemote(artifact.path) then
                workingDir / os.RelPath(new URI(artifact.path).getPath.stripPrefix("/"))
              else workingDir / os.RelPath(artifact.path).last

            scribe.debug(s"Processing artifact: ${artifact.path}")
            scribe.debug(s"Source path: $sourcePath")
            scribe.debug(s"Destination path: $destPath")
            scribe.debug(s"Final sourcePath: $sourcePath, destPath: $destPath")

            os.makeDir.all(destPath / os.up)

            // MD5 check for local artifacts
            if !UrlResolver.isRemote(artifact.path) then
              artifact.md5.foreach { expectedMd5 =>
                val actualMd5 = Hashing.calculateMd5(sourcePath)
                if actualMd5 != expectedMd5 then
                  scribe.warn(s"Checksum mismatch for ${artifact.path}: Expected $expectedMd5, got $actualMd5")
              }

            if os.exists(destPath) && !opts.force then
              scribe.warn(s"Destination file exists, skipping: $destPath. Use --force to overwrite.")
            else
              if os.exists(destPath) then
                val backupPath = destPath / os.up / s"${destPath.last}.fctx_bak"
                os.move(destPath, backupPath)
                backups += (backupPath -> destPath)
                scribe.debug(s"Backed up $destPath to $backupPath")

              artifact.swapAs match
                case SwapAs.Symlink =>
                  scribe.debug("Creating symlink...")
                  os.symlink(link = destPath, dest = sourcePath)
                  createdFiles += destPath
                  scribe.info(s"Created symlink: $destPath -> $sourcePath")
                case SwapAs.Copy =>
                  os.copy(sourcePath, destPath, createFolders = true, replaceExisting = true)
                  createdFiles += destPath
                  scribe.info(s"Copied artifact: $sourcePath -> $destPath")
          }

          context.state.setActiveFctx(first.model.ActiveFctx(fctxDef.name, fctxConfDir.toString))

          backups.foreach { case (backupPath, _) => os.remove.all(backupPath) }
          scribe.debug("Load successful, removed backups.")

        catch
          case e: Exception =>
            scribe.error(s"Failed to load fctx: ${e.getMessage}", e)
            backups.foreach { case (backupPath, originalPath) =>
              try os.move(backupPath, originalPath, replaceExisting = true)
              catch
                case e: Exception =>
                  scribe.error(s"Failed to move backup from $backupPath to $originalPath: ${e.getMessage}", e)
            }
            createdFiles.foreach(p =>
              try os.remove.all(p)
              catch case e: Exception => scribe.error(s"Failed to remove created files: ${e.getMessage}", e),
            )
            scribe.info("Restored file system to previous state.")
