package first

import com.raquo.laminar.api.L.{*, given}
import org.scalajs.dom

object Main {

  // 1. Data Structure for translations
  val translations = Map(
    "en" -> Map(
      "title" -> "first",
      "subtitle" -> "Full Context Swapping for Developers",
      "description" -> "The tool that should have existed since the beginning of computing, allowing full context swapping for development environments and tools, especially AI coding assistants.",
      "button" -> "Learn More on GitHub"
    ),
    "pt-br" -> Map(
      "title" -> "first",
      "subtitle" -> "Troca de Contexto Completa para Desenvolvedores",
      "description" -> "A ferramenta que deveria ter existido desde o início da computação, permitindo a troca completa de contexto para ambientes de desenvolvimento e ferramentas, especialmente assistentes de codificação de IA.",
      "button" -> "Saiba Mais no GitHub"
    ),
    "de" -> Map(
      "title" -> "first",
      "subtitle" -> "Vollständiger Kontextwechsel für Entwickler",
      "description" -> "Das Werkzeug, das seit den Anfängen der Informatik hätte existieren sollen und einen vollständigen Kontextwechsel für Entwicklungsumgebungen und -werkzeuge, insbesondere KI-Codierungsassistenten, ermöglicht.",
      "button" -> "Mehr auf GitHub erfahren"
    )
  )

  // 2. Language Detection
  def detectLanguage(): String = {
    val browserLang = dom.window.navigator.language.toLowerCase
    if (browserLang.startsWith("pt")) "pt-br"
    else if (browserLang.startsWith("de")) "de"
    else "en"
  }

  // 3. State Management
  val languageVar = Var(detectLanguage())

  def main(args: Array[String]): Unit = {
    lazy val appContainer = dom.document.querySelector("#appContainer")
    renderOnDomContentLoaded(appContainer, appElement)
  }

  // Helper to get translated text reactively
  def t(key: String): Signal[String] = languageVar.signal.map { lang =>
    translations
      .getOrElse(lang, translations("en"))
      .getOrElse(key, s"Missing key: $key")
  }

  // 4. UI Components
  val languageSelector: Element =
    div(
      cls("language-selector"),
      label("Language: "),
      select(
        value <-- languageVar.signal,
        onChange.mapToValue --> languageVar.writer,
        option(value("en"), "English"),
        option(value("pt-br"), "Português (BR)"),
        option(value("de"), "Deutsch")
      )
    )

  val appElement: Element =
    div(
      idAttr("app"),
      languageSelector,
      h1(child.text <-- t("title")),
      p(child.text <-- t("subtitle")),
      p(child.text <-- t("description")),
      a(
        href("https://github.com/oswaldo/first"),
        target("_blank"),
        rel("noopener noreferrer"),
        cls("button"),
        child.text <-- t("button")
      )
    )
}
