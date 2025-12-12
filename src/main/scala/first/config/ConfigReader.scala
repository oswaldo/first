package first.config

import first.remote.Cache
import first.remote.Downloader
import first.remote.DownloaderClient
import first.remote.UrlResolver

import java.net.URI

import scala.annotation.tailrec
import scala.jdk.CollectionConverters.*
import scala.util.Try

import cats.implicits.*
import org.ekrich.config.Config
import org.ekrich.config.ConfigFactory
import os.*

class ConfigReader(downloader: DownloaderClient = Downloader, val userHome: Path = os.home):

  private def parseConfigFile(path: Path): Either[ConfigError, Config] =
    scribe.debug(s"Parsing config file: $path")
    if !os.exists(path) then
      scribe.debug(s"File not found: $path")
      Left(PathNotFound(path.toString))
    else
      Try(ConfigFactory.parseFile(path.toIO)).toEither.left.map { e =>
        scribe.debug(s"Failed to parse file: $path, error: ${e.getMessage}")
        FileParseError(path.toString, e.getMessage)
      }

  private def mapConfigToFctxDef(
      config: Config,
      contextName: String,
      baseUri: Option[URI] = None,
  ): Either[ConfigError, FctxDef] =
    scribe.debug(s"Mapping config to FctxDef for context: $contextName")
    Try {
      val includes =
        if config.hasPath("includes") then config.getStringList("includes").asScala.toList
        else Nil
      val artifactsConfig =
        if config.hasPath("artifacts") then config.getConfigList("artifacts").asScala.toList
        else Nil
      val artifacts = artifactsConfig.map { artifactConfig =>
        val path = artifactConfig.getString("path")
        val resolvedPath = baseUri match
          case Some(base) if !UrlResolver.isRemote(path) =>
            base.resolve(path).toString
          case _ => path

        Artifact(
          path = resolvedPath,
          swapAs =
            if artifactConfig.hasPath("swapAs") then first.config.SwapAs.fromString(artifactConfig.getString("swapAs"))
            else first.config.SwapAs.Symlink,
          md5 =
            if artifactConfig.hasPath("md5") then Some(artifactConfig.getString("md5"))
            else None,
          sha256 =
            if artifactConfig.hasPath("sha256") then Some(artifactConfig.getString("sha256"))
            else None,
          revision =
            if artifactConfig.hasPath("revision") then Some(artifactConfig.getString("revision"))
            else None,
        )
      }
      FctxDef(contextName, config, includes, artifacts)
    }.toEither.left.map:
      case e: org.ekrich.config.ConfigException =>
        scribe.debug(s"Error mapping config to FctxDef: ${e.getMessage}")
        FileParseError(
          e.origin.description.split(":").head,
          s"Error mapping config to FctxDef: ${e.getMessage}",
        )
      case e =>
        scribe.debug(s"Error mapping config to FctxDef: ${e.getMessage}")
        FileParseError(contextName, s"Error mapping config to FctxDef: ${e.getMessage}")

  case class LoadedConfig(config: Config, sourceUri: Option[URI])

  private def handleRemoteInclude(
      includeUrl: String,
      startPath: Path,
      visited: Set[String],
  ): Either[ConfigError, List[LoadedConfig]] =
    scribe.debug(s"Handling remote include: $includeUrl")

    // Check for circular dependency at URL level
    if visited.contains(includeUrl) then Left(CircularDependency(visited.toList :+ includeUrl))
    else
      val newVisited = visited + includeUrl
      val cache      = Cache()

      UrlResolver.resolve(includeUrl).left.map(e => FileParseError(includeUrl, e)).flatMap { uri =>
        downloader.download(uri).left.map(e => FileParseError(includeUrl, e)).flatMap { content =>
          val (hash, path) = cache.put(content)
          scribe.debug(s"Downloaded remote include to $path")

          Try(ConfigFactory.parseFile(path.toIO)).toEither.left
            .map { e =>
              scribe.debug(s"Failed to parse remote include: $includeUrl, error: ${e.getMessage}")
              FileParseError(includeUrl, e.getMessage)
            }
            .flatMap { config =>
              // Recursively process includes in the remote config
              val includes = Try(config.getStringList("includes").asScala.toList).getOrElse(List.empty)

              val includedConfigsEither: Either[ConfigError, List[List[LoadedConfig]]] =
                includes.traverse { includeStr =>
                  // Resolve relative includes against the remote URI
                  val resolvedIncludeStr =
                    if UrlResolver.isRemote(includeStr) then includeStr
                    else uri.resolve(includeStr).toString

                  if UrlResolver.isRemote(resolvedIncludeStr) then
                    handleRemoteInclude(resolvedIncludeStr, startPath, newVisited)
                  else
                    // Local includes from remote config (unusual but possible)
                    loadContextByName(includeStr, startPath, newVisited)
                }

              includedConfigsEither.map { includedConfigs =>
                LoadedConfig(config, Some(uri)) :: includedConfigs.flatMap(identity)
              }
            }
        }
      }

  private def loadContextByName(
      contextName: String,
      startPath: Path,
      visited: Set[String] = Set.empty,
  ): Either[ConfigError, List[LoadedConfig]] =
    // Check for circular dependency at context name level
    if visited.contains(contextName) then Left(CircularDependency(visited.toList :+ contextName))
    else
      val newVisited      = visited + contextName
      val discoveredPaths = discoverFctxDefPaths(contextName, startPath)
      discoveredPaths.reverse
        .traverse { path =>
          loadConfigRecursive(path.toString, startPath, newVisited)
        }
        .map(_.flatten)

  private def loadConfigRecursive(
      path: String,
      startPath: Path,
      visited: Set[String],
      basePath: Option[URI] = None,
  ): Either[ConfigError, List[LoadedConfig]] =
    val resolvedPathEither: Either[ConfigError, Path] =
      if UrlResolver.isRemote(path) then Right(os.Path(path, startPath))
      else Right(os.Path(path, startPath))

    resolvedPathEither.flatMap { configFile =>
      if visited.contains(configFile.toString) then Left(CircularDependency(visited.toList :+ configFile.toString))
      else
        val newVisited = visited + configFile.toString
        parseConfigFile(configFile).flatMap { config =>
          val includes = Try(config.getStringList("includes").asScala.toList).getOrElse(List.empty)

          val includedConfigsEither: Either[ConfigError, List[List[LoadedConfig]]] =
            includes.traverse { includeStr =>
              val resolvedIncludeStr = basePath match
                case Some(baseUri) if !UrlResolver.isRemote(includeStr) =>
                  baseUri.resolve(includeStr).toString
                case _ => includeStr

              if UrlResolver.isRemote(resolvedIncludeStr) then
                handleRemoteInclude(resolvedIncludeStr, startPath, newVisited)
              else
                // For local includes, treat as context names
                loadContextByName(includeStr, startPath, newVisited)
            }

          includedConfigsEither.map { includedConfigs =>
            LoadedConfig(config, basePath) :: includedConfigs.flatMap(identity)
          }
        }
    }

  def load(
      contextName: String,
      startPath: Path,
  ): Either[ConfigError, FctxDef] =
    scribe.debug(s"Loading context '$contextName' from '$startPath'")

    loadContextByName(contextName, startPath).flatMap { allConfigs =>
      if allConfigs.isEmpty then
        scribe.debug(s"No config found for context: $contextName")
        Left(
          PathNotFound(s"No fctx-def.conf for context '$contextName' found at or above $startPath, or in user home."),
        )
      else
        // Order configs: discovered paths are [userHome, local...], we want local to override userHome
        // loadContextByName returns flattened list already, but from multiple discovered paths
        // We need to reverse the order by discovered path, not by individual config
        // Actually, loadContextByName already handles this correctly by traversing discoveredPaths in order
        // and flattening, so configs from later paths come later in the list
        // We need to reverse to get local-first ordering
        val mergedConfig = allConfigs.map(_.config).reduceLeft(_ withFallback _)

        // Collect artifacts
        val allArtifactsEither = allConfigs.map { loadedConfig =>
          mapConfigToFctxDef(loadedConfig.config, contextName, loadedConfig.sourceUri).map(_.artifacts)
        }.sequence

        allArtifactsEither.map { artifactsList =>
          val allArtifacts = artifactsList.flatten
          val includes     = Try(mergedConfig.getStringList("includes").asScala.toList).getOrElse(List.empty)
          FctxDef(contextName, mergedConfig, includes, allArtifacts)
        }
    }

  private def discoverFctxDefPaths(
      contextName: String,
      startPath: Path,
  ): List[Path] =
    @tailrec
    def loop(currentPathOpt: Option[Path], acc: List[Path]): List[Path] =
      currentPathOpt match
        case Some(currentPath) if os.isDir(currentPath) && currentPath.segmentCount > 0 =>
          scribe.debug(s"Loop: currentPath = $currentPath")
          val fctxPath = currentPath / ".then" / contextName / "fctx-def.conf"
          scribe.debug(s"Loop: fctxPath = $fctxPath")
          val newAcc = if os.exists(fctxPath) then fctxPath :: acc else acc
          val parent = Try(currentPath / os.up).toOption
          loop(parent, newAcc)
        case _ => acc

    val pathsFromRoot = loop(Some(startPath), Nil)

    val userHomeFctxPath = userHome / ".first" / contextName / "fctx-def.conf"
    val globalConfig     = new GlobalConfig(userHome)

    val globalPaths = globalConfig
      .listContextPaths()
      .getOrElse(Nil)
      .filter { p =>
        if os.exists(p) then
          Try(ConfigFactory.parseFile(p.toIO))
            .map(c => c.hasPath("name") && c.getString("name") == contextName)
            .getOrElse(false)
        else false
      }

    val allPaths =
      (if os.exists(userHomeFctxPath) then userHomeFctxPath :: pathsFromRoot else pathsFromRoot) ++ globalPaths

    scribe.debug(s"Discovered paths for context '$contextName' from '$startPath': $allPaths")
    allPaths.distinct

  def listAvailableContextsWithPaths(startPath: Path): Map[String, List[Path]] =
    @tailrec
    def discoverContextsIn(pathOpt: Option[Path], acc: Map[String, List[Path]]): Map[String, List[Path]] =
      pathOpt match
        case Some(path) if os.isDir(path) && path.segmentCount > 0 =>
          val thenDir = path / ".then"
          val contexts =
            if os.isDir(thenDir) then
              os.list(thenDir)
                .filter(os.isDir(_))
                .map(p => p.last -> List(p / "fctx-def.conf"))
                .toMap
            else Map.empty[String, List[Path]]

          val merged = contexts.foldLeft(acc) { case (acc, (ctx, paths)) =>
            acc.updated(ctx, acc.getOrElse(ctx, Nil) ++ paths)
          }

          val parent = Try(path / os.up).toOption
          discoverContextsIn(parent, merged)
        case _ => acc

    val contextsFromRoot = discoverContextsIn(Some(startPath), Map.empty)

    val userHomeFirstDir = userHome / ".first"
    val userHomeContexts =
      if os.isDir(userHomeFirstDir) then
        os.list(userHomeFirstDir)
          .filter(os.isDir(_))
          .map(p => p.last -> List(p / "fctx-def.conf"))
          .toMap
      else Map.empty[String, List[Path]]

    val allContexts = userHomeContexts.foldLeft(contextsFromRoot) { case (acc, (ctx, paths)) =>
      acc.updated(ctx, acc.getOrElse(ctx, Nil) ++ paths)
    }

    val globalConfig = new GlobalConfig(userHome)
    val globalContexts = globalConfig
      .listContextPaths()
      .getOrElse(Nil)
      .filter(os.exists)
      .flatMap { path =>
        scribe.debug(s"Checking path for global context: $path")
        Try(ConfigFactory.parseFile(path.toIO))
          .map { config =>
            if config.hasPath("name") then
              val name = config.getString("name")
              scribe.debug(s"Found global context '$name' at $path")
              Some(name -> path)
            else
              scribe.debug(s"No 'name' found in config at $path")
              None
          }
          .fold(
            e =>
              scribe.debug(s"Failed to parse global context config at $path: ${e.getMessage}")
              None
            ,
            identity,
          )
      }
      .groupBy(_._1)
      .map { case (name, pairs) => name -> pairs.map(_._2) }

    val finalContexts = globalContexts.foldLeft(allContexts) { case (acc, (ctx, paths)) =>
      acc.updated(ctx, acc.getOrElse(ctx, Nil) ++ paths)
    }

    finalContexts.map { case (ctx, paths) => ctx -> paths.filter(os.exists(_)) }.filter(_._2.nonEmpty)

  def detectContextName(startPath: Path): Option[String] =
    @tailrec
    def loop(currentPathOpt: Option[Path]): Option[String] =
      currentPathOpt match
        case Some(currentPath) if os.isDir(currentPath) =>
          val configPath = currentPath / "fctx-def.conf"
          if os.exists(configPath) then
            scribe.debug(s"Found config at $configPath")
            Try(ConfigFactory.parseFile(configPath.toIO))
              .map(config =>
                if config.hasPath("name") then
                  val name = config.getString("name")
                  scribe.debug(s"Detected context '$name'")
                  Some(name)
                else
                  scribe.debug("No 'name' in config")
                  None,
              )
              .getOrElse(None)
          else
            // Also check standard structure .then/<name>/fctx-def.conf if we are at root?
            // But usually we are inside.
            // If we are deep inside artifacts/, we walk up.
            loop(Try(currentPath / os.up).toOption)
        case _ =>
          scribe.debug("Reached root, no context found")
          None

    loop(Some(startPath))

object ConfigReader:
  def resolveWriteTarget(paths: List[os.Path], workingDir: os.Path): Either[ConfigError, os.Path] =
    val existingPaths = paths.filter(os.exists)
    if existingPaths.isEmpty then Left(PathNotFound(s"No valid context paths found from: $paths"))
    else
      // 1. Filter checks if workingDir is inside the context's directory (parent of fctx-def.conf)
      //    This implies the user is "inside" the context scope.
      //    We search for the "most specific" scope (longest path length).
      val localMatches = existingPaths
        .filter(p => workingDir.startsWith(p / os.up))
        .sortBy(_.segmentCount)
        .reverse

      localMatches.headOption match
        case Some(bestMatch) => Right(bestMatch)
        case None            =>
          // 2. If no local scope matches, we are outside all contexts.
          //    We can only proceed if there is exactly one option.
          if existingPaths.size == 1 then Right(existingPaths.head)
          else
            Left(
              AmbiguousContextError(
                s"Multiple external contexts found: ${existingPaths.mkString(", ")}. Please navigate inside the desired context directory or use a unique name (if applicable).",
              ),
            )
