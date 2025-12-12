package first.config

object ConfigWriter:
  def writeStringList(key: String, values: List[String]): String =
    if values.isEmpty then s"$key = []"
    else
      // Simple HOCON list formatting
      val listContent = values.map(v => s"\"$v\"").mkString("\n  ", ",\n  ", "\n")
      s"$key = [$listContent]"
