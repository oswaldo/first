package first

import first.cli.LoadCommand
import first.cli.SaveCommand
import first.cli.SwapCommand
import first.config.ConfigReader
import first.core.Context
import first.core.Load
import first.core.Save
import first.core.Swap

import cats.implicits.*
import com.monovore.decline.*

object Main
    extends CommandApp(
      name = "first",
      header = "A tool for full context swapping",
      main =
        import CliDef.*
        (subcommands, atOpt).mapN { (cmd, at) =>
          Logging.configure()
          val workingDir = at.map(p => os.Path(p)).getOrElse(os.pwd)
          at.foreach(path => System.setProperty("user.dir", os.Path(path).toString))
          val context = new Context(workingDir)

          scribe.info(s"Context: ${context.workingDir}, WorkingDir: $workingDir") // Test usage

          try
            cmd match
              case SaveCmd(opts) => new Save().run(opts, context)
              case LoadCmd(opts) => new Load().run(opts, context)
              case SwapCmd(opts) => new Swap().run(opts, context)
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
              System.exit(1)
        },
    )
