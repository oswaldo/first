package first.core

import first.cli.UpdateCommand.UpdateOpts
import first.config.ConfigReader

import scala.util.Try

class Update(configReader: ConfigReader = ConfigReader()):
  def run(opts: UpdateOpts, context: Context): Either[Throwable, Unit] =
    if opts.verbose then
      scribe.Logger.root.withMinimumLevel(scribe.Level.Debug).replace()
      scribe.debug("Verbose logging enabled.")

    val contextNameEither = opts.contextName
      .orElse(configReader.detectContextName(context.workingDir))
      .orElse(context.state.activeFctx.map(_.name)) match
      case Some(name) => Right(name)
      case None =>
        Left(RuntimeException("No context specified and no active context found."))

    contextNameEither.flatMap { contextName =>
      scribe.debug(s"Updating context: $contextName")

      val available    = configReader.listAvailableContextsWithPaths(context.workingDir)
      val contextPaths = available.getOrElse(contextName, Nil)
      scribe.debug(s"Available contexts keys: ${available.keys.mkString(", ")}")
      scribe.debug(s"Available contexts for '$contextName': $contextPaths")

      if contextPaths.isEmpty then Left(RuntimeException(s"Context '$contextName' not found."))
      else
        // Prioritize context in .then if multiple? Or just pick first?
        // Same logic as Mv:
        // Use strict resolution logic
        ConfigReader
          .resolveWriteTarget(contextPaths, context.workingDir)
          .left
          .map:
            case first.config.AmbiguousContextError(msg) => RuntimeException(msg)
            case e                                       => RuntimeException(s"Error determining context path: $e")
          .flatMap { fctxConfPath =>
            val fctxConfDir = fctxConfPath / os.up

            // Now load from that specific path to get current state
            import first.config.ConfigError // Ensure import
            configReader
              .load(
                contextName,
                context.workingDir,
              )
              .left
              .map(e => RuntimeException(s"Failed to load context '$contextName': $e"))
              .flatMap { fctxDef =>
                scribe.info(s"Loaded context '${fctxDef.name}' with ${fctxDef.artifacts.size} artifacts")
                // 1. Process Forget
                val pathsToForget =
                  opts.forget.map(p => ArtifactProcessor.resolveConfigPath(p, context.workingDir)).toSet
                val existingAfterForget = fctxDef.artifacts.filterNot(a => pathsToForget.contains(a.path))

                if pathsToForget.nonEmpty then
                  scribe.info(s"Forgetting ${pathsToForget.size} artifacts: ${pathsToForget.mkString(", ")}")

                // 2. Process Add (New Artifacts)
                Try(ArtifactProcessor.process(opts.add, context.workingDir, opts.swapAs)).toEither.flatMap:
                  newProcessed =>
                    val newArtifactsMap = newProcessed.map { case (a, src) => a.path -> (a, src) }.toMap

                    // 3. Merge Add with Existing (after Forget)
                    val existingFiltered = existingAfterForget.filterNot(a => newArtifactsMap.contains(a.path))
                    val updatedArtifacts = existingFiltered ++ newProcessed.map(_._1)

                    // 4. Process Includes
                    val includesToForget            = opts.forgetIncludes.toSet
                    val existingIncludesAfterForget = fctxDef.includes.filterNot(i => includesToForget.contains(i))

                    // Merge with new includes (avoiding duplicates)
                    val updatedIncludes = (existingIncludesAfterForget ++ opts.includes).distinct

                    val updatedFctxDef = fctxDef.copy(artifacts = updatedArtifacts, includes = updatedIncludes)

                    // 5. Write back
                    val hoconContent = FctxWriter.toHocon(updatedFctxDef)
                    // fctxConfDir and fctxConfPath determined above!
                    val artifactsDir = fctxConfDir / "artifacts"
                    val backupPath   = fctxConfDir / "fctx-def.conf.bak"

                    scribe.debug(s"Processing update for artifactsDir: $artifactsDir")
                    scribe.debug(s"New processed artifacts: ${newProcessed.map(_._1.path)}")

                    if opts.dryRun then
                      scribe.info("DRY RUN: The following actions would be taken:")
                      newProcessed.foreach { case (a, src) =>
                        scribe.info(s"- Add/Update artifact: ${a.path}")
                        if opts.link && src.isDefined then scribe.info(s"  - Link: ${src.get} -> (artifact)")
                      }
                      if updatedIncludes != fctxDef.includes then scribe.info(s"- Update includes: $updatedIncludes")
                      scribe.info(s"- Write to file: $fctxConfPath")
                      scribe.info("--- HOCON Content ---")
                      scribe.info(hoconContent)
                      scribe.info("--- End HOCON Content ---")
                      Right(())
                    else
                      Try {
                        if os.exists(fctxConfPath) then os.move(fctxConfPath, backupPath, replaceExisting = true)

                        os.makeDir.all(artifactsDir)
                        newProcessed.foreach { case (artifact, sourcePathOpt) =>
                          sourcePathOpt match
                            case Some(sourcePath) =>
                              val destPath = artifactsDir / os.RelPath(artifact.path)
                              os.copy(sourcePath, destPath, createFolders = true, replaceExisting = true)
                              scribe.debug(s"Copied artifact: $sourcePath -> $destPath")

                              if opts.link then
                                SymlinkManager.createSymlink(sourcePath, destPath, relative = true) match
                                  case Left(e)  => scribe.warn(s"Failed to link $sourcePath: $e")
                                  case Right(_) => scribe.debug(s"Linked $sourcePath -> $destPath")
                            case None =>
                              scribe.debug(s"Remote artifact (no copy): ${artifact.path}")
                        }

                        os.write(fctxConfPath, hoconContent)
                        scribe.info(s"Successfully updated fctx '${fctxDef.name}'")

                        if os.exists(backupPath) then os.remove(backupPath)
                      }.toEither.left.map { e =>
                        scribe.error(s"Failed to update fctx: ${e.getMessage}", e)
                        if os.exists(backupPath) then
                          try
                            os.move(backupPath, fctxConfPath, replaceExisting = true)
                            scribe.info("Restored backup of fctx-def.conf successfully.")
                          catch
                            case restoreError: Exception =>
                              scribe.error(s"FATAL: Failed to restore backup: ${restoreError.getMessage}", restoreError)
                        e
                      }
              }
          }
    }
