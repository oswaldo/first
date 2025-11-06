package first.cli

import first.config.SwapAs

import cats.implicits.*
import com.monovore.decline.*
import os.RelPath

object SaveCommand:
  case class SaveOpts(
      contextName: String,
      artifacts: List[RelPath],
      swapAs: SwapAs,
      force: Boolean,
      dryRun: Boolean,
      verbose: Boolean,
  )

  val saveOpts: Opts[SaveOpts] =
    val contextNameOpts = Opts.argument[String](metavar = "context-name")
    val artifactsOpt = Opts
      .option[String](
        long = "artifacts",
        help = "A comma-separated list of file or directory paths to be included as artifacts.",
      )
      .map(_.split(',').filter(_.nonEmpty).map(os.RelPath(_)).toList)
      .withDefault(List.empty)
    val swapAsOpt = Opts
      .option[String](
        long = "swap-as",
        help = "The method to use for swapping artifacts (symlink or copy).",
      )
      .map(first.config.SwapAs.fromString)
      .withDefault(first.config.SwapAs.Symlink)
    val forceOpt   = Opts.flag(long = "force", help = "Force overwrite of existing fctx definition.").orFalse
    val dryRunOpt  = Opts.flag(long = "dry-run", help = "Show what would be done without actually doing it.").orFalse
    val verboseOpt = Opts.flag(long = "verbose", short = "v", help = "Enable verbose output.").orFalse

    (contextNameOpts, artifactsOpt, swapAsOpt, forceOpt, dryRunOpt, verboseOpt).mapN(SaveOpts.apply)
