package first.core

import os.Path

class Context(val workingDir: Path):
  val state: FctxState = new FctxState(workingDir)

  override def toString: String = s"Context($workingDir)"
