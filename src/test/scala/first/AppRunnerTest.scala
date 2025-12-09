package first

import first.CliDef.HelpCmd
import first.core.ExitHandler

import munit.FunSuite

class AppRunnerTest extends FunSuite:
  test("AppRunner calls exit(1) on failure") {
    val exitCode = new java.util.concurrent.atomic.AtomicReference[Option[Int]](None)
    val mockHandler = new ExitHandler:
      def exit(status: Int): Unit = exitCode.set(Some(status))

    val runner = new AppRunner(mockHandler)
    // Passing a relative path to os.Path() throws an IllegalArgumentException
    // This should trigger the catch block in AppRunner.run
    runner.run(HelpCmd, Some("relative/path"))

    assertEquals(exitCode.get(), Some(1))
  }
