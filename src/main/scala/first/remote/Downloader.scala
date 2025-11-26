package first.remote

import scala.concurrent.duration._

import sttp.client4._
import sttp.model.Uri

trait DownloaderClient:
  def download(uri: java.net.URI, env: Map[String, String] = sys.env): Either[String, Array[Byte]]
  def checkExists(uri: java.net.URI, env: Map[String, String] = sys.env): Boolean

object Downloader extends DownloaderClient:
  private val backend = DefaultSyncBackend()

  def createRequest(uri: java.net.URI, env: Map[String, String]): Request[Either[String, Array[Byte]]] =
    val baseRequest = basicRequest
      .get(Uri(uri))
      .readTimeout(10.seconds)
      .response(asByteArray)

    if uri.getHost.contains("github.com") then
      env.get("GITHUB_TOKEN") match
        case Some(token) => baseRequest.auth.bearer(token)
        case None        => baseRequest
    else
      env.get("FIRST_AUTH_TOKEN") match
        case Some(token) => baseRequest.auth.bearer(token)
        case None        => baseRequest

  def download(uri: java.net.URI, env: Map[String, String] = sys.env): Either[String, Array[Byte]] =
    val request = createRequest(uri, env)
    try
      val response = request.send(backend)
      if response.isSuccess then
        response.body match
          case Right(bytes) => Right(bytes)
          case Left(error)  => Left(s"Failed to decode response body: $error")
      else Left(s"Failed to download $uri: ${response.statusText}")
    catch case e: Exception => Left(s"Exception during download of $uri: ${e.getMessage}")

  def checkExists(uri: java.net.URI, env: Map[String, String] = sys.env): Boolean =
    val request = basicRequest.head(Uri(uri))
    val requestWithAuth = env.get("FIRST_AUTH_TOKEN") match
      case Some(token) => request.header("Authorization", s"Bearer $token")
      case None =>
        if uri.getHost == "github.com" || uri.getHost == "raw.githubusercontent.com" then
          env.get("GITHUB_TOKEN") match
            case Some(token) => request.header("Authorization", s"Bearer $token")
            case None        => request
        else request

    try
      val response = requestWithAuth.send(backend)
      response.isSuccess
    catch case _: Exception => false
