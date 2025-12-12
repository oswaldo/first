package first

import munit.FunSuite
import scribe.Level
import scribe.Logger
import scribe.format.*

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
      .withHandler(
        formatter = Logging.fileFormatter,
        minimumLevel = Some(Level.Debug),
        writer = Logging.createFileWriter(),
        outputFormat = scribe.output.format.ASCIIOutputFormat,
      )
      .replace()
    super.beforeAll()

  // Logging hooks for easier debugging of test output in CI/log files
  override def beforeEach(context: BeforeEach): Unit =
    scribe.debug(s"Starting test: ${context.test.name}")
    super.beforeEach(context)

  override def afterEach(context: AfterEach): Unit =
    scribe.debug(s"Finished test: ${context.test.name}")
    super.afterEach(context)
