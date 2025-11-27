package first

import first.cli.LoadCommand
import first.cli.SaveCommand
import first.cli.SwapCommand

import cats.implicits.*
import com.monovore.decline.*

object CliDef:
  sealed trait CliCommand
  case class SaveCmd(opts: SaveCommand.SaveOpts) extends CliCommand
  case class LoadCmd(opts: LoadCommand.LoadOpts) extends CliCommand
  case class SwapCmd(opts: SwapCommand.SwapOpts) extends CliCommand
  case object LsCmd                              extends CliCommand
  case object HelpCmd                            extends CliCommand

  val saveCmd: Opts[SaveCmd] =
    Opts.subcommand("save", "Save a new fctx definition.")(SaveCommand.saveOpts).map(SaveCmd.apply)

  val loadCmd: Opts[LoadCmd] =
    Opts.subcommand("load", "Load an fctx.")(LoadCommand.loadOpts).map(LoadCmd.apply)

  val swapCmd: Opts[SwapCmd] = Opts
    .subcommand("swap", "Swap from the currently active fctx to a new one.")(SwapCommand.swapOpts)
    .map(SwapCmd.apply)

  val lsCmd: Opts[LsCmd.type] = Opts.subcommand("ls", "List all available contexts.")(Opts.unit.map(_ => LsCmd))

  val helpCmd: Opts[HelpCmd.type] = Opts.subcommand("help", "Display help information.")(Opts.unit.map(_ => HelpCmd))

  val subcommands: Opts[CliCommand] = saveCmd orElse loadCmd orElse swapCmd orElse lsCmd orElse helpCmd

  val atOpt: Opts[Option[String]] = Opts.option[String]("at", "Specify the working directory.").orNone

  val command: Command[(CliCommand, Option[String])] = Command(
    name = "first",
    header = "A tool for full context swapping",
  )((subcommands, atOpt).tupled)
