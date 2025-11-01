package first.config

import cats.implicits._
import org.ekrich.config.Config
import org.ekrich.config.ConfigFactory

import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import scala.annotation.tailrec
import scala.jdk.CollectionConverters._
import scala.util.Try

class ConfigReader:

  private def resolveArtifactPaths(
      artifacts: List[Artifact],
      baseConfigPath: Path
  ): Either[ConfigError, List[Artifact]] =
    artifacts.traverse { artifact =>
      val artifactPath = Paths.get(artifact.path)
      val resolvedPath =
        if artifactPath.isAbsolute then artifactPath
        else baseConfigPath.getParent.resolve(artifact.path).normalize()

      if !Files.exists(resolvedPath) then Left(PathNotFound(resolvedPath.toString))
      else Right(artifact.copy(path = resolvedPath.toString))
    }

  private def parseConfigFile(path: Path): Either[ConfigError, Config] =
    if !Files.exists(path) then Left(PathNotFound(path.toString))
    else
      Try(ConfigFactory.parseFile(path.toFile)).toEither.left
        .map(e => FileParseError(path.toString, e.getMessage))

  private def mapConfigToFctxDef(
      config: Config,
      name: String
  ): Either[ConfigError, FctxDef] =
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
            if artifactConfig.hasPath("swap-as") then artifactConfig.getString("swap-as")
            else "symlink",
          md5 =
            if artifactConfig.hasPath("md5") then Some(artifactConfig.getString("md5"))
            else None,
          revision =
            if artifactConfig.hasPath("revision") then Some(artifactConfig.getString("revision"))
            else None
        )
      }
      FctxDef(name, includes, artifacts, config)
    }.toEither.left.map:
      case e: org.ekrich.config.ConfigException =>
        FileParseError(
          e.origin.description.split(":").head,
          s"Error mapping config to FctxDef: ${e.getMessage}"
        )
      case e =>
        FileParseError(name, s"Error mapping config to FctxDef: ${e.getMessage}")

  private def loadConfigRecursive(
      contextName: String,
      startPath: Path,
      visited: Set[String]
  ): Either[ConfigError, Config] =
    if visited.contains(contextName) then Left(CircularDependency(visited.toList :+ contextName))
    else
      val newVisited = visited + contextName

      val discoveredPaths = discoverFctxDefPaths(contextName, startPath)

      val localConfigEither =
        discoveredPaths.foldLeft(
          Right(ConfigFactory.empty): Either[ConfigError, Config]
        ) { case (accEither, currentPath) =>
          accEither.flatMap { accConfig =>
            parseConfigFile(currentPath).map(currentConfig => currentConfig.withFallback(accConfig))
          }
        }

      localConfigEither.flatMap { localConfig =>
        val includes =
          if localConfig.hasPath("includes") then localConfig.getStringList("includes").asScala.toList
          else Nil

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
      startPath: Path
  ): Either[ConfigError, FctxDef] =
    loadConfigRecursive(contextName, startPath, Set.empty).flatMap { finalConfig =>
      if finalConfig.isEmpty then
        Left(
          PathNotFound(
            s"No fctx-def.conf for context '$contextName' found at or above $startPath, or in user home."
          )
        )
      else
        mapConfigToFctxDef(finalConfig, contextName).flatMap { fctxDef =>
          val mostSpecificPath =
            discoverFctxDefPaths(contextName, startPath).lastOption
              .getOrElse(startPath)
          resolveArtifactPaths(fctxDef.artifacts, mostSpecificPath).map { resolvedArtifacts =>
            fctxDef.copy(artifacts = resolvedArtifacts)
          }
        }
    }

  private def discoverFctxDefPaths(
      contextName: String,
      startPath: Path
  ): List[Path] =
    @tailrec
    def loop(currentPath: Path, acc: List[Path]): List[Path] =
      if currentPath == null || !Files.isDirectory(currentPath) then acc
      else
        val fctxPath = currentPath.resolve(s".then/$contextName/fctx-def.conf")
        val newAcc   = if Files.exists(fctxPath) then fctxPath :: acc else acc
        loop(currentPath.getParent, newAcc)

    val pathsFromRoot = loop(startPath, Nil)

    val userHome         = Paths.get(System.getProperty("user.home"))
    val userHomeFctxPath = userHome.resolve(s".first/$contextName/fctx-def.conf")

    val allPaths =
      if Files.exists(userHomeFctxPath) then userHomeFctxPath :: pathsFromRoot
      else pathsFromRoot

    allPaths.distinct

  def listAvailableContextsWithPaths(startPath: Path): Map[String, List[Path]] =
    @tailrec
    def discoverContextsIn(path: Path, acc: Map[String, List[Path]]): Map[String, List[Path]] =
      if path == null || !Files.isDirectory(path) then acc
      else
        val thenDir = path.resolve(".then")
        val contexts =
          if Files.isDirectory(thenDir) then
            Files
              .list(thenDir)
              .iterator()
              .asScala
              .filter(Files.isDirectory(_))
              .map(p => p.getFileName.toString -> List(p.resolve("fctx-def.conf")))
              .toMap
          else Map.empty[String, List[Path]]

        val merged = contexts.foldLeft(acc) { case (acc, (ctx, paths)) =>
          acc.updated(ctx, acc.getOrElse(ctx, Nil) ++ paths)
        }

        discoverContextsIn(path.getParent, merged)

    val contextsFromRoot = discoverContextsIn(startPath, Map.empty)

    val userHome         = Paths.get(System.getProperty("user.home"))
    val userHomeFirstDir = userHome.resolve(".first")
    val userHomeContexts =
      if Files.isDirectory(userHomeFirstDir) then
        Files
          .list(userHomeFirstDir)
          .iterator()
          .asScala
          .filter(Files.isDirectory(_))
          .map(p => p.getFileName.toString -> List(p.resolve("fctx-def.conf")))
          .toMap
      else Map.empty[String, List[Path]]

    val allContexts = userHomeContexts.foldLeft(contextsFromRoot) { case (acc, (ctx, paths)) =>
      acc.updated(ctx, acc.getOrElse(ctx, Nil) ++ paths)
    }

    allContexts.map { case (ctx, paths) => ctx -> paths.filter(Files.exists(_)) }.filter(_._2.nonEmpty)
