package first.core

import first.cli.SaveCommand.SaveOpts

import os.*

class Save:
  def run(opts: SaveOpts, context: Context): Unit =
    if opts.verbose then
      scribe.Logger.root.withMinimumLevel(scribe.Level.Debug).replace()
      scribe.debug("Verbose logging enabled.")

    val workingDir   = context.workingDir
    val fctxConfDir  = workingDir / ".then" / opts.contextName
    val artifactsDir = fctxConfDir / "artifacts"
    val fctxConfPath = fctxConfDir / "fctx-def.conf"

    scribe.debug(s"Target fctx directory: $fctxConfDir")

    // List of (Artifact Definition, Optional Source Path)
    // Source Path is None for remote artifacts (not copied during save)
    // Source Path is Some(p) for local/external artifacts
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
      scribe.info(s"- Ensure directory exists: $artifactsDir")
      processedArtifacts.foreach { case (artifact, sourcePathOpt) =>
        sourcePathOpt match
          case Some(sourcePath) =>
            val destPath = artifactsDir / os.RelPath(artifact.path)
            scribe.info(s"- Copy: $sourcePath -> $destPath")
          case None =>
            scribe.info(s"- Remote Artifact (no copy): ${artifact.path}")
      }
      if os.exists(fctxConfPath) then
        scribe.info(s"- Backup existing file: $fctxConfPath to ${fctxConfPath.toString + ".bak"}")
      scribe.info(s"- Write to file: $fctxConfPath")
      scribe.info("--- HOCON Content ---")
      scribe.info(hoconContent)
      scribe.info("--- End HOCON Content ---")
      return

    if os.exists(fctxConfPath) && !opts.force then
      scribe.error(s"Configuration file already exists: $fctxConfPath")
      scribe.error("Use --force to overwrite. Aborting.")
      return

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
          case None =>
            scribe.debug(s"Skipping copy for remote artifact: ${artifact.path}")
      }

      os.write(fctxConfPath, hoconContent)
      scribe.info(s"Successfully saved fctx '${opts.contextName}' to $fctxConfPath")

      if os.exists(backupPath) then
        os.remove(backupPath)
        scribe.debug(s"Removed backup file $backupPath")
    catch
      case e: Exception =>
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
