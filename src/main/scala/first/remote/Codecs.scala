package first.remote

import java.net.URI
import java.time.Instant

import upickle.default.*

object Codecs:
  given ReadWriter[URI] = readwriter[String].bimap[URI](
    uri => uri.toString,
    str => new URI(str),
  )

  given ReadWriter[Instant] = readwriter[String].bimap[Instant](
    instant => instant.toString,
    str => Instant.parse(str),
  )
