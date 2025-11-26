package first

import com.raquo.laminar.api.L.{*, given}
import org.scalajs.dom

object Main:

  // 1. Data Structure for translations
  val translations = Map(
    "en" -> Map(
      "title"   -> "first",
      "tagline" -> "Full Context Swapping for Developer Workflows",
      "description" -> "A command-line tool that enables seamless switching between different development contexts and AI assistant configurations, keeping your projects clean from tool-specific clutter.",
      "whyTitle"     -> "Why first?",
      "whyHighlight" -> "Your repository is for <em>your</em> code, not your tools' config files.",
      "whyText" -> "Modern development has normalized an uncomfortable reality: every tool we adopt—IDEs, linters, CI systems, and now AI coding assistants—leaves its own debris in our repositories. When you want to try a different AI assistant, you shouldn't need to commit new config files to your repository.",
      "feature1Title"   -> "Non-invasive",
      "feature1Text"    -> "AI assistants and tools store their configs outside your repo.",
      "feature2Title"   -> "Context Swapping",
      "feature2Text"    -> "Switch entire development environments with one command.",
      "feature3Title"   -> "Remote Contexts",
      "feature3Text"    -> "Share team configurations via HTTP/HTTPS or GitHub.",
      "quickStartTitle" -> "Quick Start",
      "step1Title"      -> "Save your current context",
      "step2Title"      -> "Load a saved context",
      "step3Title"      -> "Swap to a different setup",
      "techStackTitle"  -> "Tech Stack",
      "techStackText"   -> "Built with Scala Native for near-instant startup times and zero JVM overhead.",
      "footerText"      -> "Built with ❤️ using Scala Native and late-night coding sessions.",
      "viewOnGithub"    -> "View on GitHub",
    ),
    "pt-br" -> Map(
      "title"   -> "first",
      "tagline" -> "Troca Completa de Contexto para Fluxos de Trabalho de Desenvolvedores",
      "description" -> "Uma ferramenta de linha de comando que permite a troca perfeita entre diferentes contextos de desenvolvimento e configurações de assistentes de IA, mantendo seus projetos limpos de arquivos de configuração de ferramentas.",
      "whyTitle" -> "Por que first?",
      "whyHighlight" -> "Seu repositório é para o <em>seu</em> código, não para arquivos de configuração de ferramentas.",
      "whyText" -> "O desenvolvimento moderno normalizou uma realidade desconfortável: cada ferramenta que adotamos—IDEs, linters, sistemas de CI e agora assistentes de codificação de IA—deixa seus próprios detritos em nossos repositórios. Quando você quer experimentar um assistente de IA diferente, não deveria precisar commitar novos arquivos de configuração em seu repositório.",
      "feature1Title"   -> "Não invasivo",
      "feature1Text"    -> "Assistentes de IA e ferramentas armazenam suas configurações fora do seu repositório.",
      "feature2Title"   -> "Troca de Contexto",
      "feature2Text"    -> "Troque ambientes de desenvolvimento inteiros com um comando.",
      "feature3Title"   -> "Contextos Remotos",
      "feature3Text"    -> "Compartilhe configurações de equipe via HTTP/HTTPS ou GitHub.",
      "quickStartTitle" -> "Início Rápido",
      "step1Title"      -> "Salve seu contexto atual",
      "step2Title"      -> "Carregue um contexto salvo",
      "step3Title"      -> "Troque para uma configuração diferente",
      "techStackTitle"  -> "Tech Stack",
      "techStackText" -> "Construído com Scala Native para tempos de inicialização quase instantâneos e zero overhead da JVM.",
      "footerText"   -> "Construído com ❤️ usando Scala Native e sessões de codificação tarde da noite.",
      "viewOnGithub" -> "Ver no GitHub",
    ),
    "de" -> Map(
      "title"   -> "first",
      "tagline" -> "Vollständiger Kontextwechsel für Entwickler-Workflows",
      "description" -> "Ein Befehlszeilen-Tool, das den nahtlosen Wechsel zwischen verschiedenen Entwicklungskontexten und KI-Assistenten-Konfigurationen ermöglicht und Ihre Projekte frei von werkzeugspezifischem Ballast hält.",
      "whyTitle"     -> "Warum first?",
      "whyHighlight" -> "Ihr Repository ist für <em>Ihren</em> Code, nicht für Konfigurationsdateien von Tools.",
      "whyText" -> "Die moderne Entwicklung hat eine unbequeme Realität normalisiert: Jedes Tool, das wir einführen – IDEs, Linters, CI-Systeme und jetzt KI-Coding-Assistenten – hinterlässt seine eigenen Spuren in unseren Repositories. Wenn Sie einen anderen KI-Assistenten ausprobieren möchten, sollten Sie keine neuen Konfigurationsdateien in Ihr Repository committen müssen.",
      "feature1Title"   -> "Nicht-invasiv",
      "feature1Text"    -> "KI-Assistenten und Tools speichern ihre Konfigurationen außerhalb Ihres Repos.",
      "feature2Title"   -> "Kontextwechsel",
      "feature2Text"    -> "Wechseln Sie ganze Entwicklungsumgebungen mit einem Befehl.",
      "feature3Title"   -> "Remote-Kontexte",
      "feature3Text"    -> "Teilen Sie Teamkonfigurationen über HTTP/HTTPS oder GitHub.",
      "quickStartTitle" -> "Schnellstart",
      "step1Title"      -> "Speichern Sie Ihren aktuellen Kontext",
      "step2Title"      -> "Laden Sie einen gespeicherten Kontext",
      "step3Title"      -> "Wechseln Sie zu einem anderen Setup",
      "techStackTitle"  -> "Tech Stack",
      "techStackText"   -> "Erstellt mit Scala Native für nahezu sofortige Startzeiten und null JVM-Overhead.",
      "footerText"      -> "Erstellt mit ❤️ unter Verwendung von Scala Native und nächtlichen Coding-Sessions.",
      "viewOnGithub"    -> "Auf GitHub ansehen",
    ),
  )

  // 2. Language Detection
  def detectLanguage(): String =
    val browserLang = dom.window.navigator.language.toLowerCase
    if browserLang.startsWith("pt") then "pt-br"
    else if browserLang.startsWith("de") then "de"
    else "en"

  // 3. State Management
  val languageVar = Var(detectLanguage())

  def main(args: Array[String]): Unit =
    lazy val appContainer = dom.document.querySelector("#appContainer")
    renderOnDomContentLoaded(appContainer, appElement)

  // Helper to get translated text reactively
  def t(key: String): Signal[String] = languageVar.signal.map { lang =>
    translations.getOrElse(lang, translations("en")).getOrElse(key, s"Missing key: $key")
  }

  // 4. UI Components
  val languages = List(
    ("en", "English", "🇺🇸"),
    ("pt-br", "Português (BR)", "🇧🇷"),
    ("de", "Deutsch", "🇩🇪"),
  )

  val languageSelector: Element =
    val isOpen = Var(false)
    div(
      cls("language-selector"),
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
              onClick.mapTo(code) --> { c =>
                languageVar.set(c)
                isOpen.set(false)
              },
            )
          },
        ),
      ),
    )

  val appElement: Element =
    div(
      cls("container"),
      languageSelector,
      headerTag(
        cls("hero"),
        h1(child.text <-- t("title")),
        p(cls("tagline"), child.text <-- t("tagline")),
        p(cls("description"), child.text <-- t("description")),
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
        p(child.text <-- t("techStackText")),
        ul(
          cls("tech-list"),
          li("Scala 3.3.4"),
          li("Scala Native 0.5.9"),
          li("Decline (CLI)"),
          li("Sttp (HTTP)"),
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
