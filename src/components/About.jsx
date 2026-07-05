import { MATERIALS } from '../data/materials.js'
import SplitTitle from './SplitTitle.jsx'

const AREAS = [
  {
    title: 'Home Construction',
    desc: 'Sand for plastering, stone for foundations, and bricks for walls — everything for your house build.',
  },
  {
    title: 'Road & Paving',
    desc: 'Gitti, gravel, and crushed stone for roads, driveways, and base layers.',
  },
  {
    title: 'Boundary & Commercial',
    desc: 'Bulk brick supply and sand delivery for compound walls, shops, and commercial sites.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__top reveal">
          <SplitTitle lines={['About', 'us']} />
        </div>

        <div className="about__grid">
          <div className="about__copy reveal">
            <p>
              We are a family-run materials business in Azad Nagar, Prayagraj, supplying
              sand, stone, and bricks to builders, contractors, and homeowners across
              the city and nearby areas.
            </p>
            <p>
              With years of experience in this trade, we focus on honest rates, good
              quality stock, and on-time delivery. Whether you need one truck of sand or
              a full load of bricks, we treat every order with the same care.
            </p>
            <p>
              Call or WhatsApp us anytime during business hours — we will confirm stock,
              share the rate, and dispatch materials straight to your site.
            </p>
          </div>

          <div className="about__gallery reveal" style={{ '--d': '.12s' }}>
            {MATERIALS.map((mat) => (
              <figure key={mat.id} className="about__gallery-item">
                <img src={mat.src} alt={mat.alt} loading="lazy" />
                <figcaption>{mat.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="about__areas">
          <p className="about__areas-label reveal">What we supply for</p>
          <div className="about__areas-grid">
            {AREAS.map((area, i) => (
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
