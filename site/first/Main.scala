package first

import com.raquo.laminar.api.L.{*, given}
import org.scalajs.dom
import scala.concurrent.ExecutionContext.Implicits.global

object Main:

  def detectLanguage(): String =
    val browserLang = dom.window.navigator.language.toLowerCase
    if browserLang.startsWith("pt") then "pt-br"
    else if browserLang.startsWith("de") then "de"
    else "en"

  val languageVar = Var(detectLanguage())
  val releaseTag  = Var(Option.empty[String])

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

  // Helper to get translated text reactively
  def t(key: String): Signal[String] = languageVar.signal.map { lang =>
    Translations.all.getOrElse(lang, Translations.all("en")).getOrElse(key, s"Missing key: $key")
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
        child <-- languageVar.signal.map { currentCode =>
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
                languageVar.set(c)
                isOpen.set(false)
              },
            )
          },
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
      languageSelector,
      alphaBanner,
      headerTag(
        cls("hero"),
        h1(child.text <-- t("title")),
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
          cls("install-box"),
          code("curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh"),
          button(
            cls("copy-btn"),
            onClick --> { _ =>
              dom.window.navigator.clipboard
                .writeText("curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh")
            },
            i(cls("fas fa-copy")),
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
            i(cls("fas fa-code")),
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
      ),
      footerTag(
        p(child.text <-- t("footerText")),
        p(
          a(
            href("https://github.com/oswaldo/first"),
            child.text <-- t("viewOnGithub"),
          ),
        ),
      ),
    )
