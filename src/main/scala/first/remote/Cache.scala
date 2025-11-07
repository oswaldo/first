package first.remote

import first.core.Hashing

class Cache(cacheDir: os.Path):
  os.makeDir.all(cacheDir)

  def get(hash: String): Option[os.Path] =
    val path = cacheDir / hash
    if os.exists(path) then
      // Update last accessed time
      os.write.over(path, os.read.bytes(path), createFolders = true)
      Some(path)
    else None

  def put(content: Array[Byte]): (String, os.Path) =
    val hash = Hashing.calculateSha256(content)
    val path = cacheDir / hash
    os.write.over(path, content, createFolders = true)
    (hash, path)

  def put(source: os.Path): (String, os.Path) =
    val content = os.read.bytes(source)
    put(content)

  def exists(hash: String): Boolean =
    os.exists(cacheDir / hash)

object Cache:
  def apply(): Cache = new Cache(os.home / ".first" / "cache")
