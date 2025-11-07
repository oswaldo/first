package first.remote

import java.net.URI

object UrlResolver:
  def isRemote(path: String): Boolean =
    path.startsWith("http://") || path.startsWith("https://") || path.startsWith("gh://")

  def resolve(path: String): Either[String, URI] =
    if path.startsWith("gh://") then
      val withoutScheme = path.substring(5)
      val parts         = withoutScheme.split("/", 3)
      if parts.length < 3 then Left(s"Invalid gh:// path: $path. Must be gh://org/repo/path")
      else
        val org  = parts(0)
        val repo = parts(1)
        val rest = parts(2)

        val (realRepo, branch) =
          if repo.contains("@") then
            val split = repo.split("@", 2)
            (split(0), split(1))
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
            (repo, null)
          else
            // 3 segments exactly: gh://org/repo/file -> implicit main
            (repo, "main")

        val rawPath =
          if branch != null then s"$branch/$rest"
          else rest

        Right(new URI(s"https://github.com/$org/$realRepo/raw/$rawPath"))
    else if isRemote(path) then Right(new URI(path))
    else
      // For local paths, create a file URI
      Right(os.Path(path, os.pwd).toNIO.toUri)
