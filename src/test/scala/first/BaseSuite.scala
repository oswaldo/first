package first

import munit.FunSuite
import scribe.Level
import scribe.Logger
import scribe.format._

abstract class BaseSuite extends FunSuite:
  override def beforeAll(): Unit =
    val testFormatter: Formatter = formatter"$date $level $position - $messages$newLine"
    Logger.root
      .clearHandlers()
      .clearModifiers()
      .withHandler(
        formatter = testFormatter,
        minimumLevel = Some(Level.Debug),
      )
      .replace()
    super.beforeAll()
