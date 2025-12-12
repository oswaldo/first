package first.core

import first.cli.SaveCommand.SaveOpts

import os.*

class Save(globalConfig: first.config.GlobalConfig = first.config.GlobalConfig):
  def run(opts: SaveOpts, context: Context): Either[Throwable, Unit] =
    if opts.verbose then
      scribe.Logger.root.withMinimumLevel(scribe.Level.Debug).replace()
      scribe.debug("Verbose logging enabled.")

    val workingDir   = context.workingDir
    val fctxConfDir  = opts.toContextPath.getOrElse(workingDir / ".then" / opts.contextName)
    val artifactsDir = fctxConfDir / "artifacts"
    val fctxConfPath = fctxConfDir / "fctx-def.conf"

    scribe.debug(s"Target fctx directory: $fctxConfDir")

    // List of (Artifact Definition, Optional Source Path)
    // Source Path is None for remote artifacts (not copied during save)
    // Source Path is Some(p) for local/external artifacts
    val processedArtifacts = ArtifactProcessor.process(opts.artifacts, workingDir, opts.swapAs)

    // Create FctxDef for writing (empty config/includes for now as Save overwrites)
    val fctxDef = first.config.FctxDef(
      name = opts.contextName,
      config = org.ekrich.config.ConfigFactory.empty("save-command-generated"),
      includes = opts.includes,
      artifacts = processedArtifacts.map(_._1),
    )

    val hoconContent = FctxWriter.toHocon(fctxDef)

    if opts.dryRun then
      scribe.info("DRY RUN: The following actions would be taken:")
      processedArtifacts.foreach { case (artifact, sourcePathOpt) =>
        sourcePathOpt match
          case Some(sourcePath) =>
            val destPath = artifactsDir / os.RelPath(artifact.path)
            scribe.info(s"- Copy: $sourcePath -> $destPath")
            if opts.link then scribe.info(s"- Link: $sourcePath -> $destPath")
          case None =>
            scribe.info(s"- Remote Artifact (no copy): ${artifact.path}")
      }
      if os.exists(fctxConfPath) then
        scribe.info(s"- Backup existing file: $fctxConfPath to ${fctxConfPath.toString + ".bak"}")
      scribe.info(s"- Write to file: $fctxConfPath")
      if opts.toContextPath.isDefined then scribe.info(s"- Register with GlobalConfig: $fctxConfPath")
      scribe.info("--- HOCON Content ---")
      scribe.info(hoconContent)
      scribe.info("--- End HOCON Content ---")
      Right(())

    if os.exists(fctxConfPath) && !opts.force then
      return Left(
        RuntimeException(
          s"Configuration file already exists: $fctxConfPath. Use --force to overwrite. Aborting.",
        ),
      )

    val backupPath = fctxConfDir / "fctx-def.conf.bak"

    try
      if os.exists(fctxConfPath) then
        os.move(fctxConfPath, backupPath, replaceExisting = true)
        scribe.debug(s"Backed up existing config to $backupPath")

      os.makeDir.all(artifactsDir)
      scribe.debug(s"Ensured artifacts directory exists: $artifactsDir")
      processedArtifacts.foreach { case (artifact, sourcePathOpt) =>
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
            scribe.debug(s"Skipping copy for remote artifact: ${artifact.path}")
      }

      os.write(fctxConfPath, hoconContent)
      scribe.info(s"Successfully saved fctx '${opts.contextName}' to $fctxConfPath")

      if opts.toContextPath.isDefined then
        globalConfig.addContext(fctxConfPath) match
          case Left(e)  => scribe.warn(s"Failed to register context with GlobalConfig: $e")
          case Right(_) => scribe.debug(s"Registered context with GlobalConfig: $fctxConfPath")

      if os.exists(backupPath) then
        os.remove(backupPath)
        scribe.debug(s"Removed backup file $backupPath")

      Right(())
    catch
      case e: Exception =>
        // scribe.error is handled above in AppRunner but we want to cleanup first?
        // AppRunner catches Exception.
        // But we need to cleanup backup.
        scribe.error(s"Failed to save fctx: ${e.getMessage}", e)
        if os.exists(backupPath) then
          try
            os.move(backupPath, fctxConfPath, replaceExisting = true)
            scribe.info("Restored backup of fctx-def.conf successfully.")
          catch
            case restoreError: Exception =>
              scribe.error(s"FATAL: Failed to restore backup: ${restoreError.getMessage}", restoreError)
        if os.exists(artifactsDir) then
          scribe.warn("The artifacts directory may contain partially copied files. Cleaning up.")
          os.remove.all(artifactsDir)
        Left(e)
