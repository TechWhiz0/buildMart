import { useRef } from 'react'
import SplitTitle from './SplitTitle.jsx'

const PROJECTS = [
  {
    title: 'Skyline Residences',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Metro Corporate Park',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Riverside Expressway',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Green Valley Villas',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80',
  },
]

export default function Projects() {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: 'smooth' })
  }

  return (
    <section id="projects" className="section projects-sec">
      <div className="container">
        <div className="projects__head reveal">
          <SplitTitle lines={['past', 'projects']} />
          <p className="projects__intro">
            From family homes to city infrastructure — materials from our yards are
            built into landmarks across the region.
          </p>
        </div>
      </div>

      <div className="projects__carousel reveal">
        <div className="projects__track" ref={trackRef}>
          {PROJECTS.map((p, i) => (
            <figure key={p.title} className="project-slide">
              <div className="project-slide__media">
                <img src={p.image} alt={`${p.title} — ${p.category}`} loading="lazy" />
                <span className="project-slide__num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <figcaption>
                <span className="project-slide__cat">{p.category}</span>
                <span className="project-slide__title">{p.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="container projects__footer reveal">
        <div className="projects__controls">
          <button type="button" onClick={() => scroll(-1)} aria-label="Previous project">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          </button>
          <button type="button" onClick={() => scroll(1)} aria-label="Next project">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>
        <a href="#contact" className="btn btn--outline">Explore Our Supply</a>
      </div>
    </section>
  )
}
