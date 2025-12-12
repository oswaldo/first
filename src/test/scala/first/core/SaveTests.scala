package first.core

import first.BaseSuite
import first.cli.SaveCommand.SaveOpts
import first.config.SwapAs

import os.*

class SaveTests extends BaseSuite:

  test("save should handle remote artifacts correctly"):
    val tempDir     = os.temp.dir()
    val contextName = "remote-save-test"
    val remoteUrl   = "http://example.com/file.txt"

    val opts = SaveOpts(
      contextName = contextName,
      artifacts = List(remoteUrl),
      includes = Nil,
      swapAs = SwapAs.Symlink,
      force = false,
      dryRun = false,
      verbose = true,
      toContextPath = None,
      link = false,
    )

    val context = new Context(tempDir)
    val save    = new Save()
    save.run(opts, context)

    val fctxDefPath = tempDir / ".then" / contextName / "fctx-def.conf"
    assert(os.exists(fctxDefPath))

    val content = os.read(fctxDefPath)
    // println(content) // Debug
    assert(content.contains(s"""path = "$remoteUrl""""))
    assert(!content.contains("md5 ="))

    val artifactsDir = tempDir / ".then" / contextName / "artifacts"
    // artifactsDir is created but should be empty
    assert(os.exists(artifactsDir))
    assert(os.list(artifactsDir).isEmpty)

  test("save should handle external artifacts (absolute paths) correctly"):
    val contextDir  = os.temp.dir()
    val externalDir = os.temp.dir()
    val contextName = "external-save-test"

    val externalFile = externalDir / "external.txt"
    os.write(externalFile, "external content")

    val opts = SaveOpts(
      contextName = contextName,
      artifacts = List(externalFile.toString),
      includes = Nil,
      swapAs = SwapAs.Symlink,
      force = false,
      dryRun = false,
      verbose = true,
      toContextPath = None,
      link = false,
    )

    val context = new Context(contextDir)
    val save    = new Save()
    save.run(opts, context)

    val fctxDefPath = contextDir / ".then" / contextName / "fctx-def.conf"
    assert(os.exists(fctxDefPath))

    val content = os.read(fctxDefPath)
    // Should be mapped to basename "external.txt"
    assert(content.contains(s"""path = "external.txt""""))
    assert(content.contains("md5 =")) // Local/External artifacts should have MD5

    val artifactsDir = contextDir / ".then" / contextName / "artifacts"
    val storedFile   = artifactsDir / "external.txt"

    assert(os.exists(storedFile))
    assert(os.read(storedFile) == "external content")

  test("save should handle includes"):
    val tempDir     = os.temp.dir()
    val contextName = "includes-save-test"

    val opts = SaveOpts(
      contextName = contextName,
      artifacts = Nil,
      includes = List("base", "common"),
      swapAs = SwapAs.Symlink,
      force = false,
      dryRun = false,
      verbose = false,
      toContextPath = None,
      link = false,
    )

    val context = new Context(tempDir)
    new Save().run(opts, context)

    val fctxDefPath = tempDir / ".then" / contextName / "fctx-def.conf"
    val content     = os.read(fctxDefPath)
    assert(content.contains("""includes = ["base", "common"]"""))

  test("save --to should save to custom path and register with GlobalConfig"):
    val workingDir  = os.temp.dir()
    val customDir   = os.temp.dir() / "custom-ctx"
    val contextName = "custom-save-test"

    val opts = SaveOpts(
      contextName = contextName,
      artifacts = Nil,
      includes = Nil,
      swapAs = SwapAs.Symlink,
      force = false,
      dryRun = false,
      verbose = true,
      toContextPath = Some(customDir),
      link = false,
    )

    val globalConfig = new first.config.GlobalConfig(workingDir)
    val context      = new Context(workingDir)
    val save         = new Save(globalConfig)

    save.run(opts, context)

    val fctxDefPath = customDir / "fctx-def.conf"
    assert(os.exists(fctxDefPath))

    val registeredPaths = globalConfig.listContextPaths().toOption.get
    assert(registeredPaths.contains(fctxDefPath))

  test("save --link should replace file with symlink"):
    if !scala.util.Properties.isWin then
      val tempDir     = os.temp.dir()
      val contextName = "link-save-test"

      val fileToLink = tempDir / "file.txt"
      os.write(fileToLink, "content")

      val opts = SaveOpts(
        contextName = contextName,
        artifacts = List(fileToLink.toString),
        includes = Nil,
        swapAs = SwapAs.Symlink,
        force = false,
        dryRun = false,
        verbose = true,
        toContextPath = None,
        link = true,
      )

      val context = new Context(tempDir)
      val save    = new Save()

      save.run(opts, context)

      // Check if fileToLink is now a symlink
      assert(os.isLink(fileToLink))
      assert(os.read(fileToLink) == "content") // os.read follows symlinks

      val target         = os.readLink(fileToLink)
      val resolvedTarget = fileToLink / os.up / os.RelPath(target.toString)
      val expectedTarget = tempDir / ".then" / contextName / "artifacts" / "file.txt"
      assert(resolvedTarget == expectedTarget)
