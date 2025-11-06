import first.TestPickle.configRW
import first.config.Artifact
import first.config.FctxDef
import first.it.BaseItSuite

import os.Path
import os.RelPath
import upickle.default.*

implicit val fctxDefRW: ReadWriter[FctxDef] = macroRW

class CliTests extends BaseItSuite:

  private val tempDir = os.temp.dir()

  override def afterAll(): Unit =
    os.remove.all(tempDir)

  test("save command should create a new fctx file"):
    val testDir = tempDir / "save-command"
    os.makeDir.all(testDir)
    val contextName = "test-context"
    val file1       = testDir / "file1.txt"
    val dir1        = testDir / "dir1"
    val file2       = dir1 / "file2.txt"

    os.write(file1, "content1")
    os.makeDir.all(dir1)
    os.write(file2, "content2")

    val scalaCliCommand = Seq(
      "scala-cli",
      "run",
      ".",
      "--",
      "--at",
      testDir.toString(),
      "save",
      contextName,
      "--artifacts",
      s"${file1.relativeTo(testDir)},${dir1.relativeTo(testDir)}",
      "--swap-as",
      "copy",
      "--verbose",
    )

    os.proc(scalaCliCommand).call()

    val fctxDefPath = testDir / ".then" / contextName / "fctx-def.conf"
    assert(os.exists(fctxDefPath))

    val fctxDefContent = os.read(fctxDefPath)
    assert(fctxDefContent.contains(s"""path = "file1.txt""""))
    assert(fctxDefContent.contains(s"""swapAs = "copy""""))
    assert(fctxDefContent.contains(s"""path = "dir1""""))

  test("load command should create symlinks"):
    val testDir = tempDir / "load-command"
    os.makeDir.all(testDir)
    val contextName  = "test-context-load"
    val contextDir   = testDir / ".then" / contextName
    val artifactsDir = contextDir / "artifacts"
    os.makeDir.all(artifactsDir)

    val artifactFile = artifactsDir / "file1.txt"
    os.write(artifactFile, "content")

    val fctxDefContent =
      s"""         |artifacts = [
         |  { path = "file1.txt", swapAs = "symlink" }
         |]
         |""".stripMargin
    os.write(contextDir / "fctx-def.conf", fctxDefContent)

    val scalaCliCommand = Seq(
      "scala-cli",
      "run",
      ".",
      "--",
      "--at",
      testDir.toString(),
      "load",
      contextName,
      "--verbose",
    )

    os.proc(scalaCliCommand).call()

    val symlinkPath = testDir / "file1.txt"
    assert(os.isLink(symlinkPath))
    assertEquals(os.readLink(symlinkPath), artifactFile)

  test("swap command should update symlinks"):
    val testDir = tempDir / "swap-command"
    os.makeDir.all(testDir)

    // Setup context1
    val contextName1  = "test-context-swap1"
    val contextDir1   = testDir / ".then" / contextName1
    val artifactsDir1 = contextDir1 / "artifacts"
    os.makeDir.all(artifactsDir1)
    val artifact1 = artifactsDir1 / "file1.txt"
    os.write(artifact1, "content1")
    val fctxDefContent1 =
      s"""         |artifacts = [
         |  { path = "file1.txt", swapAs = "symlink" }
         |]
         |""".stripMargin
    os.write(contextDir1 / "fctx-def.conf", fctxDefContent1)

    // Setup context2
    val contextName2  = "test-context-swap2"
    val contextDir2   = testDir / ".then" / contextName2
    val artifactsDir2 = contextDir2 / "artifacts"
    os.makeDir.all(artifactsDir2)
    val artifact2 = artifactsDir2 / "file2.txt"
    os.write(artifact2, "content2")
    val fctxDefContent2 =
      s"""|artifacts = [
          |  { path = "file2.txt", swapAs = "symlink" }
          |]
          |""".stripMargin
    os.write(contextDir2 / "fctx-def.conf", fctxDefContent2)

    // Load context1
    os.proc(Seq("scala-cli", "run", ".", "--", "--at", testDir.toString(), "load", contextName1)).call()
    assert(os.isLink(testDir / "file1.txt"))
    assert(!os.exists(testDir / "file2.txt"))

    // Swap to context2
    os.proc(Seq("scala-cli", "run", ".", "--", "--at", testDir.toString(), "swap", contextName2)).call()

    assert(!os.exists(testDir / "file1.txt"))
    assert(os.isLink(testDir / "file2.txt"))
    assertEquals(os.readLink(testDir / "file2.txt"), artifact2)

  test("ls command should list available contexts"):
    val testDir = tempDir / "ls-command"
    os.makeDir.all(testDir)

    // Setup context1
    val contextName1 = "test-context-ls1"
    val contextDir1  = testDir / ".then" / contextName1
    os.makeDir.all(contextDir1)
    os.write(contextDir1 / "fctx-def.conf", s"""name = "test-context-ls1"""")

    // Setup context2
    val contextName2 = "test-context-ls2"
    val contextDir2  = testDir / ".then" / contextName2
    os.makeDir.all(contextDir2)
    os.write(contextDir2 / "fctx-def.conf", s"""name = "test-context-ls2"""")

    val result = os.proc(Seq("scala-cli", "run", ".", "--", "--at", testDir.toString(), "ls")).call()
    val output = result.out.text()

    assert(output.contains(contextName1))
    assert(output.contains(contextName2))
