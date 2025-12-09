package first

import com.raquo.laminar.api.L.{*, given}
import org.scalajs.dom
import scala.concurrent.ExecutionContext.Implicits.global

object Main:

  import Translations.translate as t

  val releaseTag = Var(Option.empty[String])

  def main(args: Array[String]): Unit =
    lazy val appContainer = dom.document.querySelector("#appContainer")
    renderOnDomContentLoaded(appContainer, appElement)
    fetchLatestRelease()

  def fetchLatestRelease(): Unit =
    import scala.scalajs.js.Thenable.Implicits.*
    dom
      .fetch("https://api.github.com/repos/oswaldo/first/releases/latest")
      .flatMap(_.json())
      .map { json =>
        val tag = json.asInstanceOf[scala.scalajs.js.Dynamic].tag_name.asInstanceOf[String]
        releaseTag.set(Some(tag))
      }
      .recover { case e =>
        dom.console.error(s"Failed to fetch release: $e")
      }

  val languages = List(
    ("en", "English", "🇺🇸"),
    ("pt-br", "Português (BR)", "🇧🇷"),
    ("de", "Deutsch", "🇩🇪"),
  )

  val languageSelector: Element =
    val isOpen = Var(false)
    div(
      cls("language-selector"),
      inContext { el =>
        windowEvents(_.onClick).map(_.target) --> { target =>
          if isOpen.now() && !el.ref.contains(target.asInstanceOf[dom.Node]) then isOpen.set(false)
        }
      },
      div(
        cls("custom-select"),
        onClick --> (_ => isOpen.update(!_)),
        child <-- Translations.currentLanguage.signal.map { currentCode =>
          val (_, name, flag) = languages.find(_._1 == currentCode).getOrElse(languages.head)
          div(cls("select-selected"), s"$flag $name")
        },
        div(
          cls("select-items"),
          cls.toggle("select-hide") <-- isOpen.signal.map(!_),
          languages.map { case (code, name, flag) =>
            div(
              cls("select-item"),
              s"$flag $name",
              onClick.stopPropagation.mapTo(code) --> { c =>
                Translations.currentLanguage.set(c)
                isOpen.set(false)
              },
            )
          },
        ),
      ),
    )

  val githubCorner: Element =
    a(
      href("https://github.com/oswaldo/first"),
      target("_blank"),
      cls("github-corner"),
      aria.label("View source on GitHub"),
      svg.svg(
        svg.width("80"),
        svg.height("80"),
        svg.viewBox("0 0 250 250"),
        svg.style("fill:#e94560; color:#1a1a2e; position: absolute; top: 0; border: 0; right: 0;"),
        svg.path(svg.d("M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z")),
        svg.path(
          svg.d(
            "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
          ),
          svg.fill("currentColor"),
          svg.cls("octo-arm"),
          svg.style("transform-origin: 130px 106px;"),
        ),
        svg.path(
          svg.d(
            "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
          ),
          svg.fill("currentColor"),
          svg.cls("octo-body"),
        ),
      ),
    )

  val alphaBanner: Element =
    div(
      cls("alpha-banner"),
      inContext(el => t("alphaWarning") --> { html => el.ref.innerHTML = html }),
    )

  val appElement: Element =
    div(
      cls("container"),
      githubCorner,
      languageSelector,
      alphaBanner,
      headerTag(
        cls("hero"),
        h1(
          img(
            src("https://raw.githubusercontent.com/oswaldo/first/refs/heads/main/images/first.png"),
            alt("First Project Logo: An amorphous smiling ghost with the name 'first' written below it"),
            cls("project-logo"),
            width("150px"), // Adjust size as needed, assumed value
          ),
        ),
        p(cls("tagline"), child.text <-- t("tagline")),
        p(cls("description"), child.text <-- t("description")),

        // Release Badge
        div(
          cls("release-badge"),
          child <-- releaseTag.signal.map {
            case Some(tag) =>
              span(
                cls("badge"),
                child.text <-- t("latestVersion").map(l => s"$l $tag"),
              )
            case None => emptyNode
          },
        ),
        div(
          cls("install-wrapper"),
          div(
            cls("install-box"),
            code("curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh"),
            button(
              cls("copy-btn"),
              onClick --> { _ =>
                dom.window.navigator.clipboard
                  .writeText("curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh")

                val feedback = dom.document.querySelector(".copy-feedback")
                feedback.classList.add("visible")
                dom.window.setTimeout(() => feedback.classList.remove("visible"), 2000)
              },
              i(cls("fas fa-copy")),
            ),
          ),
          div(
            cls("copy-feedback"),
            child.text <-- t("copiedToClipboard"),
          ),
        ),

        // Supported Platforms
        div(
          cls("platforms-section"),
          h3(child.text <-- t("supportedPlatforms")),
          div(
            cls("platforms-icons"),
            div(
              cls("platform-icon"),
              i(cls("fab fa-linux")),
              span("Linux"),
            ),
            div(
              cls("platform-icon"),
              i(cls("fab fa-apple")),
              span("macOS"),
            ),
            div(
              cls("platform-icon", "disabled"),
              i(cls("fab fa-windows")),
              span("Windows"),
              div(cls("tooltip"), child.text <-- t("windowsNotSupported")),
            ),
          ),
        ),
      ),
      sectionTag(
        idAttr("why"),
        h2(child.text <-- t("whyTitle")),
        p(cls("highlight"), inContext(el => t("whyHighlight") --> { html => el.ref.innerHTML = html })),
        p(child.text <-- t("whyText")),
        div(
          cls("features-grid"),
          div(
            cls("feature-card"),
            i(cls("fas fa-ghost")),
            h3(child.text <-- t("feature1Title")),
            p(child.text <-- t("feature1Text")),
          ),
          div(
            cls("feature-card"),
            i(cls("fas fa-exchange-alt")),
            h3(child.text <-- t("feature2Title")),
            p(child.text <-- t("feature2Text")),
          ),
          div(
            cls("feature-card"),
            i(cls("fas fa-cloud")),
            h3(child.text <-- t("feature3Title")),
            p(child.text <-- t("feature3Text")),
          ),
        ),
      ),
      sectionTag(
        idAttr("usage"),
        h2(child.text <-- t("quickStartTitle")),
        div(
          cls("code-block"),
          h3(child.text <-- t("step1Title")),
          pre(code("first save gemini-config --artifacts \".gemini/,GEMINI.md\"")),
        ),
        div(
          cls("code-block"),
          h3(child.text <-- t("step2Title")),
          pre(code("first load gemini-config")),
        ),
        div(
          cls("code-block"),
          h3(child.text <-- t("step3Title")),
          pre(code("first swap claude-config")),
        ),
      ),
      sectionTag(
        idAttr("tech-stack"),
        h2(child.text <-- t("techStackTitle")),
        p(cls("tech-intro"), child.text <-- t("techStackIntro")),
        div(
          cls("tech-logos"),
          a(
            href("https://www.scala-lang.org/"),
            target("_blank"),
            cls("tech-logo-link"),
            img(
              src(
                "https://github.com/scala/scala-lang/blob/main/resources/img/frontpage/scala-logo-white.png?raw=true",
              ),
              alt("Scala"),
              cls("tech-logo"),
            ),
            div(
              cls("tech-desc"),
              h4("Scala"),
              p(child.text <-- t("scalaDesc")),
            ),
          ),
          a(
            href("https://scala-native.org/"),
            target("_blank"),
            cls("tech-logo-link"),
            img(
              src(
                "https://github.com/scala/scala-lang/blob/main/resources/img/frontpage/scala-logo-white.png?raw=true",
              ),
              alt("Scala Native"),
              cls("tech-logo"),
            ),
            div(
              cls("tech-desc"),
              h4("Scala Native"),
              p(child.text <-- t("scalaNativeDesc")),
            ),
          ),
        ),
        div(
          cls("benefits-grid"),
          div(
            cls("benefit-card"),
            i(cls("fas fa-rocket")),
            h4(child.text <-- t("benefit1Title")),
            p(child.text <-- t("benefit1Desc")),
          ),
          div(
            cls("benefit-card"),
            i(cls("fas fa-shield-alt")),
            h4(child.text <-- t("benefit2Title")),
            p(child.text <-- t("benefit2Desc")),
          ),
          div(
            cls("benefit-card"),
            i(cls("fas fa-brain")),
            h4(child.text <-- t("benefit3Title")),
            p(child.text <-- t("benefit3Desc")),
          ),
          div(
            cls("benefit-card"),
            i(cls("fas fa-tachometer-alt")),
            h4(child.text <-- t("benefit4Title")),
            p(child.text <-- t("benefit4Desc")),
          ),
        ),
        Footer.component,
      ),
    )
