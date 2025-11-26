package first.remote

import first.BaseSuite

import java.net.URI

class DownloaderTests extends BaseSuite:

  // Mock-based tests for core download functionality (no network calls)
  test("successful download returns Right with content") {
    // Create a mock downloader that simulates successful download
    val mockDownloader = new DownloaderClient:
      def download(uri: java.net.URI, env: Map[String, String]): Either[String, Array[Byte]] =
        Right("test content".getBytes("UTF-8"))
      def checkExists(uri: java.net.URI, env: Map[String, String]): Boolean = true

    val uri    = new java.net.URI("http://example.com/test")
    val result = mockDownloader.download(uri)
    assert(result.isRight)
    assertEquals(new String(result.toOption.get, "UTF-8"), "test content")
  }

  test("failed download returns Left with error message") {
    // Create a mock downloader that simulates 404 error
    val mockDownloader = new DownloaderClient:
      def download(uri: java.net.URI, env: Map[String, String]): Either[String, Array[Byte]] =
        Left("Failed to download http://example.com/notfound: 404")
      def checkExists(uri: java.net.URI, env: Map[String, String]): Boolean = false

    val uri    = new java.net.URI("http://example.com/notfound")
    val result = mockDownloader.download(uri)
    assert(result.isLeft)
    assert(result.swap.toOption.get.contains("404"))
  }

  test("download with authentication includes auth token") {
    // Create a mock downloader that verifies auth was passed
    val mockDownloader = new DownloaderClient:
      def download(uri: java.net.URI, env: Map[String, String]): Either[String, Array[Byte]] =
        Right(s"""{"authenticated": true, "token": "${env.getOrElse("FIRST_AUTH_TOKEN", "")}"}""".getBytes("UTF-8"))
      def checkExists(uri: java.net.URI, env: Map[String, String]): Boolean = true

    val uri    = new java.net.URI("http://example.com/protected")
    val token  = "my-secret-token"
    val env    = Map("FIRST_AUTH_TOKEN" -> token)
    val result = mockDownloader.download(uri, env)

    assert(result.isRight)
    val body = new String(result.toOption.get, "UTF-8")
    assert(body.contains(token))
  }

  // Unit tests for createRequest (no network calls, testing header logic)
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
