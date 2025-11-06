package first.config

import org.ekrich.config.Config
import upickle.default.ReadWriter

// Represents a single file or directory to be managed.
case class Artifact(
    path: String,
    swapAs: SwapAs = SwapAs.Symlink, // Defaults to symlink as per spec
    md5: Option[String] = None,
    revision: Option[String] = None,
) derives ReadWriter

/** Represents a fully resolved "full context definition".
  *
  * @param name
  *   The name of the fctx, inferred from the directory structure where the fctx-def.conf is located, not from the file
  *   content itself. It is used to identify the context in memory.
  * @param config
  *   The raw merged HOCON config object.
  * @param includes
  *   A list of other fctx names to be included.
  * @param artifacts
  *   A list of files and directories managed by this fctx.
  */
case class FctxDef(
    name: String,   // Inferred from the directory structure, not from the file
    config: Config, // Add the raw merged config object
    includes: List[String] = Nil,
    artifacts: List[Artifact] = Nil,
)
