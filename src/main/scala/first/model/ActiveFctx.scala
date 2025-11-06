package first.model

// Represents the currently active fctx in a given directory.
case class ActiveFctx(
    name: String,
    path: String, // Path to the .then directory where it is active
)
