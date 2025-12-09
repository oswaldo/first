package first.core

import first.cli.UpdateCommand.UpdateOpts
import first.config.ConfigReader

class Update:
  def run(opts: UpdateOpts, context: Context): Unit =
    if opts.verbose then
      scribe.Logger.root.withMinimumLevel(scribe.Level.Debug).replace()
      scribe.debug("Verbose logging enabled.")

    val contextName = opts.contextName.orElse(context.state.activeFctx.map(_.name)) match
      case Some(name) => name
      case None =>
        scribe.error("No context specified and no active context found.")
        return

    scribe.debug(s"Updating context: $contextName")

    val configReader = new ConfigReader()
    configReader.load(contextName, context.workingDir) match
      case Left(error) =>
        scribe.error(s"Failed to load context '$contextName': $error")
      case Right(fctxDef) =>
        scribe.info(s"Loaded context '${fctxDef.name}' with ${fctxDef.artifacts.size} artifacts")
        // 1. Process Forget
        val pathsToForget       = opts.forget.map(p => ArtifactProcessor.resolveConfigPath(p, context.workingDir)).toSet
        val existingAfterForget = fctxDef.artifacts.filterNot(a => pathsToForget.contains(a.path))

        if pathsToForget.nonEmpty then
          scribe.info(s"Forgetting ${pathsToForget.size} artifacts: ${pathsToForget.mkString(", ")}")

        // 2. Process Add (New Artifacts)
        val newProcessed    = ArtifactProcessor.process(opts.add, context.workingDir, opts.swapAs)
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
        val fctxConfDir  = context.workingDir / ".then" / fctxDef.name
        val fctxConfPath = fctxConfDir / "fctx-def.conf"
        val artifactsDir = fctxConfDir / "artifacts"
        val backupPath   = fctxConfDir / "fctx-def.conf.bak"

        if opts.dryRun then
          scribe.info("DRY RUN: The following actions would be taken:")
          newProcessed.foreach { case (a, _) => scribe.info(s"- Add/Update artifact: ${a.path}") }
          if updatedIncludes != fctxDef.includes then scribe.info(s"- Update includes: $updatedIncludes")
          scribe.info(s"- Write to file: $fctxConfPath")
          scribe.info("--- HOCON Content ---")
          scribe.info(hoconContent)
          scribe.info("--- End HOCON Content ---")
          return

        try
          if os.exists(fctxConfPath) then os.move(fctxConfPath, backupPath, replaceExisting = true)

          os.makeDir.all(artifactsDir)
          newProcessed.foreach { case (artifact, sourcePathOpt) =>
            sourcePathOpt match
              case Some(sourcePath) =>
                val destPath = artifactsDir / os.RelPath(artifact.path)
                os.copy(sourcePath, destPath, createFolders = true, replaceExisting = true)
                scribe.debug(s"Copied artifact: $sourcePath -> $destPath")
              case None =>
                scribe.debug(s"Remote artifact (no copy): ${artifact.path}")
          }

          os.write(fctxConfPath, hoconContent)
          scribe.info(s"Successfully updated fctx '${fctxDef.name}'")

          if os.exists(backupPath) then os.remove(backupPath)

        catch
          case e: Exception =>
            scribe.error(s"Failed to update fctx: ${e.getMessage}", e)
            if os.exists(backupPath) then
              try
                os.move(backupPath, fctxConfPath, replaceExisting = true)
                scribe.info("Restored backup of fctx-def.conf successfully.")
              catch
                case restoreError: Exception =>
                  scribe.error(s"FATAL: Failed to restore backup: ${restoreError.getMessage}", restoreError)
