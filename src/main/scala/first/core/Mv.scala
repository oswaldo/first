package first.core

import first.cli.MvCommand.MvOpts
import first.config.ConfigError
import first.config.ConfigReader
import first.config.GlobalConfig

import scala.util.Try

import os.Path

class Mv(globalConfig: GlobalConfig = GlobalConfig):
  def run(opts: MvOpts, context: Context): Either[Throwable, Unit] =
    val reader = ConfigReader()
    val paths  = reader.listAvailableContextsWithPaths(context.workingDir)

    val contextPaths = paths.get(opts.name).getOrElse(Nil)

    if contextPaths.isEmpty then Left(RuntimeException(s"Context '${opts.name}' not found."))
    else
      if contextPaths.size > 1 then
        scribe.warn(s"Multiple locations found for '${opts.name}': $contextPaths. Using the first one.")

      ConfigReader
        .resolveWriteTarget(contextPaths, context.workingDir)
        .left
        .map:
          case first.config.AmbiguousContextError(msg) => RuntimeException(msg)
          case e                                       => RuntimeException(s"Error determining context path: $e")
        .flatMap { oldDefPath =>
          val oldContextDir  = oldDefPath / os.up
          val dest           = opts.dest
          val newDefPath     = dest / "fctx-def.conf"
          val newContextName = dest.last
          val renameNeeded   = newContextName != opts.name

          // Load context BEFORE moving if we might need to update it
          val fctxDefToUpdateEither =
            if renameNeeded then
              reader
                .load(opts.name, context.workingDir)
                .map(Option(_))
                .left
                .map(e => RuntimeException(s"Failed to load context for rename: $e"))
            else Right(None)

          fctxDefToUpdateEither.flatMap { fctxDefOpt =>
            scribe.info(s"Moving context '${opts.name}' from $oldContextDir to $dest")

            if os.exists(dest) then Left(RuntimeException(s"Destination '$dest' already exists."))
            else
              // Move
              Try(os.move(oldContextDir, dest)).toEither.flatMap { _ =>

                // Rename context if needed
                if renameNeeded && fctxDefOpt.isDefined then
                  val updatedFctxDef = fctxDefOpt.get.copy(name = newContextName)
                  val hocon          = FctxWriter.toHocon(updatedFctxDef)
                  Try(os.write.over(newDefPath, hocon)) match
                    case scala.util.Failure(e) => scribe.warn(s"Failed to write renamed context config: $e")
                    case _ => scribe.info(s"Renamed context from '${opts.name}' to '$newContextName'")

                // Update GlobalConfig
                // We always try to update or add, handling errors gracefully but logging
                // Since GlobalConfig operations return Either[ConfigError, Unit], we can map them if we want strictness,
                // but the original code just warned on failure. We'll maintain that warning behavior but inside the Right path.

                globalConfig.listContextPaths() match
                  case Right(paths) if paths.contains(oldDefPath) =>
                    globalConfig.updateContext(oldDefPath, newDefPath) match
                      case Left(e)  => scribe.warn(s"Failed to update GlobalConfig: $e")
                      case Right(_) => scribe.debug("Updated GlobalConfig.")
                  case Right(_) =>
                    globalConfig.addContext(newDefPath) match
                      case Left(e)  => scribe.warn(s"Failed to register new location in GlobalConfig: $e")
                      case Right(_) => scribe.debug("Registered new location in GlobalConfig.")
                  case Left(e) => scribe.warn(s"Failed to read GlobalConfig: $e")

                // Update Symlinks
                updateSymlinks(context.workingDir, oldContextDir, dest)

                scribe.info(s"Moved context '${opts.name}' to $dest")
                Right(())
              }
          }
        }

  private def updateSymlinks(rootDir: Path, oldTargetBase: Path, newTargetBase: Path): Unit =
    // Naive walk. For large workspaces this might be slow, but safe for now.
    // Skip .git and other ignorable dirs?
    os.walk(rootDir, skip = p => p.last.startsWith(".git")).foreach { p =>
      if os.isLink(p) then
        try
          val linkTarget = os.readLink(p)
          // We only care if the link target (resolved) starts with oldTargetBase
          // Using toString to avoid strict Path dependence issues
          if linkTarget.toString.startsWith(oldTargetBase.toString) then
            val relStr    = linkTarget.toString.substring(oldTargetBase.toString.length).stripPrefix("/")
            val relative  = os.RelPath(relStr)
            val newTarget = newTargetBase / relative

            SymlinkManager.createSymlink(p, newTarget, relative = true)
            scribe.debug(s"Updated symlink $p -> $newTarget")
        catch case e: Throwable => scribe.debug(s"Failed to check/update link $p: ${e.getMessage}")
    }
