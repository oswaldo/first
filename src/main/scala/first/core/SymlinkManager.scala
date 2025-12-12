package first.core

import first.config.ConfigError
import first.config.FileWriteError

import scala.util.Try

import os.Path

object SymlinkManager:
  def createSymlink(link: Path, target: Path, relative: Boolean = false): Either[ConfigError, Unit] =
    if scala.util.Properties.isWin then
      scribe.warn("Creating symlinks on Windows may require Administrator privileges.")

    if !os.exists(target) then scribe.warn(s"Symlink target does not exist: $target")

    Try {
      if os.exists(link, followLinks = false) then os.remove.all(link)
      val actualTarget = if relative then target.relativeTo(link / os.up) else target
      os.symlink(link, actualTarget)
    }.toEither.left.map(e => FileWriteError(link.toString, s"Failed to create symlink to $target: ${e.getMessage}"))
