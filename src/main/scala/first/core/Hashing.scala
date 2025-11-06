package first.core

import java.security.MessageDigest

import os.Path

object Hashing:
  def calculateMd5(path: Path): String =
    val md    = MessageDigest.getInstance("MD5")
    val bytes = os.read.bytes(path)
    md.update(bytes)
    val digest = md.digest()
    digest.map("%02x".format(_)).mkString
