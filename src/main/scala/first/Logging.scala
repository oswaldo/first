package first

import scribe._
import scribe.file._
import scribe.format._

object Logging:
  def configure(): Unit =
    val cliFormatter  = formatter"$messages$newLine"
    val fileFormatter = formatter"$date $level $position - $messages$newLine"

    Logger.root
      .clearHandlers()
      .clearModifiers()
      .withHandler(
        formatter = cliFormatter,
        minimumLevel = Some(Level.Info)
      )
      .withHandler(
        formatter = fileFormatter,
        minimumLevel = Some(Level.Debug),
        writer = FileWriter(System.getProperty("user.dir") / ".first" / "logs" / daily())
      )
      .replace()
