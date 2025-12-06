package first

import com.raquo.laminar.api.L.{*, given}

object Footer:
  import Translations.translate

  def component: Element =
    footerTag(
      p(child.text <-- translate("footerText")),
      p(
        a(
          href("https://github.com/oswaldo/first"),
          child.text <-- translate("viewOnGithub"),
        ),
      ),
      p(
        child.text <-- translate("licenseNotice"),
        " ",
        a(
          href("https://github.com/oswaldo/first/blob/main/TRADEMARK.md"),
          child.text <-- translate("trademarkPolicy"),
        ),
      ),
    )
