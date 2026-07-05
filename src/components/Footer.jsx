import { COMPANY } from '../data/company.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer__top">
        <a href="#home" className="logo footer__logo">
          <span className="logo__mark" aria-hidden="true">BM</span>
          <span className="logo__text">{COMPANY.name}</span>
        </a>
      </div>

      <div className="container footer__bar">
        <p>Copyright © {new Date().getFullYear()} {COMPANY.name}. {t.footer.rights}</p>
        <p>{t.footer.tagline}</p>
      </div>
    </footer>
  )
}
