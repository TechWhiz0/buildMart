import { COMPANY, whatsappLink } from '../data/company.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import SplitTitle from './SplitTitle.jsx'
import BuildScene from './BuildScene.jsx'

const SWATCHES = { sand: '#D9B27C', stone: '#B7BAB6', bricks: '#C05A32' }

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="hero">
      <div className="container hero__content">
        <div className="hero__layout">
          <div className="hero__copy">
            <SplitTitle lines={t.hero.titleLines} as="h1" className="hero__title fade-up" style={{ '--d': '0s' }} />
            <p className="hero__sub fade-up" style={{ '--d': '.15s' }}>
              {t.hero.sub}
            </p>
            <div className="hero__actions fade-up" style={{ '--d': '.3s' }}>
              <a href={COMPANY.phoneHref} className="btn btn--dark btn--lg">
                {t.hero.call} {COMPANY.phone.replace('+91 ', '')}
              </a>
              <a href={whatsappLink(t.whatsappMessage)} target="_blank" rel="noreferrer" className="btn btn--outline btn--lg hero__btn-light">
                {t.hero.whatsappQuote}
              </a>
            </div>
          </div>

          <div className="hero__scene fade-up" style={{ '--d': '.45s' }}>
            <BuildScene />
            <div className="hero__legend">
              <span className="hero__legend-title">{t.hero.legendTitle}</span>
              {t.materials.map((mat) => (
                <a key={mat.id} href="#products" className="hero__legend-item">
                  <span className="hero__legend-swatch" style={{ background: SWATCHES[mat.id] }} aria-hidden="true" />
                  {mat.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {[...Array(2)].map((_, copy) => (
            <span key={copy}>
              {t.hero.marquee}&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
