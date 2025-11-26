package first

import org.ekrich.config.Config
import org.ekrich.config.ConfigFactory
import upickle.default._

object TestPickle:
  implicit val configRW: ReadWriter[Config] =
    readwriter[String].bimap[Config](
      _ => "", // Don't serialize the config
      _ => ConfigFactory.empty,
    )
