package first.core

import first.BaseSuite
import first.cli.SaveCommand.SaveOpts
import first.config.SwapAs
import os.*

class SaveTests extends BaseSuite:

  test("save should handle remote artifacts correctly"):
    val tempDir     = os.temp.dir()
    val contextName = "remote-save-test"
    // We use a string that looks like a URL but is accepted by RelPath (no leading /)
    // os.RelPath("http://example.com") might be tricky if it treats // as root.
    // Let's use a simple string that satisfies UrlResolver.isRemote
    val remoteUrl = "http://example.com/file.txt"

    // We need to construct SaveOpts manually.
    // Note: If SaveCommand uses os.RelPath("http://..."), we need to ensure it works.
    // For the purpose of this test, we pass it as RelPath.
    // If RelPath fails, we might need to fix SaveCommand too.

    val opts = SaveOpts(
      contextName = contextName,
      artifacts = List(remoteUrl),
      swapAs = SwapAs.Symlink,
      force = false,
      dryRun = false,
      verbose = true,
    )

    val context = new Context(tempDir)

    val save = new Save()
    save.run(opts, context)

    val fctxDefPath = tempDir / ".then" / contextName / "fctx-def.conf"
    assert(os.exists(fctxDefPath))

    val content = os.read(fctxDefPath)
    assert(content.contains(s"""path = "$remoteUrl""""))
    assert(!content.contains("md5 =")) // Remote artifacts should not have MD5

    val artifactsDir = tempDir / ".then" / contextName / "artifacts"
    // The remote artifact should NOT be copied to artifacts dir
    // But wait, os.RelPath("http://...") might map to "http:/..." dir?
    // Save.scala skips copy for remote artifacts.
    // So artifactsDir might exist (created by os.makeDir.all), but should be empty?
    // Or at least not contain the file.

    // Save.scala does: os.makeDir.all(artifactsDir)
    // Then iterates.
    // So artifactsDir exists.
    assert(os.exists(artifactsDir))
    assert(os.list(artifactsDir).isEmpty)
