import { COMPANY, whatsappLink } from '../data/company.js'
import SplitTitle from './SplitTitle.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__head reveal">
          <SplitTitle lines={["Let's", 'Connect']} />
          <p className="contact__intro">
            Call, WhatsApp, or email us for rates on sand, stone, and bricks — we
            respond quickly during business hours.
          </p>
        </div>

        <div className="contact__info reveal">
          <div className="contact__row">
            <strong>Call</strong>
            <a href={COMPANY.phoneHref} className="contact__phone-link">
              {COMPANY.phone}
            </a>
          </div>
          <div className="contact__row">
            <strong>WhatsApp</strong>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="contact__phone-link">
              {COMPANY.whatsappDisplay}
            </a>
          </div>
          <a href={`mailto:${COMPANY.email}`} className="contact__row">
            <strong>Email</strong>
            <span>{COMPANY.email}</span>
          </a>
          <div className="contact__row">
            <strong>Visit</strong>
            <span>{COMPANY.address}</span>
            <span className="contact__hours">{COMPANY.hours}</span>
            <a href={COMPANY.mapLink} target="_blank" rel="noreferrer" className="contact__map-link">
              Open in Google Maps
            </a>
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="btn btn--whatsapp"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact__map reveal">
          <iframe
            src={COMPANY.mapEmbed}
            title="Business location on Google Maps"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
