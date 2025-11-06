package first.core

import os.Path

class Context(val workingDir: Path):
  val state: FctxState = new FctxState(workingDir)
