package first.core

import first.BaseSuite

class SymlinkManagerTests extends BaseSuite:
  test("createSymlink creates relative symlink when requested"):
    val dir = os.temp.dir()
    try
      val target = dir / "target.txt"
      os.write(target, "content")

      val linkDir = dir / "subdir"
      os.makeDir(linkDir)
      val link = linkDir / "link"

      // Create relative link: link -> ../target.txt
      SymlinkManager.createSymlink(link, target, relative = true)

      assert(os.isLink(link))
      assert(os.read(link) == "content")

      // Verify it's actually relative (readLink returns resolved path usually, but we can check if it works after move)
      // os-lib's os.readLink(p) returns the *absolute path* the link points to.
      // To verify relative-ness, we can move the parent dir and see if it still works.

      val newDir = dir / os.up / (dir.last + "_moved")
      os.move(dir, newDir)

      val newLink = newDir / "subdir" / "link"
      assert(os.isLink(newLink))
      assert(os.read(newLink) == "content")
    finally os.remove.all(dir)

  test("createSymlink creates absolute symlink by default"):
    val dir = os.temp.dir()
    try
      val target = dir / "target.txt"
      os.write(target, "content")
      val link = dir / "link"

      SymlinkManager.createSymlink(link, target, relative = false)

      assert(os.isLink(link))
      // Moving the dir breaks absolute links pointing inside it
      val newDir = dir / os.up / (dir.last + "_moved_abs")
      os.move(dir, newDir)

      val newLink = newDir / "link"
      // attempting to read should fail if it was absolute pointing to old path
      intercept[java.nio.file.NoSuchFileException] {
        os.read(newLink)
      }
    finally os.remove.all(dir)
