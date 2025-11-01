package first

import com.monovore.decline._
import first.config.ConfigReader

import java.nio.file.Paths

object Main
    extends CommandApp(
      name = "first",
      header = "A tool for full context swapping",
      main =
        Logging.configure()

        val helpCmd = Opts.subcommand(
          name = "help",
          help = "Display help information."
        )(Opts.unit.map(_ => scribe.info("Help message will be displayed here.")))

        val lsCmd = Opts.subcommand(
          name = "ls",
          help = "List all available contexts."
        ) {
          Opts.unit.map { _ =>
            val reader      = new ConfigReader()
            val currentPath = Paths.get(System.getProperty("user.dir"))
            val contexts    = reader.listAvailableContextsWithPaths(currentPath)
            if contexts.isEmpty then scribe.info("No contexts found.")
            else
              scribe.info("Available contexts:")
              contexts.foreach { case (context, paths) =>
                scribe.info(s"$context:")
                paths.foreach(path => scribe.info(s"  $path"))
              }
          }
        }

        // A placeholder for other commands to be added later
        val placeholderCmd = Opts.subcommand(
          name = "placeholder",
          help = "A placeholder command."
        )(Opts.unit)

        (helpCmd orElse lsCmd orElse placeholderCmd).map {
          case _ => // The logic is handled within the Opts mapping for now
        }
    )
