package first.core

trait ExitHandler:
  def exit(status: Int): Unit

object PlatformExitHandler extends ExitHandler:
  def exit(status: Int): Unit = System.exit(status)
