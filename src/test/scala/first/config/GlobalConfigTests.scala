package first.config

import munit.FunSuite
import os.Path

class GlobalConfigTests extends FunSuite:
  test("GlobalConfig can add, list, update and remove contexts") {
    val tempHome     = os.temp.dir()
    val globalConfig = new GlobalConfig(tempHome)

    val ctx1    = tempHome / "ctx1" / "fctx-def.conf"
    val ctx2    = tempHome / "ctx2" / "fctx-def.conf"
    val ctx1New = tempHome / "ctx1_new" / "fctx-def.conf"

    // Initial list empty
    assertEquals(globalConfig.listContextPaths(), Right(Nil))

    // Add ctx1
    assertEquals(globalConfig.addContext(ctx1), Right(()))
    assertEquals(globalConfig.listContextPaths(), Right(List(ctx1)))

    // Add ctx2
    assertEquals(globalConfig.addContext(ctx2), Right(()))
    assertEquals(globalConfig.listContextPaths(), Right(List(ctx1, ctx2)))

    // Update ctx1 -> ctx1New
    assertEquals(globalConfig.updateContext(ctx1, ctx1New), Right(()))
    assertEquals(globalConfig.listContextPaths(), Right(List(ctx1New, ctx2)))

    // Remove ctx2
    assertEquals(globalConfig.removeContext(ctx2), Right(()))
    assertEquals(globalConfig.listContextPaths(), Right(List(ctx1New)))

    // Idempotency check for add
    assertEquals(globalConfig.addContext(ctx1New), Right(()))
    assertEquals(globalConfig.listContextPaths(), Right(List(ctx1New)))
  }
