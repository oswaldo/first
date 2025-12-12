package first.cli

import cats.implicits.*
import com.monovore.decline.*
import os.Path

object MvCommand:
  case class MvOpts(
      name: String,
      dest: Path,
  )

  val mvOpts: Opts[MvOpts] =
    val nameOpt = Opts.argument[String](metavar = "context-name")
    val destOpt = Opts.argument[String](metavar = "destination-path").map(s => os.Path(s, os.pwd))

    (nameOpt, destOpt).mapN(MvOpts.apply)
