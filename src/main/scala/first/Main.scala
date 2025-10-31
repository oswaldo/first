package first

import com.monovore.decline.*
import cats.implicits.*
import first.config.{ConfigError, ConfigReader, FctxDef}
import java.nio.file.Paths

object Main
    extends CommandApp(
      name = "first",
      header = "A tool for full context swapping",
      main =
        val helpCmd = Opts.subcommand(
          name = "help",
          help = "Display help information."
        )(Opts.unit.map(_ => println("Help message will be displayed here.")))

        val lsCmd = Opts.subcommand(
          name = "ls",
          help = "List all available contexts."
        ) {
          Opts.unit.map { _ =>
            val reader      = new ConfigReader()
            val currentPath = Paths.get(System.getProperty("user.dir"))
            // This will need to be refined to list all discovered contexts, not just one
            // For now, we'll try to load a dummy context to show the reader works
            reader.load("my-context", currentPath) match
              case Right(fctxDef) => println(s"Found context: ${fctxDef.name}")
              case Left(error)    => println(s"Error listing contexts: $error")
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
