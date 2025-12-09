package first.core

import first.config.FctxDef

object FctxWriter:
  def toHocon(fctxDef: FctxDef): String =
    val includes =
      if fctxDef.includes.nonEmpty then
        val listContent = fctxDef.includes.map(i => s"\"$i\"").mkString(", ")
        s"includes = [$listContent]\n\n"
      else ""

    val artifacts =
      if fctxDef.artifacts.nonEmpty then
        fctxDef.artifacts
          .map { a =>
            val swapAsString = a.swapAs.toString.toLowerCase
            val md5String    = a.md5.map(md5 => s", md5 = \"$md5\"").getOrElse("")
            s"""  { path = "${a.path}", swapAs = "$swapAsString"$md5String }"""
          }
          .mkString("artifacts = [\n", ",\n", "\n]")
      else "artifacts = []"

    includes + artifacts
