import { whatsappLink } from '../data/company.js'
import { MATERIAL_IMAGES } from '../data/materials.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import SplitTitle from './SplitTitle.jsx'

export default function Products() {
  const { t } = useLanguage()

  return (
    <section id="products" className="section section--alt products">
      <div className="container">
        <div className="products__head reveal">
          <SplitTitle lines={t.products.titleLines} />
          <p className="products__intro">
            {t.products.intro}
          </p>
        </div>

        <div className="products__grid products__grid--three">
          {t.materials.map((p, i) => (
            <article key={p.id} className="product-card reveal" style={{ '--d': `${i * 0.07}s` }}>
              <div className="product-card__media">
                <img src={MATERIAL_IMAGES[p.id].src} alt={p.alt} loading="lazy" />
              </div>
              <div className="product-card__body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a
                  href={whatsappLink(t.products.quoteFor(p.title))}
                  target="_blank"
                  rel="noreferrer"
                  className="product-card__link"
                >
                  {t.products.requestPrice}
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
