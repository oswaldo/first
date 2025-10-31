package first

import com.monovore.decline._
import cats.implicits._

object Main extends CommandApp(
  name = "first",
  header = "A tool for full context swapping",
  main = {
    // Defines the `help` subcommand
    val helpCmd = Opts.subcommand(
      name = "help",
      help = "Display help information."
    ) { Opts.unit.map(_ => println("Help message will be displayed here.")) }

    // Defines the `ls` subcommand
    val lsCmd = Opts.subcommand(
      name = "ls",
      help = "List all available contexts."
    ) { Opts.unit.map(_ => println("fctx1\nfctx2")) }

    // A placeholder for other commands to be added later
    val placeholderCmd = Opts.subcommand(
      name = "placeholder",
      help = "A placeholder command."
    ) { Opts.unit }

    // Combines all subcommands into a single command structure
    (helpCmd orElse lsCmd orElse placeholderCmd).map {
  }
)
