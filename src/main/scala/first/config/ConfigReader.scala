package first.config

import scala.annotation.tailrec
import scala.jdk.CollectionConverters.*
import scala.util.Try

import cats.implicits.*
import org.ekrich.config.Config
import org.ekrich.config.ConfigFactory
import os.*

import first.remote.UrlResolver
import first.remote.Cache
import java.net.URI

import first.remote.DownloaderClient
import first.remote.Downloader

class ConfigReader(downloader: DownloaderClient = Downloader):

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
      discoveredPaths
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
          FctxDef(contextName, mergedConfig, List.empty, allArtifacts)
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

    val userHome         = os.home
    val userHomeFctxPath = userHome / ".first" / contextName / "fctx-def.conf"

    val allPaths =
      if os.exists(userHomeFctxPath) then userHomeFctxPath :: pathsFromRoot
      else pathsFromRoot

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

    val userHome         = os.home
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

    allContexts.map { case (ctx, paths) => ctx -> paths.filter(os.exists(_)) }.filter(_._2.nonEmpty)
