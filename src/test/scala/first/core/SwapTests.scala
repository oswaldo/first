package first.core

import first.BaseSuite
import first.TestPickle.configRW
import first.cli.SwapCommand.SwapOpts
import first.config.Artifact
import first.config.FctxDef
import first.config.SwapAs
import first.model.ActiveFctx

import org.ekrich.config.ConfigFactory
import os.Path
import os.RelPath
import upickle.default._

implicit val fctxDefRW: ReadWriter[FctxDef] = macroRW

class SwapTests extends BaseSuite:
  private def setup(): (Path, Context) =
    val tempDir = os.temp.dir()
    val context = new Context(tempDir)
    (tempDir, context)

  private def createTestFctx(fctxDir: Path, name: String, artifacts: List[Artifact]): Unit =
    val contextDir   = fctxDir / name
    val artifactsDir = contextDir / "artifacts"
    os.makeDir.all(artifactsDir)

    val dummyConfig = ConfigFactory.empty("dummy")
    val fctxDef     = FctxDef(name, dummyConfig, artifacts = artifacts)
    os.write(contextDir / "fctx-def.conf", write(fctxDef))

    artifacts.foreach { case Artifact(path, swapAs, md5, sha256, revision) =>
      val artifactFile = artifactsDir / RelPath(path)
      os.makeDir.all(artifactFile / os.up)
      os.write(artifactFile, s"content for $path in $name")
    }

  test("swap fctx successfully"):
    val (tempDir, context) = setup()
    val fctxDir            = tempDir / ".then"

    val artifactsA =
      List(Artifact(path = "file1.txt", swapAs = SwapAs.Copy), Artifact(path = "file2.txt", swapAs = SwapAs.Symlink))
    createTestFctx(fctxDir, "fctx-a", artifactsA)

    val artifactsB =
      List(Artifact(path = "file2.txt", swapAs = SwapAs.Copy), Artifact(path = "file3.txt", swapAs = SwapAs.Symlink))
    createTestFctx(fctxDir, "fctx-b", artifactsB)

    context.state.setActiveFctx(ActiveFctx("fctx-a", (fctxDir / "fctx-a").toString))

    // Manually load fctx-a
    val fctxAConfDir  = tempDir / ".then" / "fctx-a"
    val artifactsADir = fctxAConfDir / "artifacts"
    artifactsA.foreach { artifact =>
      val sourcePath = artifactsADir / os.RelPath(artifact.path)
      val destPath   = tempDir / os.RelPath(artifact.path)
      os.copy(sourcePath, destPath, createFolders = true)
    }

    val swap = new Swap()
    val opts = SwapOpts(contextName = "fctx-b", force = true, dryRun = false, verbose = false)
    swap.run(opts, context)

    val activeFctx = context.state.activeFctx.get
    assertEquals(activeFctx.name, "fctx-b")

    assert(!os.exists(tempDir / "file1.txt"))
    assert(os.exists(tempDir / "file2.txt"))
    assert(os.exists(tempDir / "file3.txt"))

    assertEquals(os.read(tempDir / "file2.txt"), "content for file2.txt in fctx-b")
    assert(os.isLink(tempDir / "file3.txt"))

  test("swap with dry-run should not modify file system"):
    val (tempDir, context) = setup()
    val fctxDir            = tempDir / ".then"

    val artifactsA =
      List(Artifact(path = "file1.txt", swapAs = SwapAs.Copy))
    createTestFctx(fctxDir, "fctx-dry-a", artifactsA)

    val artifactsB =
      List(Artifact(path = "file2.txt", swapAs = SwapAs.Copy))
    createTestFctx(fctxDir, "fctx-dry-b", artifactsB)

    context.state.setActiveFctx(ActiveFctx("fctx-dry-a", (fctxDir / "fctx-dry-a").toString))

    // Manually load fctx-dry-a
    val fctxAConfDir  = tempDir / ".then" / "fctx-dry-a"
    val artifactsADir = fctxAConfDir / "artifacts"
    artifactsA.foreach { artifact =>
      val sourcePath = artifactsADir / os.RelPath(artifact.path)
      val destPath   = tempDir / os.RelPath(artifact.path)
      os.copy(sourcePath, destPath, createFolders = true)
    }

    val swap = new Swap()
    val opts = SwapOpts(contextName = "fctx-dry-b", force = false, dryRun = true, verbose = true)
    swap.run(opts, context)

    // File system should be unchanged
    assert(os.exists(tempDir / "file1.txt"))
    assert(!os.exists(tempDir / "file2.txt"))

    // Active fctx should be unchanged
    val activeFctx = context.state.activeFctx.get
    assertEquals(activeFctx.name, "fctx-dry-a")

  test("swap from clean state should do nothing"):
    val (tempDir, context) = setup()
    val fctxDir            = tempDir / ".then"

    val artifacts =
      List(Artifact(path = "file1.txt", swapAs = SwapAs.Copy))
    createTestFctx(fctxDir, "fctx-clean", artifacts)

    context.state.clearActiveFctx()

    val swap = new Swap()
    val opts = SwapOpts(contextName = "fctx-clean", force = false, dryRun = false, verbose = false)
    swap.run(opts, context)

    assert(!os.exists(tempDir / "file1.txt"))
    assert(context.state.activeFctx.isEmpty)

  test("swap to the same fctx should do nothing"):
    val (tempDir, context) = setup()
    val fctxDir            = tempDir / ".then"

    val artifacts =
      List(Artifact(path = "file1.txt", swapAs = SwapAs.Copy))
    createTestFctx(fctxDir, "fctx-same", artifacts)

    // Manually load fctx-same
    val fctxConfDir  = tempDir / ".then" / "fctx-same"
    val artifactsDir = fctxConfDir / "artifacts"
    val sourcePath   = artifactsDir / "file1.txt"
    val destPath     = tempDir / "file1.txt"
    os.copy(sourcePath, destPath, createFolders = true)

    context.state.setActiveFctx(ActiveFctx("fctx-same", fctxConfDir.toString))

    val initialModTime = os.mtime(destPath)

    val swap = new Swap()
    val opts = SwapOpts(contextName = "fctx-same", force = false, dryRun = false, verbose = true)
    swap.run(opts, context)

    val finalModTime = os.mtime(destPath)
    assertEquals(finalModTime, initialModTime)

    val activeFctx = context.state.activeFctx.get
    assertEquals(activeFctx.name, "fctx-same")
