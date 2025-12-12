package first

import scribe.*
import scribe.file.*
import scribe.format.*

object Logging:
  import java.time.format.DateTimeFormatter
  import java.time.Instant
  import java.time.ZoneId
  import scribe.output.TextOutput
  import scala.scalanative.posix.unistd

  val pid: Int = unistd.getpid()

  private val dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").withZone(ZoneId.systemDefault())
  private val isoDate = FormatBlock { logRecord =>
    new TextOutput(dtf.format(Instant.ofEpochMilli(logRecord.timeStamp)))
  }

  val fileFormatter: Formatter = formatter"$isoDate $level $position - $messages"

  def createFileWriter(): FileWriter = FileWriter(
    System.getProperty("user.dir") / ".first" / "logs" /
      (year % "-" % month % "-" % day) /
      (year % "-" % month % "-" % day % "_" % hour % "-" % minute % "-" % second % "_" % pid.toString % ".log"),
  )

  private def cleanupOldLogs(): Unit =
    // Safe to ignore errors if logs dir doesn't exist or permissions issue
    try
      val logsDir = os.Path(System.getProperty("user.dir")) / ".first" / "logs"
      if os.exists(logsDir) then
        val allLogs = os.walk(logsDir).filter(_.ext == "log").sortBy(_.toString)
        if allLogs.size >= 10 then
          allLogs.dropRight(9).foreach { log =>
            os.remove(log)
            val parent = log / os.up
            if os.list(parent).isEmpty then os.remove(parent)
          }
    catch case _ => () // Fail silently for log cleanup

  def configure(): Unit =
    cleanupOldLogs()

    val cliFormatter = formatter"$messages$newLine"

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
        writer = createFileWriter(),
        outputFormat = scribe.output.format.ASCIIOutputFormat,
      )
      .replace()
