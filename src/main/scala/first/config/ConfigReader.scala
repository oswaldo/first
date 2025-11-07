package first.config

import scala.annotation.tailrec
import scala.jdk.CollectionConverters.*
import scala.util.Try

import cats.implicits.*
import org.ekrich.config.Config
import org.ekrich.config.ConfigFactory
import os.*

class ConfigReader:

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
      name: String,
  ): Either[ConfigError, FctxDef] =
    scribe.debug(s"Mapping config to FctxDef for context: $name")
    Try {
      val includes =
        if config.hasPath("includes") then config.getStringList("includes").asScala.toList
        else Nil
      val artifactsConfig =
        if config.hasPath("artifacts") then config.getConfigList("artifacts").asScala.toList
        else Nil
      val artifacts = artifactsConfig.map { artifactConfig =>
        Artifact(
          path = artifactConfig.getString("path"),
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
      FctxDef(name, config, includes, artifacts)
    }.toEither.left.map:
      case e: org.ekrich.config.ConfigException =>
        scribe.debug(s"Error mapping config to FctxDef: ${e.getMessage}")
        FileParseError(
          e.origin.description.split(":").head,
          s"Error mapping config to FctxDef: ${e.getMessage}",
        )
      case e =>
        scribe.debug(s"Error mapping config to FctxDef: ${e.getMessage}")
        FileParseError(name, s"Error mapping config to FctxDef: ${e.getMessage}")

  private def loadConfigRecursive(
      contextName: String,
      startPath: Path,
      visited: Set[String],
  ): Either[ConfigError, Config] =
    scribe.debug(s"Recursively loading config for '$contextName' from '$startPath'")
    if visited.contains(contextName) then
      scribe.debug(s"Circular dependency detected for context: $contextName")
      Left(CircularDependency(visited.toList :+ contextName))
    else
      val newVisited = visited + contextName

      val discoveredPaths = discoverFctxDefPaths(contextName, startPath)
      scribe.debug(s"Discovered paths for '$contextName': $discoveredPaths")

      val localConfigEither =
        discoveredPaths.foldLeft(
          Right(ConfigFactory.empty): Either[ConfigError, Config],
        ) { case (accEither, currentPath) =>
          accEither.flatMap { accConfig =>
            parseConfigFile(currentPath).map(currentConfig => currentConfig.withFallback(accConfig))
          }
        }

      localConfigEither.flatMap { localConfig =>
        val includes =
          if localConfig.hasPath("includes") then localConfig.getStringList("includes").asScala.toList
          else Nil
        scribe.debug(s"Includes for '$contextName': $includes")

        val includedConfigsEither: Either[ConfigError, List[Config]] =
          includes.traverse { includeName =>
            loadConfigRecursive(includeName, startPath, newVisited)
          }

        includedConfigsEither.map { includedConfigs =>
          val mergedIncludedConfig =
            includedConfigs.foldLeft(ConfigFactory.empty) { (acc, conf) =>
              conf.withFallback(acc)
            }
          localConfig.withFallback(mergedIncludedConfig)
        }
      }

  def load(
      contextName: String,
      startPath: Path,
  ): Either[ConfigError, FctxDef] =
    scribe.debug(s"Loading context '$contextName' from '$startPath'")
    loadConfigRecursive(contextName, startPath, Set.empty).flatMap { finalConfig =>
      if finalConfig.isEmpty then
        scribe.debug(s"No config found for context: $contextName")
        Left(
          PathNotFound(
            s"No fctx-def.conf for context '$contextName' found at or above $startPath, or in user home.",
          ),
        )
      else
        scribe.debug(s"Successfully loaded config for context: $contextName")
        mapConfigToFctxDef(finalConfig, contextName)
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
