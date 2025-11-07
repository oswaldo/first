package first.remote

import first.BaseSuite

import java.net.URI

class UrlResolverTests extends BaseSuite:

  // isRemote tests
  test("isRemote should return true for http url") {
    assert(UrlResolver.isRemote("http://example.com/file"))
  }

  test("isRemote should return true for https url") {
    assert(UrlResolver.isRemote("https://example.com/file"))
  }

  test("isRemote should return true for gh url") {
    assert(UrlResolver.isRemote("gh://user/repo/file"))
  }

  test("isRemote should return false for local absolute path") {
    assert(!UrlResolver.isRemote("/path/to/file"))
  }

  test("isRemote should return false for local relative path") {
    assert(!UrlResolver.isRemote("path/to/file"))
  }

  // resolve tests
  test("resolve should return correct URI for http url") {
    val uriEither = UrlResolver.resolve("http://example.com/file")
    assert(uriEither.isRight)
    assertEquals(uriEither.toOption.get, new URI("http://example.com/file"))
  }

  test("resolve should return correct URI for https url") {
    val uriEither = UrlResolver.resolve("https://example.com/file")
    assert(uriEither.isRight)
    assertEquals(uriEither.toOption.get, new URI("https://example.com/file"))
  }

  test("resolve should resolve gh:// url with explicit branch via @ syntax") {
    val uriEither = UrlResolver.resolve("gh://user/repo@dev/file")
    assert(uriEither.isRight)
    assertEquals(uriEither.toOption.get, new URI("https://github.com/user/repo/raw/dev/file"))
  }

  test("resolve should resolve gh:// url with implicit main branch for root files") {
    val uriEither = UrlResolver.resolve("gh://user/repo/file")
    assert(uriEither.isRight)
    assertEquals(uriEither.toOption.get, new URI("https://github.com/user/repo/raw/main/file"))
  }

  test("resolve should resolve gh:// url with direct mapping for deep paths (user must provide branch)") {
    // If > 3 segments, we map directly. User must provide branch.
    // gh://user/repo/main/dir/file -> .../raw/main/dir/file
    val uriEither = UrlResolver.resolve("gh://user/repo/main/dir/file")
    assert(uriEither.isRight)
    assertEquals(uriEither.toOption.get, new URI("https://github.com/user/repo/raw/main/dir/file"))
  }

  test("resolve should fail for invalid gh:// paths") {
    assert(UrlResolver.resolve("gh://user").isLeft)
    assert(UrlResolver.resolve("gh://user/repo").isLeft)
  }

  test("resolve should return file URI for local absolute path") {
    val path      = "/path/to/file"
    val uriEither = UrlResolver.resolve(path)
    assert(uriEither.isRight)
    val expectedUri = os.Path(path, os.pwd).toNIO.toUri
    assertEquals(uriEither.toOption.get, expectedUri)
  }

  test("resolve should return file URI for local relative path") {
    val path      = "path/to/file"
    val uriEither = UrlResolver.resolve(path)
    assert(uriEither.isRight)
    val expectedUri = os.Path(path, os.pwd).toNIO.toUri
    assertEquals(uriEither.toOption.get, expectedUri)
  }
