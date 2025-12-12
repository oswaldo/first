package first.config

import scala.jdk.CollectionConverters.*
import scala.util.Try

import org.ekrich.config.ConfigFactory
import os.Path

class GlobalConfig(val home: Path):
  private val globalConfigFile = home / ".first" / "first.conf"

  def addContext(path: Path): Either[ConfigError, Unit] =
    for
      paths <- listContextPaths()
      _     <- if paths.contains(path) then Right(()) else writePaths(paths :+ path)
    yield ()

  def removeContext(path: Path): Either[ConfigError, Unit] =
    for
      paths <- listContextPaths()
      _     <- writePaths(paths.filterNot(_ == path))
    yield ()

  def updateContext(oldPath: Path, newPath: Path): Either[ConfigError, Unit] =
    for
      paths <- listContextPaths()
      updatedPaths = paths.map(p => if p == oldPath then newPath else p)
      _ <- writePaths(updatedPaths)
    yield ()

  def listContextPaths(): Either[ConfigError, List[Path]] =
    if !os.exists(globalConfigFile) then Right(Nil)
    else
      Try(ConfigFactory.parseFile(globalConfigFile.toIO)).toEither.left
        .map(e => FileParseError(globalConfigFile.toString, e.getMessage))
        .map { config =>
          if config.hasPath("fctx-files") then config.getStringList("fctx-files").asScala.toList.map(os.Path(_))
          else Nil
        }

  private def writePaths(paths: List[Path]): Either[ConfigError, Unit] =
    Try {
      if !os.exists(globalConfigFile) then os.makeDir.all(globalConfigFile / os.up)

      val content = ConfigWriter.writeStringList("fctx-files", paths.map(_.toString))
      os.write.over(globalConfigFile, content)
    }.toEither.left.map(e => FileWriteError(globalConfigFile.toString, e.getMessage))

object GlobalConfig extends GlobalConfig(os.home)
