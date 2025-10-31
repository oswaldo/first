package first.config

import org.ekrich.config.Config

// Represents a single file or directory to be managed.
case class Artifact(
    path: String,
    swapAs: String = "symlink", // Defaults to symlink as per spec
    md5: Option[String] = None,
    revision: Option[String] = None
)

// Represents a fully resolved "full context definition".
case class FctxDef(
    name: String, // Inferred from the directory structure, not from the file
    includes: List[String] = Nil,
    artifacts: List[Artifact] = Nil,
    config: Config // Add the raw merged config object
)
