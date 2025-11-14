package first

import cask.model.Response

case class MinimalRoutes()(implicit cc: castor.Context,
                           log: cask.Logger) extends cask.Routes:
  @cask.get("/")
  def root(): Response[String] =
    cask.Redirect("/first")

  @cask.staticFiles("/first")
  def first() = "index.html"

  @cask.staticFiles("/main.js")
  def main() = "main.js"

  @cask.staticFiles("/styles.css")
  def styles() = "styles.css"

  @cask.staticFiles("/favicon.ico")
  def favicon() = "favicon.ico"

  initialize()

object Serve extends cask.Main:
  val allRoutes = Seq(MinimalRoutes())
  println("Server started at http://localhost:8080")
  println("Press Ctrl+C to stop")
end Serve
