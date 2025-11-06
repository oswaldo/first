import first.BaseSuite
import first.config.CircularDependency
import first.config.ConfigReader
import first.config.FileParseError
import first.config.SwapAs

import os.*

class ConfigReaderTests extends BaseSuite:

  val reader: ConfigReader = new ConfigReader()

  private def setup(): os.Path =
    os.temp.dir()

  test("successfully parse a valid HOCON config into FctxDef"):
    val tempDir = setup()
    val testDir = tempDir / "valid-hocon"
    os.makeDir.all(testDir)

    val absoluteDir   = testDir / "absolute"
    val absoluteFile2 = absoluteDir / "file2.txt"
    os.makeDir.all(absoluteDir)
    os.write(absoluteFile2, "")

    val validConfigPath = testDir / ".then" / "my-context" / "fctx-def.conf"
    os.makeDir.all(validConfigPath / os.up)
    os.write(
      validConfigPath,
      s"""
      name = "my-context"
      includes = ["included-context"]
      artifacts = [
        { path = "./file1.txt", swapAs = "copy" },
        { path = "${absoluteFile2.toString}" }
      ]
    """,
    )

    val includedConfigPath =
      testDir / ".then" / "included-context" / "fctx-def.conf"
    os.makeDir.all(includedConfigPath / os.up)
    os.write(
      includedConfigPath,
      """
        name = "included-context"
      """,
    )

    os.write(validConfigPath / os.up / "file1.txt", "")

    val contextName = "my-context"
    val result      = reader.load(contextName, testDir)

    assert(result.isRight, result.left.getOrElse("").toString)
    val fctxDef = result.toOption.get
    assertEquals(fctxDef.name, contextName)
    assertEquals(fctxDef.includes, List("included-context"))
    assertEquals(fctxDef.artifacts.size, 2)
    assertEquals(fctxDef.artifacts.head.path, "./file1.txt")
    assertEquals(fctxDef.artifacts.head.swapAs, SwapAs.Copy)
    assert(fctxDef.artifacts.last.path.endsWith("file2.txt"))
    assert(fctxDef.artifacts.last.path.startsWith("/"))
    assertEquals(fctxDef.artifacts.last.swapAs, SwapAs.Symlink) // Default value

  test("return FileParseError for invalid HOCON syntax"):
    val tempDir = setup()
    val testDir = tempDir / "invalid-hocon"
    os.makeDir.all(testDir)

    val invalidConfigPath = testDir / ".then" / "bad-context" / "fctx-def.conf"
    os.makeDir.all(invalidConfigPath / os.up)
    os.write(
      invalidConfigPath,
      """
      name = "bad-context"
      artifacts = [
        { path = { a = 1 } } // Invalid type, should be a string
      ]
    """,
    )

    val contextName = "bad-context"
    val result      = reader.load(contextName, testDir)

    assert(result.isLeft)
    result match
      case Left(FileParseError(path, message)) =>
        assert(path.endsWith("bad-context/fctx-def.conf"))
        assert(message.contains("path has type OBJECT rather than STRING"))
      case Left(e) => fail(s"Expected FileParseError but got $e")
      case _       => fail("Expected FileParseError")

  test("cumulative config loading with overrides"):
    val tempDir = setup()
    val testDir = tempDir / "cumulative-loading"
    os.makeDir.all(testDir)
    val contextName = "cumulative-context"

    // Create a global config in user home (simulated)
    val userHome = testDir / "user_home"
    os.makeDir.all(userHome)
    val originalHome = System.getProperty("user.home")
    System.setProperty("user.home", userHome.toString())

    val globalConfigPath = userHome / ".first" / contextName / "fctx-def.conf"
    os.makeDir.all(globalConfigPath / os.up)
    os.write(
      globalConfigPath,
      """
                      key = "global"
                      list = [1, 2]
                    """,
    )

    // Create a local config in tempDir
    val localConfigPath = testDir / ".then" / contextName / "fctx-def.conf"
    os.makeDir.all(localConfigPath / os.up)
    os.write(
      localConfigPath,
      """
                      key = "local"
                      list = [3, 4]
                      newKey = "added"
                    """,
    )

    val result = reader.load(contextName, testDir)

    assert(result.isRight)
    val fctxDef = result.toOption.get
    assertEquals(fctxDef.name, contextName)
    // Local config should override global
    assertEquals(fctxDef.config.getString("key"), "local")
    import scala.jdk.CollectionConverters.*
    assertEquals(fctxDef.config.getIntList("list").asScala.map(_.toInt).toList, List(3, 4))
    assertEquals(fctxDef.config.getString("newKey"), "added")

    // Restore user.home
    System.setProperty("user.home", originalHome)

  test("valid includes should merge configurations"):
    val tempDir = setup()
    val testDir = tempDir / "valid-includes"
    os.makeDir.all(testDir)
    val contextName         = "main-context"
    val includedContextName = "included-context"

    // Create included context
    val includedConfigPath = testDir / ".then" / includedContextName / "fctx-def.conf"
    os.makeDir.all(includedConfigPath / os.up)
    os.write(
      includedConfigPath,
      """
                      includedKey = "from-included"
                      commonKey = "from-included"
                    """,
    )

    // Create main context that includes the other
    val mainConfigPath = testDir / ".then" / contextName / "fctx-def.conf"
    os.makeDir.all(mainConfigPath / os.up)
    os.write(
      mainConfigPath,
      """
                      includes = ["included-context"]
                      mainKey = "from-main"
                      commonKey = "from-main"
                    """,
    )

    val result = reader.load(contextName, testDir)

    assert(result.isRight)
    val fctxDef = result.toOption.get
    assertEquals(fctxDef.name, contextName)
    assertEquals(fctxDef.includes, List("included-context"))
    assertEquals(fctxDef.config.getString("mainKey"), "from-main")
    assertEquals(fctxDef.config.getString("includedKey"), "from-included")
    // Included config should be merged first, then main config overrides
    assertEquals(fctxDef.config.getString("commonKey"), "from-main")

  test("circular includes should return CircularDependency error"):
    val tempDir = setup()
    val testDir = tempDir / "circular-includes"
    os.makeDir.all(testDir)
    val contextA = "context-a"
    val contextB = "context-b"

    // Create context-a that includes context-b
    val configAPath = testDir / ".then" / contextA / "fctx-def.conf"
    os.makeDir.all(configAPath / os.up)
    os.write(configAPath, s"includes = [\"$contextB\"]")

    // Create context-b that includes context-a
    val configBPath = testDir / ".then" / contextB / "fctx-def.conf"
    os.makeDir.all(configBPath / os.up)
    os.write(configBPath, s"includes = [\"$contextA\"]")

    val result = reader.load(contextA, testDir)

    assert(result.isLeft)
    result match
      case Left(CircularDependency(path)) =>
        assert(path.contains(contextA))
        assert(path.contains(contextB))
      case _ => fail("Expected CircularDependency error")

  test("relative artifact paths should be preserved"):
    val tempDir = setup()
    scribe.Logger.root.withMinimumLevel(scribe.Level.Debug).replace()
    val testDir = tempDir / "relative-paths"
    os.makeDir.all(testDir)
    val contextName = "path-context"

    val artifactFile = testDir / "test-artifact.txt"
    os.write(artifactFile, "content")

    val configPath = testDir / ".then" / contextName / "fctx-def.conf"
    os.makeDir.all(configPath / os.up)
    os.write(
      configPath,
      """
                      artifacts = [
                        { path = "../../test-artifact.txt" }
                      ]
                    """,
    )

    val result = reader.load(contextName, testDir / ".then" / contextName)

    assert(result.isRight)
    val fctxDef = result.toOption.get
    assertEquals(fctxDef.artifacts.size, 1)
    assertEquals(fctxDef.artifacts.head.path, "../../test-artifact.txt")
