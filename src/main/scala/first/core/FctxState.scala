package first.core

import first.model.ActiveFctx

import os.Path
import os.read

class FctxState(workingDirectory: Path):

  private val stateFile = workingDirectory / ".first" / "active_fctx"

  def activeFctx: Option[ActiveFctx] =
    if os.exists(stateFile) then
      val content = read(stateFile)
      val parts   = content.split(":")
      if parts.length == 2 then Some(ActiveFctx(parts(0), parts(1)))
      else None
    else None

  def setActiveFctx(fctx: ActiveFctx): Unit =
    val content = s"${fctx.name}:${fctx.path}"
    os.write.over(stateFile, content, createFolders = true)

  def clearActiveFctx(): Unit =
    if os.exists(stateFile) then os.remove(stateFile)
