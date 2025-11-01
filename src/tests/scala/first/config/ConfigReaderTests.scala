import first.config.CircularDependency
import first.config.ConfigReader
import first.config.FileParseError
import munit.FunSuite

import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import scala.jdk.CollectionConverters._

class ConfigReaderTests extends FunSuite:

  val reader: ConfigReader = new ConfigReader()

  override def beforeAll(): Unit =
    // Create a temporary directory for config files
    val tempDir = Files.createTempDirectory("fctx-test")
    sys.props += "fctx.test.tmpdir" -> tempDir.toString

    val absoluteDir   = Files.createDirectory(tempDir.resolve("absolute"))
    val absoluteFile2 = absoluteDir.resolve("file2.txt")
    Files.createFile(absoluteFile2)

    // Create a valid config file
    val validConfigPath = tempDir.resolve(".then/my-context/fctx-def.conf")
    Files.createDirectories(validConfigPath.getParent)
    Files.writeString(
      validConfigPath,
      s"""
      name = "my-context"
      includes = ["included-context"]
      artifacts = [
        { path = "./file1.txt", swap-as = "copy" },
        { path = "${absoluteFile2.toString}" }
      ]
    """
    )

    val includedConfigPath =
      tempDir.resolve(".then/included-context/fctx-def.conf")
    Files.createDirectories(includedConfigPath.getParent)
    Files.writeString(
      includedConfigPath,
      """
        name = "included-context"
      """
    )

    Files.createFile(validConfigPath.getParent.resolve("file1.txt"))

    // Create an invalid config file
    val invalidConfigPath = tempDir.resolve(".then/bad-context/fctx-def.conf")
    Files.createDirectories(invalidConfigPath.getParent)
    Files.writeString(
      invalidConfigPath,
      """
      name = "bad-context"
      artifacts = [
        { path = { a = 1 } } // Invalid type, should be a string
      ]
    """
    )

  override def afterAll(): Unit =
    // Clean up temporary directory
    sys.props.get("fctx.test.tmpdir").map(Paths.get(_)).foreach(deleteDir)

  private def deleteDir(dir: Path): Unit =
    Files
      .walk(dir)
      .sorted(java.util.Comparator.reverseOrder())
      .forEach(Files.delete(_)): Unit

  test("successfully parse a valid HOCON config into FctxDef"):
    val tempDir     = Paths.get(sys.props("fctx.test.tmpdir"))
    val contextName = "my-context"
    val result      = reader.load(contextName, tempDir)

    assert(result.isRight, result.left.getOrElse(""))
    val fctxDef = result.toOption.get
    assertEquals(fctxDef.name, contextName)
    assertEquals(fctxDef.includes, List("included-context"))
    assertEquals(fctxDef.artifacts.size, 2)
    assert(fctxDef.artifacts.head.path.endsWith("file1.txt"))
    assert(fctxDef.artifacts.head.path.startsWith("/"))
    assertEquals(fctxDef.artifacts.head.swapAs, "copy")
    assert(fctxDef.artifacts.last.path.endsWith("file2.txt"))
    assert(fctxDef.artifacts.last.path.startsWith("/"))
    assertEquals(fctxDef.artifacts.last.swapAs, "symlink") // Default value

  test("return FileParseError for invalid HOCON syntax"):
    val tempDir     = Paths.get(sys.props("fctx.test.tmpdir"))
    val contextName = "bad-context"
    val result      = reader.load(contextName, tempDir)

    assert(result.isLeft)
    result match
      case Left(FileParseError(path, message)) =>
        assert(path.endsWith("bad-context/fctx-def.conf"))
        assert(message.contains("path has type OBJECT rather than STRING"))
      case Left(e) => fail(s"Expected FileParseError but got $e")
      case _       => fail("Expected FileParseError")

  test("cumulative config loading with overrides"):
    val tempDir     = Paths.get(sys.props("fctx.test.tmpdir"))
    val contextName = "cumulative-context"

    // Create a global config in user home (simulated)
    val userHome         = Paths.get(System.getProperty("user.home"))
    val globalConfigPath = userHome.resolve(s".first/$contextName/fctx-def.conf")
    Files.createDirectories(globalConfigPath.getParent)
    Files.writeString(
      globalConfigPath,
      """
                      key = "global"
                      list = [1, 2]
                    """
    )

    // Create a local config in tempDir
    val localConfigPath = tempDir.resolve(s".then/$contextName/fctx-def.conf")
    Files.createDirectories(localConfigPath.getParent)
    Files.writeString(
      localConfigPath,
      """
                      key = "local"
                      list = [3, 4]
                      newKey = "added"
                    """
    )

    val result = reader.load(contextName, tempDir)

    assert(result.isRight)
    val fctxDef = result.toOption.get
    assertEquals(fctxDef.name, contextName)
    // Local config should override global
    assertEquals(fctxDef.config.getString("key"), "local")
    assertEquals(fctxDef.config.getIntList("list").asScala.map(_.toInt).toList, List(3, 4))
    assertEquals(fctxDef.config.getString("newKey"), "added")

    deleteDir(globalConfigPath.getParent)
    deleteDir(localConfigPath.getParent)

  test("valid includes should merge configurations"):
    val tempDir             = Paths.get(sys.props("fctx.test.tmpdir"))
    val contextName         = "main-context"
    val includedContextName = "included-context"

    // Create included context
    val includedConfigPath = tempDir.resolve(s".then/$includedContextName/fctx-def.conf")
    Files.createDirectories(includedConfigPath.getParent)
    Files.writeString(
      includedConfigPath,
      """
                      includedKey = "from-included"
                      commonKey = "from-included"
                    """
    )

    // Create main context that includes the other
    val mainConfigPath = tempDir.resolve(s".then/$contextName/fctx-def.conf")
    Files.createDirectories(mainConfigPath.getParent)
    Files.writeString(
      mainConfigPath,
      """
                      includes = ["included-context"]
                      mainKey = "from-main"
                      commonKey = "from-main"
                    """
    )

    val result = reader.load(contextName, tempDir)

    assert(result.isRight)
    val fctxDef = result.toOption.get
    assertEquals(fctxDef.name, contextName)
    assertEquals(fctxDef.includes, List("included-context"))
    assertEquals(fctxDef.config.getString("mainKey"), "from-main")
    assertEquals(fctxDef.config.getString("includedKey"), "from-included")
    // Included config should be merged first, then main config overrides
    assertEquals(fctxDef.config.getString("commonKey"), "from-main")

    Files.delete(includedConfigPath)
    Files.delete(mainConfigPath)

  test("circular includes should return CircularDependency error"):
    val tempDir  = Paths.get(sys.props("fctx.test.tmpdir"))
    val contextA = "context-a"
    val contextB = "context-b"

    // Create context-a that includes context-b
    val configAPath = tempDir.resolve(s".then/$contextA/fctx-def.conf")
    Files.createDirectories(configAPath.getParent)
    Files.writeString(configAPath, s"includes = [\"$contextB\"]")

    // Create context-b that includes context-a
    val configBPath = tempDir.resolve(s".then/$contextB/fctx-def.conf")
    Files.createDirectories(configBPath.getParent)
    Files.writeString(configBPath, s"includes = [\"$contextA\"]")

    val result = reader.load(contextA, tempDir)

    assert(result.isLeft)
    result match
      case Left(CircularDependency(path)) =>
        assert(path.contains(contextA))
        assert(path.contains(contextB))
      case _ => fail("Expected CircularDependency error")

    Files.delete(configAPath)
    Files.delete(configBPath)

  test("relative artifact paths should be resolved to absolute paths"):
    val tempDir     = Paths.get(sys.props("fctx.test.tmpdir"))
    val contextName = "path-context"

    val artifactFile = tempDir.resolve("test-artifact.txt")
    Files.writeString(artifactFile, "content")

    val configPath = tempDir.resolve(s".then/$contextName/fctx-def.conf")
    Files.createDirectories(configPath.getParent)
    Files.writeString(
      configPath,
      s"""
                      artifacts = [
                        { path = "../../test-artifact.txt" }
                      ]
                    """
    )

    val result = reader.load(contextName, tempDir.resolve(s".then/$contextName"))

    assert(result.isRight)
    val fctxDef = result.toOption.get
    assertEquals(fctxDef.artifacts.size, 1)
    assert(fctxDef.artifacts.head.path.startsWith("/")) // Should be absolute
    assert(fctxDef.artifacts.head.path.endsWith("test-artifact.txt"))

    Files.delete(artifactFile)
    Files.delete(configPath)
