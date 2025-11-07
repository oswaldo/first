package first.remote

import first.BaseSuite

class CacheTests extends BaseSuite:
  private val tempDir      = os.temp.dir()
  private val testCacheDir = tempDir / "cache"
  private val cache        = new Cache(testCacheDir)

  override def afterAll(): Unit =
    os.remove.all(tempDir)
    super.afterAll()

  test("put and get content") {
    val content      = "hello cache".getBytes("UTF-8")
    val (hash, path) = cache.put(content)

    assertEquals(hash, "bb9a61ae6eeebbbb4ec59a1488ce15350641f02d1cd5402a2a79f489b07b1523")
    assertEquals(path, testCacheDir / hash)
    assert(os.exists(path))
    assertEquals(os.read(path), "hello cache")

    val retrievedPath = cache.get(hash)
    assert(retrievedPath.isDefined)
    assertEquals(retrievedPath.get, path)

    assert(cache.exists(hash))
  }

  test("get non-existent content") {
    val retrievedPath = cache.get("non-existent-hash")
    assert(retrievedPath.isEmpty)
    assert(!cache.exists("non-existent-hash"))
  }

  test("put from source path") {
    val sourceFile = tempDir / "source.txt"
    os.write(sourceFile, "hello from file")
    val (hash, path) = cache.put(sourceFile)

    assertEquals(hash, "b087545321dcffd45fabd29cf14da81512e1cc87c3b66e39e274cf1c72fb7a97")
    assertEquals(path, testCacheDir / hash)
    assert(os.exists(path))
    assertEquals(os.read(path), "hello from file")
  }
