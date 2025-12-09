package first.core

import first.config.Artifact
import first.config.SwapAs
import first.remote.UrlResolver

import os.Path

object ArtifactProcessor:
  def resolveConfigPath(p: String, workingDir: Path): String =
    if UrlResolver.isRemote(p) then p
    else
      val pathObj = os.Path(p, workingDir)
      if pathObj.startsWith(workingDir) then
        // Inside workspace: preserve relative structure
        pathObj.relativeTo(workingDir).toString
      else
        // External: map to filename (flatten)
        pathObj.last

  def process(
      paths: List[String],
      workingDir: Path,
      swapAs: SwapAs,
  ): List[(Artifact, Option[Path])] =
    paths.map { p =>
      if UrlResolver.isRemote(p) then
        scribe.debug(s"Processing remote artifact: $p")
        (Artifact(path = p, swapAs = swapAs), None)
      else
        val configPath = resolveConfigPath(p, workingDir)
        val sourcePath = os.Path(p, workingDir)
        scribe.debug(s"Processing local/external artifact: $sourcePath -> $configPath")

        val md5 = if os.isFile(sourcePath) then Some(Hashing.calculateMd5(sourcePath)) else None
        (Artifact(path = configPath, swapAs = swapAs, md5 = md5), Some(sourcePath))
    }
