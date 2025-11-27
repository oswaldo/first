package first.cli

import cats.implicits.*
import com.monovore.decline.*

object SwapCommand:
  case class SwapOpts(
      contextName: String,
      force: Boolean,
      dryRun: Boolean,
      verbose: Boolean,
  )

  val swapOpts: Opts[SwapOpts] =
    val contextNameOpts = Opts.argument[String](metavar = "context-name")
    val forceOpt        = Opts.flag(long = "force", help = "Force overwrite of existing files.").orFalse
    val dryRunOpt  = Opts.flag(long = "dry-run", help = "Show what would be done without actually doing it.").orFalse
    val verboseOpt = Opts.flag(long = "verbose", short = "v", help = "Enable verbose output.").orFalse

    (contextNameOpts, forceOpt, dryRunOpt, verboseOpt).mapN(SwapOpts.apply)
