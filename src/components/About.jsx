import { MATERIAL_IMAGES } from '../data/materials.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import SplitTitle from './SplitTitle.jsx'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__top reveal">
          <SplitTitle lines={t.about.titleLines} />
        </div>

        <div className="about__grid">
          <div className="about__copy reveal">
            {t.about.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="about__gallery reveal" style={{ '--d': '.12s' }}>
            {t.materials.map((mat) => (
              <figure key={mat.id} className="about__gallery-item">
                <img src={MATERIAL_IMAGES[mat.id].src} alt={mat.alt} loading="lazy" />
                <figcaption>{mat.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="about__areas">
          <p className="about__areas-label reveal">{t.about.areasLabel}</p>
          <div className="about__areas-grid">
            {t.about.areas.map((area, i) => (
              <article key={area.title} className="area-card reveal" style={{ '--d': `${i * 0.08}s` }}>
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
