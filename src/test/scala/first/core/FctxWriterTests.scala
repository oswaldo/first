package first.core

import first.config.Artifact
import first.config.FctxDef
import first.config.SwapAs

import munit.FunSuite
import org.ekrich.config.ConfigFactory

class FctxWriterTests extends FunSuite:
  test("toHocon writes artifacts and includes") {
    val fctxDef = FctxDef(
      name = "test",
      config = ConfigFactory.empty("test"),
      includes = List("base", "dev"),
      artifacts = List(
        Artifact("foo.txt", SwapAs.Copy, Some("hash1")),
        Artifact("bar.conf", SwapAs.Symlink, None),
      ),
    )

    val hocon = FctxWriter.toHocon(fctxDef)

    assert(hocon.contains("""includes = ["base", "dev"]"""))
    assert(hocon.contains("""path = "foo.txt""""))
    assert(hocon.contains("""swapAs = "copy""""))
    assert(hocon.contains("""md5 = "hash1""""))
    assert(hocon.contains("""path = "bar.conf""""))
    assert(hocon.contains("""swapAs = "symlink""""))
  }

  test("toHocon handles empty includes") {
    val fctxDef = FctxDef(
      name = "test",
      config = ConfigFactory.empty("test"),
      includes = Nil,
      artifacts = List(Artifact("foo.txt", SwapAs.Copy)),
    )

    val hocon = FctxWriter.toHocon(fctxDef)

    assert(!hocon.contains("includes ="))
    assert(hocon.contains("artifacts = ["))
  }
