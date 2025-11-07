package first.remote

import first.BaseSuite

import java.net.URI

class DownloaderTests extends BaseSuite:

  test("successful download") {
    val uri    = new URI("https://httpbin.org/get")
    val result = Downloader.download(uri)
    assert(result.isRight)
  }

  test("failed download (404)") {
    val uri    = new URI("https://httpbin.org/status/404")
    val result = Downloader.download(uri)
    assert(result.isLeft)
    assertEquals(result.swap.toOption.get, "Failed to download https://httpbin.org/status/404: 404")
  }

  test("download with FIRST_AUTH_TOKEN") {
    val uri    = new URI("https://httpbin.org/bearer")
    val token  = "my-secret-token"
    val env    = Map("FIRST_AUTH_TOKEN" -> token)
    val result = Downloader.download(uri, env)
    assert(result.isRight)
    val body = new String(result.toOption.get, "UTF-8")
    assert(body.contains(s""""token": "$token""""))
  }

  test("createRequest should add GITHUB_TOKEN for github.com URLs") {
    val uri   = new URI("https://github.com/user/repo/raw/main/file")
    val token = "gh-token"
    val env   = Map("GITHUB_TOKEN" -> token)
    val req   = Downloader.createRequest(uri, env)
    val auth  = req.headers.find(_.name == "Authorization").map(_.value)
    assertEquals(auth, Some(s"Bearer $token"))
  }

  test("createRequest should NOT add FIRST_AUTH_TOKEN for github.com URLs") {
    val uri     = new URI("https://github.com/user/repo/raw/main/file")
    val ghToken = "gh-token"
    val fsToken = "fs-token"
    val env     = Map("GITHUB_TOKEN" -> ghToken, "FIRST_AUTH_TOKEN" -> fsToken)
    val req     = Downloader.createRequest(uri, env)
    val auth    = req.headers.find(_.name == "Authorization").map(_.value)
    assertEquals(auth, Some(s"Bearer $ghToken"))
  }

  test("createRequest should add FIRST_AUTH_TOKEN for non-github URLs") {
    val uri   = new URI("https://example.com/file")
    val token = "fs-token"
    val env   = Map("FIRST_AUTH_TOKEN" -> token)
    val req   = Downloader.createRequest(uri, env)
    val auth  = req.headers.find(_.name == "Authorization").map(_.value)
    assertEquals(auth, Some(s"Bearer $token"))
  }
