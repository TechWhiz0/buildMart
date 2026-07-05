import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import SplitTitle from './SplitTitle.jsx'

export default function Process() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const { t } = useLanguage()

  const steps = t.process.steps
  const go = (i) => setIndex((i + steps.length) % steps.length)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % steps.length), 5000)
    return () => clearInterval(id)
  }, [paused, steps.length])

  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="process__head reveal">
          <SplitTitle lines={t.process.titleLines} />
          <p className="process__intro">
            {t.process.intro}
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
              {steps.map((step, i) => (
                <article key={i} className="process__slide">
                  <span className="process__slide-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="process__slide-title">{step.title}</h3>
                  <p className="process__slide-desc">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="process__progress" aria-hidden="true">
            {steps.map((step, i) => (
              <span
                key={i}
                className={`process__progress-bar ${i === index ? 'is-active' : ''} ${i < index ? 'is-done' : ''}`}
              />
            ))}
          </div>

          <div className="process__controls">
            <button type="button" onClick={() => go(index - 1)} aria-label={t.process.prevStep}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>

            <div className="process__dots">
              {steps.map((step, i) => (
                <button
                  key={i}
                  type="button"
                  className={i === index ? 'is-active' : ''}
                  onClick={() => go(i)}
                  aria-label={`${i + 1}: ${step.title}`}
                />
              ))}
            </div>

            <button type="button" onClick={() => go(index + 1)} aria-label={t.process.nextStep}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
