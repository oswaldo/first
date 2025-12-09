package first

import first.CliDef.*
import first.config.ConfigReader
import first.core.Context
import first.core.ExitHandler
import first.core.Load
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
      val context = new Context(workingDir)

      scribe.info(s"Context: ${context.workingDir}, WorkingDir: $workingDir")

      cmd match
        case SaveCmd(opts)   => new Save().run(opts, context)
        case LoadCmd(opts)   => new Load().run(opts, context)
        case SwapCmd(opts)   => new Swap().run(opts, context)
        case UpdateCmd(opts) => new Update().run(opts, context)
        case LsCmd =>
          val reader   = new ConfigReader()
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
