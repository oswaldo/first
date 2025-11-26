package first.remote

import java.net.URI

import scala.util.Try

object UrlResolver:
  def isRemote(path: String): Boolean =
    path.startsWith("http://") || path.startsWith("https://") || path.startsWith("gh://")

  def resolve(path: String): Either[String, URI] =
    path match
      case p if p.startsWith("gh://") => resolveGithub(p)
      case p if isRemote(p)           => Right(new URI(p))
      case localPath                  => resolveLocal(localPath)

  private def resolveGithub(path: String): Either[String, URI] =
    val withoutScheme = path.substring(5)
    withoutScheme.split("/", 3).toList match
      case org :: repo :: rest :: Nil =>
        val (realRepo, branch) = parseRepoAndBranch(repo, rest)
        val rawPath            = branch.map(b => s"$b/$rest").getOrElse(rest)
        Right(new URI(s"https://github.com/$org/$realRepo/raw/$rawPath"))
      case _ =>
        Left(s"Invalid gh:// path: $path. Must be gh://org/repo/path")

  private def parseRepoAndBranch(repo: String, rest: String): (String, Option[String]) =
    if repo.contains("@") then
      repo.split("@", 2) match
        case Array(r, b) => (r, Some(b))
        case Array(r)    => (r, None) // Should not happen if contains @ but safe fallback
        case _           => (repo, None)
    else if rest.contains("/") then
      // If the path has more segments (e.g. gh://org/repo/dir/file),
      // we assume the user provided the full path structure including branch.
      // However, to support the "defaults to main" spec for simple paths,
      // we need to be careful.
      // Our rule:
      // 1. gh://org/repo@branch/path -> .../raw/branch/path
      // 2. gh://org/repo/file (3 segments total) -> .../raw/main/file
      // 3. gh://org/repo/path/to/file (> 3 segments) -> .../raw/path/to/file
      //    (User must include branch in path if not using @)
      (repo, None)
    else
      // 3 segments exactly: gh://org/repo/file -> implicit main
      (repo, Some("main"))

  private def resolveLocal(path: String): Either[String, URI] =
    Try(os.Path(path, os.pwd).toNIO.toUri).toEither.left.map(_.getMessage)
