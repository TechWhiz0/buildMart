import { whatsappLink } from '../data/company.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import SplitTitle from './SplitTitle.jsx'

export default function Cta() {
  const { t } = useLanguage()

  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner reveal">
        <p className="cta-banner__eyebrow">{t.cta.eyebrow}</p>
        <SplitTitle lines={t.cta.titleLines} className="cta-banner__title" />
        <p className="cta-banner__sub">
          {t.cta.sub}
        </p>
        <div className="cta-banner__actions">
          <a href="#contact" className="btn btn--dark btn--lg">
            {t.cta.contactUs}
          </a>
          <a href={whatsappLink(t.whatsappMessage)} target="_blank" rel="noreferrer" className="btn btn--outline btn--lg">
            {t.cta.getQuote}
          </a>
        </div>
      </div>
    </section>
  )
}
