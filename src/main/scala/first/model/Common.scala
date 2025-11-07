package first.model

import os.Path
import upickle.default.*

object Common:
  given ReadWriter[Path] = readwriter[String].bimap[Path](
    path => path.toString(),
    str => os.Path(str),
  )
