package first

import first.CliDef.*
import first.config.ConfigReader
import first.core.Context
import first.core.ExitHandler
import first.core.Load
import first.core.Mv
import first.core.PlatformExitHandler
import first.core.Save
import first.core.Swap
import first.core.Update

class AppRunner(exitHandler: ExitHandler = PlatformExitHandler):
  def run(cmd: CliCommand, at: Option[String]): Unit =
    Logging.configure()
    try
      val workingDir = at.map(p => os.Path(p)).getOrElse(os.pwd)
      at.foreach(path => System.setProperty("user.dir", os.Path(path).toString))
      val context = Context(workingDir)

      scribe.info(s"Context: ${context.workingDir}, WorkingDir: $workingDir")

      cmd match
        case SaveCmd(opts)   => Save().run(opts, context).fold(throw _, identity)
        case LoadCmd(opts)   => Load().run(opts, context)
        case SwapCmd(opts)   => Swap().run(opts, context)
        case UpdateCmd(opts) => Update().run(opts, context).fold(throw _, identity)
        case MvCmd(opts)     => Mv().run(opts, context).fold(throw _, identity)
        case LsCmd =>
          val reader   = ConfigReader()
          val contexts = reader.listAvailableContextsWithPaths(workingDir)
          if contexts.isEmpty then scribe.info("No saved contexts found.")
          else
            scribe.info("Available contexts:")
            contexts.foreach { case (c, paths) =>
              scribe.info(s"$c:")
              paths.foreach(path => scribe.info(s"  $path"))
            }
        case HelpCmd =>
          // CommandApp handles help automatically, but if explicitly called:
          println(CliDef.command.showHelp)
    catch
      case e: Exception =>
        scribe.error(s"Command failed: ${e.getMessage}")
        scribe.debug("Stack trace:", e)
        exitHandler.exit(1)
