package first.core

import first.BaseSuite
import first.cli.MvCommand.MvOpts

import os.*

class MvTests extends BaseSuite:
  test("mv should move context and update symlinks"):
    if !scala.util.Properties.isWin then
      val workingDir = os.temp.dir()
      val ctxName    = "mv-test"
      val ctxDir     = workingDir / ".then" / ctxName
      val artifacts  = ctxDir / "artifacts"
      os.makeDir.all(artifacts)
      os.write(ctxDir / "fctx-def.conf", """name = "mv-test"""")
      os.write(artifacts / "foo.txt", "foo content")

      // Create a symlink pointing to the artifact
      val link = workingDir / "foo-link.txt"
      os.symlink(link, artifacts / "foo.txt")

      val dest = os.temp.dir() / "new-loc"

      val globalConfig = first.config.GlobalConfig(workingDir)
      val context      = Context(workingDir)
      val mv           = Mv(globalConfig)

      val opts = MvOpts(ctxName, dest)
      assert(mv.run(opts, context).isRight)

      assert(!os.exists(ctxDir))
      assert(os.exists(dest / "fctx-def.conf"))

      // Check symlink update
      assert(os.isLink(link))
      val relTarget = os.readLink(link)
      val newTarget = link / os.up / os.RelPath(relTarget.toString)
      assert(newTarget == dest / "artifacts" / "foo.txt")
      assert(os.read(link) == "foo content")

  test("mv should rename context in config when destination name differs"):
    if !scala.util.Properties.isWin then
      val workingDir = os.temp.dir()
      val ctxName    = "original-name"
      val ctxDir     = workingDir / ".then" / ctxName
      os.makeDir.all(ctxDir)
      // Create valid HOCON with name
      os.write(ctxDir / "fctx-def.conf", s"""name = "$ctxName"""")

      val destName = "renamed-context"
      val dest     = workingDir / ".then" / destName

      val globalConfig = first.config.GlobalConfig(workingDir)
      val context      = Context(workingDir)
      val mv           = Mv(globalConfig)

      val opts = MvOpts(ctxName, dest)
      assert(mv.run(opts, context).isRight)

      assert(!os.exists(ctxDir))
      assert(os.exists(dest / "fctx-def.conf"))

      val newConfigContent = os.read(dest / "fctx-def.conf")
      assert(newConfigContent.contains(s"""name = "$destName""""))
      assert(!newConfigContent.contains(s"""name = "$ctxName""""))
