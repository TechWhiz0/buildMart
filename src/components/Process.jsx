import { useEffect, useState } from 'react'
import SplitTitle from './SplitTitle.jsx'

const STEPS = [
  {
    title: 'Call or WhatsApp',
    desc: 'Tell us what you need - sand, stone, or bricks - along with the quantity (trucks, cft, or number of bricks) and your delivery location in Prayagraj or nearby.',
  },
  {
    title: 'Rate & Stock Check',
    desc: 'We confirm availability at our yard and share the rate per truck, per cft, or per thousand bricks. No hidden charges - you get a clear price before ordering.',
  },
  {
    title: 'Loading & Dispatch',
    desc: 'Once you confirm, materials are loaded at our Azad Nagar yard and dispatched to your site on the agreed date and time.',
  },
  {
    title: 'Delivery & Payment',
    desc: 'Materials are delivered and unloaded at your location. Payment is settled as agreed - cash or UPI - and repeat orders are always welcome.',
  },
]

export default function Process() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = (i) => setIndex((i + STEPS.length) % STEPS.length)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % STEPS.length), 5000)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="process__head reveal">
          <SplitTitle lines={['our', 'process']} />
          <p className="process__intro">
            Ordering sand, stone, or bricks is simple — call us, get a rate, and
            we deliver straight to your site.
          </p>
        </div>

        <div
          className="process__carousel reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="process__viewport">
            <div
              className="process__track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {STEPS.map((step, i) => (
                <article key={step.title} className="process__slide">
                  <span className="process__slide-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="process__slide-title">{step.title}</h3>
                  <p className="process__slide-desc">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="process__progress" aria-hidden="true">
            {STEPS.map((step, i) => (
              <span
                key={step.title}
                className={`process__progress-bar ${i === index ? 'is-active' : ''} ${i < index ? 'is-done' : ''}`}
              />
            ))}
          </div>

          <div className="process__controls">
            <button type="button" onClick={() => go(index - 1)} aria-label="Previous step">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>

            <div className="process__dots">
              {STEPS.map((step, i) => (
                <button
                  key={step.title}
                  type="button"
                  className={i === index ? 'is-active' : ''}
                  onClick={() => go(i)}
                  aria-label={`Go to step ${i + 1}: ${step.title}`}
                />
              ))}
            </div>

            <button type="button" onClick={() => go(index + 1)} aria-label="Next step">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
