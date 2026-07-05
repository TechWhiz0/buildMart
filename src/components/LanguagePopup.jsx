import { useLanguage } from '../i18n/LanguageContext.jsx'

/** First-visit language chooser. Hidden once a language is saved. */
export default function LanguagePopup() {
  const { lang, setLang } = useLanguage()

  if (lang) return null

  return (
    <div className="lang-modal" role="dialog" aria-modal="true" aria-label="Choose language / भाषा चुनें">
      <div className="lang-modal__card">
        <span className="lang-modal__mark" aria-hidden="true">BM</span>
        <h2 className="lang-modal__title">अपनी भाषा चुनें</h2>
        <p className="lang-modal__sub">Choose your language</p>
        <div className="lang-modal__actions">
          <button type="button" className="btn btn--dark btn--lg" onClick={() => setLang('hi')}>
            हिंदी
          </button>
          <button type="button" className="btn btn--lg lang-modal__btn-outline" onClick={() => setLang('en')}>
            English
          </button>
        </div>
      </div>
    </div>
  )
}
