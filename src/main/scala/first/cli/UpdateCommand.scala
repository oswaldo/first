package first.cli

import cats.implicits.*
import com.monovore.decline.*

object UpdateCommand:
  case class UpdateOpts(
      contextName: Option[String],
      add: List[String],
      forget: List[String],
      includes: List[String],
      forgetIncludes: List[String],
      swapAs: first.config.SwapAs,
      dryRun: Boolean = false,
      verbose: Boolean = false,
      link: Boolean = false,
  )

  val updateOpts: Opts[UpdateOpts] =
    val contextName = Opts
      .argument[String](metavar = "context")
      .orNone

    val add = Opts
      .options[String]("add", short = "a", metavar = "file", help = "Add file(s) to context")
      .orEmpty

    val forget = Opts
      .options[String]("forget", short = "f", metavar = "file", help = "Remove file(s) from context")
      .orEmpty

    val includes = Opts
      .options[String]("includes", short = "i", metavar = "include", help = "Add updated includes")
      .orEmpty

    val forgetIncludes = Opts
      .options[String]("forget-includes", metavar = "include", help = "Remove includes from context")
      .orEmpty

    val swapAs = Opts
      .option[String](
        long = "swap-as",
        help = "The method to use for swapping artifacts (symlink or copy).",
      )
      .map(first.config.SwapAs.fromString)
      .withDefault(first.config.SwapAs.Symlink)

    val dryRun = Opts
      .flag("dry-run", help = "Simulate the update without making changes")
      .orFalse

    val verbose = Opts
      .flag("verbose", short = "v", help = "Enable verbose logging")
      .orFalse

    val link = Opts
      .flag("link", help = "Replace added files with symlinks to the artifacts")
      .orFalse

    (contextName, add, forget, includes, forgetIncludes, swapAs, dryRun, verbose, link).mapN(UpdateOpts.apply)
