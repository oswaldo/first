package first.core

import first.config.Artifact
import first.config.SwapAs

import munit.FunSuite
import os.Path

class ArtifactProcessorTests extends FunSuite:
  test("process local file inside workspace") {
    val wd = os.temp.dir()
    os.write(wd / "foo.txt", "content")

    val result = ArtifactProcessor.process(List("foo.txt"), wd, SwapAs.Copy)

    assertEquals(result.length, 1)
    val (artifact, sourcePath) = result.head

    assertEquals(artifact.path, "foo.txt")
    assertEquals(artifact.swapAs, SwapAs.Copy)
    assertEquals(artifact.md5, Some("9a0364b9e99bb480dd25e1f0284c8555")) // md5("content")
    assertEquals(sourcePath, Some(wd / "foo.txt"))
  }

  test("process remote artifact") {
    val wd  = os.temp.dir()
    val url = "https://example.com/foo.txt"

    val result = ArtifactProcessor.process(List(url), wd, SwapAs.Symlink)

    assertEquals(result.length, 1)
    val (artifact, sourcePath) = result.head

    assertEquals(artifact.path, url)
    assertEquals(artifact.swapAs, SwapAs.Symlink)
    assertEquals(artifact.md5, None)
    assertEquals(sourcePath, None)
  }

  test("process external file") {
    val wd          = os.temp.dir()
    val externalDir = os.temp.dir()
    os.write(externalDir / "outsider.conf", "external")

    val result = ArtifactProcessor.process(List((externalDir / "outsider.conf").toString), wd, SwapAs.Copy)

    assertEquals(result.length, 1)
    val (artifact, sourcePath) = result.head

    assertEquals(artifact.path, "outsider.conf") // Flattens path
    assertEquals(sourcePath, Some(externalDir / "outsider.conf"))
  }
