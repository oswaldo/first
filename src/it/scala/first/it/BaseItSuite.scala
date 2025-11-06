package first.it

import munit.FunSuite

abstract class BaseItSuite extends FunSuite with TestLogging:
  override def beforeAll(): Unit =
    configureTestLogging()
    super.beforeAll()
