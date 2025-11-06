package first.core

import first.cli.LoadCommand.LoadOpts
import first.config.ConfigReader
import first.config.FctxDef
import first.config.SwapAs

import os.*

class Load:
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
            val sourcePath = artifactsDir / os.RelPath(artifact.path)
            val destPath   = workingDir / os.RelPath(artifact.path)
            val action = artifact.swapAs match
              case SwapAs.Symlink => "Create symlink"
              case SwapAs.Copy    => "Copy artifact"
            scribe.info(s"- $action: $destPath -> $sourcePath")
          }
          return

        val backups      = collection.mutable.ListBuffer.empty[(Path, Path)]
        val createdFiles = collection.mutable.ListBuffer.empty[Path]

        try
          fctxDef.artifacts.foreach { artifact =>
            val sourcePath = artifactsDir / os.RelPath(artifact.path)
            val destPath   = workingDir / os.RelPath(artifact.path)

            scribe.debug(s"Processing artifact: ${artifact.path}")
            scribe.debug(s"Source path: $sourcePath")
            scribe.debug(s"Destination path: $destPath")

            os.makeDir.all(destPath / os.up)

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
