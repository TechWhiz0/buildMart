import { COMPANY, whatsappLink } from '../data/company.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import SplitTitle from './SplitTitle.jsx'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__head reveal">
          <SplitTitle lines={t.contact.titleLines} />
          <p className="contact__intro">
            {t.contact.intro}
          </p>
        </div>

        <div className="contact__info reveal">
          <div className="contact__row">
            <strong>{t.contact.call}</strong>
            <a href={COMPANY.phoneHref} className="contact__phone-link">
              {COMPANY.phone}
            </a>
          </div>
          <div className="contact__row">
            <strong>{t.contact.whatsapp}</strong>
            <a href={whatsappLink(t.whatsappMessage)} target="_blank" rel="noreferrer" className="contact__phone-link">
              {COMPANY.whatsappDisplay}
            </a>
          </div>
          <a href={`mailto:${COMPANY.email}`} className="contact__row">
            <strong>{t.contact.email}</strong>
            <span>{COMPANY.email}</span>
          </a>
          <div className="contact__row">
            <strong>{t.contact.visit}</strong>
            <span>{t.contact.address}</span>
            <span className="contact__hours">{t.contact.hours}</span>
            <a href={COMPANY.mapLink} target="_blank" rel="noreferrer" className="contact__map-link">
              {t.contact.openMaps}
            </a>
          </div>
          <a
            href={whatsappLink(t.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="btn btn--whatsapp"
          >
            {t.contact.chatWhatsApp}
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
