package first.remote

import first.model.Common.given
import first.remote.Codecs.given

import java.net.URI
import java.time.Instant

import upickle.default._

case class RemoteArtifact(
    sourceUrl: URI,
    resolvedUrl: URI,
    destination: os.Path,
    sha256: Option[String],
) derives ReadWriter

case class CachedArtifact(
    hash: String,
    filePath: os.Path,
    lastAccessed: Instant,
) derives ReadWriter

case class FctxInclude(
    sourceUrl: URI,
    resolvedUrl: URI,
) derives ReadWriter
