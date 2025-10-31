package first.config

sealed trait ConfigError
case class FileParseError(path: String, message: String) extends ConfigError
case class PathNotFound(path: String)                    extends ConfigError
case class CircularDependency(path: List[String])        extends ConfigError
