package first.cli

import first.config.SwapAs

import cats.implicits.*
import com.monovore.decline.*
import os.Path

object SaveCommand:
  case class SaveOpts(
      contextName: String,
      artifacts: List[String],
      includes: List[String],
      swapAs: SwapAs,
      force: Boolean,
      dryRun: Boolean,
      verbose: Boolean,
      toContextPath: Option[Path],
      link: Boolean,
  )

  val saveOpts: Opts[SaveOpts] =
    val contextNameOpts = Opts.argument[String](metavar = "context-name").validate("Invalid context name") { name =>
      name.matches("^[a-zA-Z0-9_.-]+$") && !name.contains("..")
    }
    val artifactsOpt = Opts
      .option[String](
        long = "artifacts",
        help = "A comma-separated list of file or directory paths to be included as artifacts.",
      )
      .map(_.split(',').filter(_.nonEmpty).toList)
      .withDefault(List.empty)
    val includesOpt = Opts
      .option[String](
        long = "includes",
        help = "A comma-separated list of fctx names or paths to include.",
      )
      .map(_.split(',').filter(_.nonEmpty).toList)
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
    val toOpt = Opts
      .option[String](
        long = "to",
        help = "Save context to a specific path.",
      )
      .map(s => os.Path(s, os.pwd))
      .orNone
    val linkOpt =
      Opts.flag(long = "link", help = "Replace original files with symlinks to the saved artifacts.").orFalse

    (contextNameOpts, artifactsOpt, includesOpt, swapAsOpt, forceOpt, dryRunOpt, verboseOpt, toOpt, linkOpt).mapN(
      SaveOpts.apply,
    )
