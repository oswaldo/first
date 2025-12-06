package first

import scribe.*
import scribe.file.*
import scribe.format.*

object Logging:
  def configure(): Unit =
    import java.time.format.DateTimeFormatter
    import java.time.Instant
    import java.time.ZoneId
    import scribe.output.TextOutput

    val dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").withZone(ZoneId.systemDefault())
    val isoDate = FormatBlock { logRecord =>
      new TextOutput(dtf.format(Instant.ofEpochMilli(logRecord.timeStamp)))
    }

    val cliFormatter  = formatter"$messages$newLine"
    val fileFormatter = formatter"$isoDate $level $position - $messages"

    Logger.root
      .clearHandlers()
      .clearModifiers()
      .withHandler(
        formatter = cliFormatter,
        minimumLevel = Some(Level.Info),
      )
      .withHandler(
        formatter = fileFormatter,
        minimumLevel = Some(Level.Debug),
        writer =
          FileWriter(System.getProperty("user.dir") / ".first" / "logs" / (year % "-" % month % "-" % day % ".log")),
        outputFormat = scribe.output.format.ASCIIOutputFormat,
      )
      .replace()
