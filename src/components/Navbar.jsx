import { useEffect, useState } from 'react'
import { COMPANY } from '../data/company.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--solid' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="logo" aria-label={`${COMPANY.name} — home`}>
          <span className="logo__mark" aria-hidden="true">BM</span>
          <span className="logo__text">{COMPANY.name}</span>
        </a>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {t.nav.links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--dark navbar__cta navbar__cta--mobile" onClick={() => setOpen(false)}>
            {t.nav.getQuote}
          </a>
        </nav>

        <button
          type="button"
          className="lang-toggle"
          onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
          aria-label={lang === 'hi' ? 'Switch to English' : 'हिंदी में बदलें'}
        >
          {lang === 'hi' ? 'EN' : 'हिं'}
        </button>

        <a href="#contact" className="btn btn--dark navbar__cta">
          {t.nav.getQuote}
        </a>

        <button
          className={`navbar__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
