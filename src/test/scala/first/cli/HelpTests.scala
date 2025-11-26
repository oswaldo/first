package first.cli
import first.CliDef

import munit.FunSuite

class HelpTests extends FunSuite:
  test("simple test"):
    assert(true)

  test("first --help"):
    val result = CliDef.command.parse(Seq("--help"))
    assert(result.isLeft)
    result match
      case Left(help) => assert(help.errors.isEmpty)
      case Right(_)   => fail("Expected Left")
