import { whatsappLink } from '../data/company.js'
import SplitTitle from './SplitTitle.jsx'

export default function Cta() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner reveal">
        <p className="cta-banner__eyebrow">Prayagraj supply</p>
        <SplitTitle lines={['Need Sand,', 'Stone or Bricks?']} className="cta-banner__title" />
        <p className="cta-banner__sub">
          Call us for today&apos;s rate and delivery timing. We supply directly from
          our yard in Azad Nagar to your site.
        </p>
        <div className="cta-banner__actions">
          <a href="#contact" className="btn btn--dark btn--lg">
            Contact Us
          </a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn--outline btn--lg">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  )
}
