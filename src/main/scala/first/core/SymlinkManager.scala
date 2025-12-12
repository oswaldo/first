package first.core

import first.config.ConfigError
import first.config.FileWriteError

import scala.util.Try

import os.Path

object SymlinkManager:
  def createSymlink(link: Path, target: Path): Either[ConfigError, Unit] =
    if scala.util.Properties.isWin then
      scribe.warn("Creating symlinks on Windows may require Administrator privileges.")

    Try {
      if os.exists(link, followLinks = false) then os.remove.all(link)
      os.symlink(link, target)
    }.toEither.left.map(e => FileWriteError(link.toString, s"Failed to create symlink to $target: ${e.getMessage}"))
