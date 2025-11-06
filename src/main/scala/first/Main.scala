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
        sealed trait CliCommand
        case class SaveCmd(opts: SaveCommand.SaveOpts) extends CliCommand
        case class LoadCmd(opts: LoadCommand.LoadOpts) extends CliCommand
        case class SwapCmd(opts: SwapCommand.SwapOpts) extends CliCommand
        case object LsCmd                              extends CliCommand
        case object HelpCmd                            extends CliCommand

        val saveCmd =
          Opts.subcommand("save", "Save a new fctx definition.")(SaveCommand.saveOpts).map(SaveCmd.apply)

        val loadCmd =
          Opts.subcommand("load", "Load an fctx.")(LoadCommand.loadOpts).map(LoadCmd.apply)

        val swapCmd = Opts
          .subcommand("swap", "Swap from the currently active fctx to a new one.")(SwapCommand.swapOpts)
          .map(SwapCmd.apply)

        val lsCmd = Opts.subcommand("ls", "List all available contexts.")(Opts.unit.map(_ => LsCmd))

        val helpCmd = Opts.subcommand("help", "Display help information.")(Opts.unit.map(_ => HelpCmd))

        val subcommands: Opts[CliCommand] = saveCmd orElse loadCmd orElse swapCmd orElse lsCmd orElse helpCmd

        val atOpt = Opts.option[String]("at", "Specify the working directory.").orNone

        (subcommands, atOpt).mapN { (cmd, at) =>
          Logging.configure()
          val workingDir = at.map(p => os.Path(p)).getOrElse(os.pwd)
          at.foreach(path => System.setProperty("user.dir", os.Path(path).toString))
          val context = new Context(workingDir)

          scribe.info(s"Context: $context, WorkingDir: $workingDir") // Test usage

          cmd match
            case SaveCmd(opts) => new Save().run(opts, context)
            case LoadCmd(opts) => new Load().run(opts, context)
            case SwapCmd(opts) => new Swap().run(opts, context)
            case LsCmd =>
              val reader   = new ConfigReader()
              val contexts = reader.listAvailableContextsWithPaths(workingDir)
              if contexts.isEmpty then scribe.info("No contexts found.")
              else
                scribe.info("Available contexts:")
                contexts.foreach { case (c, paths) =>
                  scribe.info(s"$c:")
                  paths.foreach(path => scribe.info(s"  $path"))
                }
            case HelpCmd =>
              scribe.info("Help message will be displayed here.")
        },
    )
