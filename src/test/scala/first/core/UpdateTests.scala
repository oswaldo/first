package first.core

import first.cli.UpdateCommand.UpdateOpts
import first.config.SwapAs
import first.model.ActiveFctx

import munit.FunSuite

class UpdateTests extends FunSuite:

  test("Update adds new artifact to existing context") {
    val wd      = os.temp.dir()
    val context = new Context(wd)

    // Setup existing context
    val fctxName = "test-context"
    val fctxDir  = wd / ".then" / fctxName
    os.makeDir.all(fctxDir)
    os.write(fctxDir / "fctx-def.conf", """artifacts = []""")

    // Setup file to add
    val newFile = wd / "new.txt"
    os.write(newFile, "content")

    val opts = UpdateOpts(
      contextName = Some(fctxName),
      add = List(newFile.toString),
      forget = Nil,
      includes = Nil,
      forgetIncludes = Nil,
      swapAs = SwapAs.Copy,
      dryRun = false,
      verbose = false,
    )

    new Update().run(opts, context)

    // Verify
    val confContent = os.read(fctxDir / "fctx-def.conf")
    assert(confContent.contains("""path = "new.txt""""))
    assert(os.exists(fctxDir / "artifacts" / "new.txt"))
  }

  test("Update replaces existing artifact") {
    val wd      = os.temp.dir()
    val context = new Context(wd)

    val fctxName = "test-update"
    val fctxDir  = wd / ".then" / fctxName
    os.makeDir.all(fctxDir / "artifacts")

    // Existing artifact
    os.write(fctxDir / "fctx-def.conf", """artifacts = [ { path = "foo.txt", swapAs = "copy", md5 = "old" } ]""")
    os.write(fctxDir / "artifacts" / "foo.txt", "old content")

    // New version of file
    val fooFile = wd / "foo.txt"
    os.write(fooFile, "new content")

    val opts = UpdateOpts(
      contextName = Some(fctxName),
      add = List(fooFile.toString),
      forget = Nil,
      includes = Nil,
      forgetIncludes = Nil,
      swapAs = SwapAs.Copy,
      dryRun = false,
      verbose = false,
    )

    new Update().run(opts, context)

    val confContent = os.read(fctxDir / "fctx-def.conf")
    assert(confContent.contains("""md5 = "96c15c2bb2921193bf290df8cd85e2ba"""")) // md5("new content")
    val artifactContent = os.read(fctxDir / "artifacts" / "foo.txt")
    assertEquals(artifactContent, "new content")
  }

  test("Update resolves active context if name not provided") {
    val wd       = os.temp.dir()
    val context  = new Context(wd)
    val fctxName = "active-one"
    val fctxDir  = wd / ".then" / fctxName

    os.makeDir.all(fctxDir)
    os.write(fctxDir / "fctx-def.conf", "artifacts = []")

    // Set active
    context.state.setActiveFctx(ActiveFctx(fctxName, fctxDir.toString))

    val newFile = wd / "active.txt"
    os.write(newFile, "active")

    val opts = UpdateOpts(
      contextName = None,
      add = List(newFile.toString),
      forget = Nil,
      includes = Nil,
      forgetIncludes = Nil,
      swapAs = SwapAs.Copy,
      dryRun = false,
      verbose = false,
    )

    new Update().run(opts, context)

    assert(os.read(fctxDir / "fctx-def.conf").contains("active.txt"))
  }

  test("Update forgets artifact") {
    val wd       = os.temp.dir()
    val context  = new Context(wd)
    val fctxName = "forget-ctx"
    val fctxDir  = wd / ".then" / fctxName
    os.makeDir.all(fctxDir / "artifacts")

    // Setup existing
    os.write(
      fctxDir / "fctx-def.conf",
      """artifacts = [ { path = "foo.txt", swapAs = "copy" }, { path = "keep.txt", swapAs = "copy" } ]""",
    )
    os.write(fctxDir / "artifacts" / "foo.txt", "foo")
    os.write(fctxDir / "artifacts" / "keep.txt", "keep")

    val fooFile = wd / "foo.txt"
    os.write(fooFile, "foo") // Local file exists, but forget shouldn't care about it except for path resolution

    val opts = UpdateOpts(
      contextName = Some(fctxName),
      add = Nil,
      forget = List(fooFile.toString),
      includes = Nil,
      forgetIncludes = Nil,
      swapAs = SwapAs.Copy,
      dryRun = false,
      verbose = false,
    )

    new Update().run(opts, context)

    val confContent = os.read(fctxDir / "fctx-def.conf")
    assert(!confContent.contains("""path = "foo.txt""""))
    assert(confContent.contains("""path = "keep.txt""""))
    // Ensure file on disk is NOT deleted (spec requirement: only untracks)
    assert(os.exists(fooFile))
  }

  test("Update preserves includes") {
    val wd       = os.temp.dir()
    val context  = new Context(wd)
    val fctxName = "includes-ctx"
    val fctxDir  = wd / ".then" / fctxName
    os.makeDir.all(fctxDir)

    // Setup existing with includes
    os.write(
      fctxDir / "fctx-def.conf",
      """
        |includes = ["base", "ext"]
        |artifacts = []
      """.stripMargin,
    )

    val newFile = wd / "new.txt"
    os.write(newFile, "content")

    val opts = UpdateOpts(
      contextName = Some(fctxName),
      add = List(newFile.toString),
      forget = Nil,
      includes = Nil,
      forgetIncludes = Nil,
      swapAs = SwapAs.Copy,
      dryRun = false,
      verbose = false,
    )

    new Update().run(opts, context)

    val confContent = os.read(fctxDir / "fctx-def.conf")
    assert(confContent.contains("""includes = ["base", "ext"]"""))
    assert(confContent.contains("""path = "new.txt""""))
  }

  test("Update adds and forgets includes") {
    val wd       = os.temp.dir()
    val context  = new Context(wd)
    val fctxName = "includes-manage"
    val fctxDir  = wd / ".then" / fctxName
    os.makeDir.all(fctxDir)

    // Setup existing with includes
    os.write(
      fctxDir / "fctx-def.conf",
      """
        |includes = ["keep", "remove"]
        |artifacts = []
      """.stripMargin,
    )

    val opts = UpdateOpts(
      contextName = Some(fctxName),
      add = Nil,
      forget = Nil,
      includes = List("new-inc"),
      forgetIncludes = List("remove"),
      swapAs = SwapAs.Copy,
      dryRun = false,
      verbose = false,
    )

    new Update().run(opts, context)

    val confContent = os.read(fctxDir / "fctx-def.conf")
    assert(confContent.contains("""includes = ["keep", "new-inc"]"""))
    assert(!confContent.contains("remove"))
  }
