package first.config

import upickle.default.ReadWriter

// Defines the method used to place an artifact in the working directory.
enum SwapAs derives ReadWriter:
  case Symlink, Copy

object SwapAs:
  def fromString(s: String): SwapAs =
    s.toLowerCase match
      case "copy"    => Copy
      case "symlink" => Symlink
      case _         => Symlink // Default to Symlink for unknown values
