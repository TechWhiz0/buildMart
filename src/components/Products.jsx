import { whatsappLink } from '../data/company.js'
import { MATERIALS } from '../data/materials.js'
import SplitTitle from './SplitTitle.jsx'

export default function Products() {
  return (
    <section id="products" className="section section--alt products">
      <div className="container">
        <div className="products__head reveal">
          <SplitTitle lines={['our', 'materials']} />
          <p className="products__intro">
            We supply sand, stone, and bricks for every kind of build — from home
            construction to road and boundary work across Prayagraj and nearby areas.
          </p>
        </div>

        <div className="products__grid products__grid--three">
          {MATERIALS.map((p, i) => (
            <article key={p.id} className="product-card reveal" style={{ '--d': `${i * 0.07}s` }}>
              <div className="product-card__media">
                <img src={p.src} alt={p.alt} loading="lazy" />
              </div>
              <div className="product-card__body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a
                  href={whatsappLink(`Hi, I'd like a quote for ${p.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="product-card__link"
                >
                  Request price
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
