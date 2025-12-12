package first.core

import first.cli.SwapCommand.SwapOpts
import first.config.ConfigReader
import first.config.SwapAs
import first.model.ActiveFctx

class Swap:
  def run(opts: SwapOpts, context: Context): Unit =
    if opts.verbose then
      scribe.Logger.root.withMinimumLevel(scribe.Level.Debug).replace()
      scribe.debug("Verbose logging enabled.")

    import context.workingDir
    val configReader = ConfigReader()

    val activeFctxOpt = context.state.activeFctx
    if activeFctxOpt.isEmpty then
      scribe.error("No active fctx found. Please load an fctx first.")
      return

    val activeFctx     = activeFctxOpt.get
    val targetFctxName = opts.contextName

    if activeFctx.name == targetFctxName then
      scribe.warn(s"Fctx '$targetFctxName' is already active. Nothing to do.")
      return

    val targetFctxDefEither = configReader.load(targetFctxName, workingDir)
    if targetFctxDefEither.isLeft then
      scribe.error(s"Failed to load target fctx '$targetFctxName': ${targetFctxDefEither.swap.toOption.get}")
      return
    val targetFctxDef = targetFctxDefEither.toOption.get

    val currentFctxDefEither = configReader.load(activeFctx.name, workingDir)
    if currentFctxDefEither.isLeft then
      scribe.error(s"Failed to load current fctx '${activeFctx.name}': ${currentFctxDefEither.swap.toOption.get}")
      return
    val currentFctxDef = currentFctxDefEither.toOption.get

    val currentArtifacts = currentFctxDef.artifacts.map(a => a.path -> a).toMap
    val targetArtifacts  = targetFctxDef.artifacts.map(a => a.path -> a).toMap

    val toRemove = currentArtifacts.keySet -- targetArtifacts.keySet
    val toAdd    = targetArtifacts.keySet -- currentArtifacts.keySet
    val toKeep   = currentArtifacts.keySet.intersect(targetArtifacts.keySet)

    if opts.dryRun then
      scribe.info("DRY RUN: The following actions would be taken:")
      toRemove.foreach(p => scribe.info(s"- Remove: $p"))
      toAdd.foreach(p => scribe.info(s"- Add: $p"))
      toKeep.foreach(p => scribe.info(s"- Keep: $p"))
      return

    scribe.info(s"Swapping from '${activeFctx.name}' to '$targetFctxName'...")

    // Unload artifacts that are not in the target fctx
    toRemove.foreach { path =>
      val destPath = workingDir / os.RelPath(path)
      if os.exists(destPath) then
        os.remove(destPath)
        scribe.info(s"Removed: $destPath")
    }

    // Load artifacts that are not in the current fctx
    val fctxConfDir  = workingDir / ".then" / targetFctxName
    val artifactsDir = fctxConfDir / "artifacts"

    toAdd.foreach { path =>
      val artifact   = targetArtifacts(path)
      val sourcePath = artifactsDir / os.RelPath(artifact.path)
      val destPath   = workingDir / os.RelPath(artifact.path)

      os.makeDir.all(destPath / os.up)

      if os.exists(destPath) && !opts.force then
        scribe.warn(s"Destination file exists, skipping: $destPath. Use --force to overwrite.")
      else
        if os.exists(destPath) then os.remove.all(destPath) // Remove existing before overwrite

        artifact.swapAs match
          case SwapAs.Symlink =>
            os.symlink(destPath, sourcePath)
            scribe.info(s"Created symlink: $destPath -> $sourcePath")
          case SwapAs.Copy =>
            os.copy(sourcePath, destPath, createFolders = true, replaceExisting = true)
            scribe.info(s"Copied artifact: $sourcePath -> $destPath")
    }

    // Update artifacts that are in both fctx
    toKeep.foreach { path =>
      val artifact   = targetArtifacts(path)
      val sourcePath = artifactsDir / os.RelPath(artifact.path)
      val destPath   = workingDir / os.RelPath(artifact.path)

      os.makeDir.all(destPath / os.up)

      if os.exists(destPath) then os.remove.all(destPath) // Remove existing before overwrite

      artifact.swapAs match
        case SwapAs.Symlink =>
          os.symlink(destPath, sourcePath)
          scribe.info(s"Updated symlink: $destPath -> $sourcePath")
        case SwapAs.Copy =>
          os.copy(sourcePath, destPath, createFolders = true, replaceExisting = true)
          scribe.info(s"Updated artifact: $sourcePath -> $destPath")
    }

    context.state.setActiveFctx(ActiveFctx(targetFctxName, (workingDir / ".then" / targetFctxName).toString))
    scribe.info(s"Successfully swapped to fctx '$targetFctxName'.")
