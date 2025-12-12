package first.cli

import first.BaseSuite

class SaveCommandTests extends BaseSuite:
  test("SaveCommand validates context name"):
    val invalidNames = List("ctx/foo", "../ctx", "ctx\\bar", "ctx..foo")
    val validNames   = List("ctx", "ctx-foo", "ctx_foo", "ctx.foo")

    val command = com.monovore.decline.Command("save", "save context", helpFlag = false)(SaveCommand.saveOpts)

    for name <- invalidNames do
      val result = command.parse(List(name), sys.env)
      assert(result.isLeft, s"Should reject invalid name: $name")

    for name <- validNames do
      val result = command.parse(List(name), sys.env)
      assert(result.isRight, s"Should accept valid name: $name")
