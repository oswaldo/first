package first.it

import scribe.*
import scribe.format.*

trait TestLogging:
  def configureTestLogging(): Unit =
    val testFormatter = formatter"$date $level $position - $messages$newLine"
    Logger.root
      .clearHandlers()
      .clearModifiers()
      .withHandler(
        formatter = testFormatter,
        minimumLevel = Some(Level.Debug), // Set to Debug to see all logs
      )
      .replace()
