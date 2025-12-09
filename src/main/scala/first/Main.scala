package first

import cats.implicits.*
import com.monovore.decline.*

object Main
    extends CommandApp(
      name = "first",
      header = "A tool for full context swapping",
      main =
        import CliDef.*
        (subcommands, atOpt).mapN { (cmd, at) =>
          new AppRunner().run(cmd, at)
        },
    )
