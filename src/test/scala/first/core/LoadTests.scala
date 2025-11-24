package first.core

import first.BaseSuite
import first.config.Artifact
import first.remote.DownloaderClient
import java.net.URI
import os.*

class LoadTests extends BaseSuite:

  private def setup(): os.Path =
    os.temp.dir()

  test("validateArtifacts should pass when all artifacts exist") {
    val tempDir     = setup()
    val fctxConfDir = tempDir / "fctx"
    os.makeDir.all(fctxConfDir)

    // Create local artifact
    os.write(fctxConfDir / "local.txt", "content")

    val mockDownloader = new DownloaderClient:
      def download(uri: URI, env: Map[String, String]): Either[String, Array[Byte]] = Right(Array.empty)
      def checkExists(uri: URI, env: Map[String, String]): Boolean                  = true

    val load = new Load(mockDownloader)
    val artifacts = List(
      Artifact("local.txt", first.config.SwapAs.Symlink, None, None, None),
      Artifact("http://example.com/remote", first.config.SwapAs.Symlink, None, None, None),
    )

    val result = load.validateArtifacts(artifacts, fctxConfDir)
    assert(result.isRight)
  }

  test("validateArtifacts should fail when local artifact is missing") {
    val tempDir     = setup()
    val fctxConfDir = tempDir / "fctx"
    os.makeDir.all(fctxConfDir)

    val mockDownloader = new DownloaderClient:
      def download(uri: URI, env: Map[String, String]): Either[String, Array[Byte]] = Right(Array.empty)
      def checkExists(uri: URI, env: Map[String, String]): Boolean                  = true

    val load = new Load(mockDownloader)
    val artifacts = List(
      Artifact("missing.txt", first.config.SwapAs.Symlink, None, None, None),
    )

    val result = load.validateArtifacts(artifacts, fctxConfDir)
    assert(result.isLeft)
    assert(result.swap.toOption.get.exists(_.contains("Local artifact not found")))
  }

  test("validateArtifacts should fail when remote artifact is missing") {
    val tempDir     = setup()
    val fctxConfDir = tempDir / "fctx"
    os.makeDir.all(fctxConfDir)

    val mockDownloader = new DownloaderClient:
      def download(uri: URI, env: Map[String, String]): Either[String, Array[Byte]] = Right(Array.empty)
      def checkExists(uri: URI, env: Map[String, String]): Boolean                  = false

    val load = new Load(mockDownloader)
    val artifacts = List(
      Artifact("http://example.com/missing", first.config.SwapAs.Symlink, None, None, None),
    )

    val result = load.validateArtifacts(artifacts, fctxConfDir)
    assert(result.isLeft)
    assert(result.swap.toOption.get.exists(_.contains("Remote artifact not found")))
  }
