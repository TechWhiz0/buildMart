import Counter from './Counter.jsx'

const icon = (paths) => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {paths}
  </svg>
)

const FEATURES = [
  {
    title: 'High-Quality Materials',
    desc: 'Every batch is ISI-certified and lab-tested before it reaches your site. No compromises, ever.',
    icon: icon(<><path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" /><path d="M9 12l2 2 4-4" /></>),
    stat: { end: 100, suffix: '%', label: 'Certified Stock' },
  },
  {
    title: 'Competitive Pricing',
    desc: 'Direct manufacturer partnerships mean wholesale rates and transparent, no-surprise billing.',
    icon: icon(<><path d="M20.59 13.41L11 3.83A2 2 0 0 0 9.59 3.24H4a1 1 0 0 0-1 1v5.59c0 .53.21 1.04.59 1.41l9.58 9.59a2 2 0 0 0 2.83 0l4.59-4.59a2 2 0 0 0 0-2.83z" /><circle cx="7.5" cy="7.5" r="1.2" /></>),
    stat: { end: 15, suffix: '%', label: 'Avg. Savings' },
  },
  {
    title: 'On-Time Delivery',
    desc: 'Our own fleet and live dispatch tracking keep your project schedule exactly on track.',
    icon: icon(<><path d="M1 8h13v9H1z" /><path d="M14 11h4l3 3v3h-7z" /><circle cx="5.5" cy="19" r="1.8" /><circle cx="17.5" cy="19" r="1.8" /></>),
    stat: { end: 98, suffix: '%', label: 'On-Time Rate' },
  },
  {
    title: 'Trusted by Contractors',
    desc: 'Long-term supply partnerships with builders and contractors across residential and commercial projects.',
    icon: icon(<><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20c.8-3.4 3.4-5 6.5-5s5.7 1.6 6.5 5" /><path d="M16.5 4.6a3.2 3.2 0 0 1 0 6.8M18.5 15.3c1.7.8 2.7 2.3 3 4.7" /></>),
    stat: { end: 850, suffix: '+', label: 'Active Partners' },
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="section__head reveal">
          <p className="section__eyebrow">The BuildMart Advantage</p>
          <h2 className="section__title">Why <span className="accent">Choose Us</span></h2>
          <p className="section__sub">
            We're not just a supplier — we're the supply chain partner your project
            depends on, day after day.
          </p>
        </div>

        <div className="why-us__grid">
          {FEATURES.map((f, i) => (
            <article key={f.title} className="feature-card glass reveal" style={{ '--d': `${i * 0.1}s` }}>
              <div className="feature-card__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <div className="feature-card__stat">
                <Counter end={f.stat.end} suffix={f.stat.suffix} duration={1800} />
                <span>{f.stat.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
