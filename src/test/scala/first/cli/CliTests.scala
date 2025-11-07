package first.cli

import first.BaseSuite
import first.TestPickle.configRW
import first.config.Artifact
import first.config.FctxDef

import os.Path
import os.RelPath
import upickle.default.*

implicit val fctxDefRW: ReadWriter[FctxDef] = macroRW

class CliTests extends BaseSuite:

  private val tempDir       = os.temp.dir()
  private val cliExecutable = tempDir / "first"

  override def beforeAll(): Unit =
    super.beforeAll()
    // Compile the project once
    os.proc(Seq("scala-cli", "package", ".", "--native", "-o", cliExecutable.toString(), "-f")).call()

  override def afterAll(): Unit =
    os.remove.all(tempDir)
    super.afterAll()

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

    val cliCommand = Seq(
      cliExecutable.toString(),
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

    os.proc(cliCommand).call()

    val fctxDefPath = testDir / ".then" / contextName / "fctx-def.conf"
    assert(os.exists(fctxDefPath))

    val fctxDefContent = os.read(fctxDefPath)
    assert(fctxDefContent.contains(s"""path = "file1.txt""""))
    assert(fctxDefContent.contains(s"""swapAs = "copy""""))
    assert(fctxDefContent.contains(s"""path = "dir1""""))

  test("load command should create symlinks"):
    val testDir = tempDir / "load-command"
    os.makeDir.all(testDir)
    val contextName = "test-context-load"

    val artifactFile = testDir / "file1.txt" // Create artifact in testDir
    os.write(artifactFile, "content")

    // uses the save command to prepare the context used in the assertions about the load command
    val saveCliCommand = Seq(
      cliExecutable.toString(),
      "--at",
      testDir.toString(),
      "save",
      contextName,
      "--artifacts",
      s"${artifactFile.relativeTo(testDir)}", // Just the filename
      "--swap-as",
      "symlink",
      "--verbose",
    )
    os.proc(saveCliCommand).call()

    // The load command will create a symlink, so we need to remove the original file first
    os.remove(artifactFile)

    val cliCommand = Seq(
      cliExecutable.toString(),
      "--at",
      testDir.toString(),
      "load",
      contextName,
      "--verbose",
    )

    os.proc(cliCommand).call()

    val symlinkPath = testDir / "file1.txt"
    assert(os.isLink(symlinkPath))
    val expectedSourcePath = testDir / ".then" / contextName / "artifacts" / "file1.txt"
    assertEquals(os.readLink(symlinkPath), expectedSourcePath)

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
    os.proc(Seq(cliExecutable.toString(), "--at", testDir.toString(), "load", contextName1)).call()
    assert(os.isLink(testDir / "file1.txt"))
    assert(!os.exists(testDir / "file2.txt"))

    // Swap to context2
    os.proc(Seq(cliExecutable.toString(), "--at", testDir.toString(), "swap", contextName2)).call()

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

    val result = os.proc(Seq(cliExecutable.toString(), "--at", testDir.toString(), "ls")).call()
    val output = result.out.text()

    assert(output.contains(contextName1))
    assert(output.contains(contextName2))

  test("load command should download remote artifact") {
    val testDir = tempDir / "load-remote"
    os.makeDir.all(testDir)
    val contextName = "remote-context"
    val contextDir  = testDir / ".then" / contextName
    os.makeDir.all(contextDir)

    val remoteUrl       = "https://httpbin.org/robots.txt"
    val expectedContent = "User-agent: *\nDisallow: /deny\n"
    val expectedSha256  = "be76b8ab3a1d8db80cafb0c7a768af6c7b6b4ac28ffef3bf6d641c7ed4cec05a"

    val fctxDefContent =
      s"""
         |artifacts = [
         |  {
         |    path = "$remoteUrl",
         |    sha256 = "$expectedSha256"
         |  }
         |]
         |""".stripMargin
    os.write(contextDir / "fctx-def.conf", fctxDefContent)

    val cliCommand = Seq(
      cliExecutable.toString(),
      "--at",
      testDir.toString(),
      "load",
      contextName,
      "--verbose",
    )

    os.proc(cliCommand).call()

    val downloadedFilePath = testDir / "robots.txt"
    assert(os.exists(downloadedFilePath))
    val content = os.read(downloadedFilePath)
    assertEquals(content, expectedContent)
  }
  test("load command should download gh:// artifact") {
    val testDir = tempDir / "load-gh"
    os.makeDir.all(testDir)
    val contextName = "gh-context"
    val contextDir  = testDir / ".then" / contextName
    os.makeDir.all(contextDir)

    // gh://octocat/Hello-World/README -> https://github.com/octocat/Hello-World/raw/main/README
    // Note: The default branch of octocat/Hello-World is master, but our resolver defaults to main.
    // So we MUST specify the branch explicitly if it's not main, OR we rely on the user to know.
    // Wait, if I use gh://octocat/Hello-World/README, it maps to .../raw/main/README.
    // Does octocat/Hello-World have a main branch?
    // Let's check. If not, I should use @master.
    // Checking via curl: curl -I https://github.com/octocat/Hello-World/raw/main/README -> 404.
    // So I MUST use @master.

    val ghUrl           = "gh://octocat/Hello-World@master/README"
    val expectedContent = "Hello World!\n"
    val expectedSha256  = "03ba204e50d126e4674c005e04d82e84c21366780af1f43bd54a37816b6ab340"

    val fctxDefContent =
      s"""
         |artifacts = [
         |  {
         |    path = "$ghUrl",
         |    sha256 = "$expectedSha256"
         |  }
         |]
         |""".stripMargin
    os.write(contextDir / "fctx-def.conf", fctxDefContent)

    val cliCommand = Seq(
      cliExecutable.toString(),
      "--at",
      testDir.toString(),
      "load",
      contextName,
      "--verbose",
    )

    os.proc(cliCommand).call()

    val downloadedFilePath = testDir / "Hello-World@master" / "README"
    assert(os.exists(downloadedFilePath))
    val content = os.read(downloadedFilePath)
    assertEquals(content, expectedContent)
  }
