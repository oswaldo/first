package first

import scala.cli.build.BuildInfo

import cats.implicits.*
import com.monovore.decline.*

object Main
    extends CommandApp(
      name = "first",
      header = "A tool for full context swapping",
      main =
        import CliDef.*
        val versionOpt = Opts.flag("version", help = "Print version information.").map { _ =>
          val version = BuildInfo.projectVersion.getOrElse("unknown")
          println(s"first v$version")
        }

        versionOpt orElse (subcommands, atOpt).mapN { (cmd, at) =>
          new AppRunner().run(cmd, at)
        },
    )
