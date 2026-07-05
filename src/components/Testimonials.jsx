import { useEffect, useState } from 'react'
import SplitTitle from './SplitTitle.jsx'

const TESTIMONIALS = [
  {
    quote:
      'BuildMart has been our sole cement and steel supplier for six years. Materials arrive on schedule, every time — that reliability is worth everything on a live site.',
    name: 'Rajesh Malhotra',
    role: 'Director, RM Constructions',
  },
  {
    quote:
      'Their bulk pricing on TMT steel saved us nearly 12% on our last commercial tower. Transparent billing, genuine brands, zero headaches.',
    name: 'Priya Deshmukh',
    role: 'Procurement Head, Vertex Builders',
  },
  {
    quote:
      'As a first-time home builder, I had a hundred questions. The BuildMart team guided me through every material choice and delivered right to my plot.',
    name: 'Amit Sharma',
    role: 'Homeowner, Green Valley',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000)
    return () => clearInterval(id)
  }, [])

  const t = TESTIMONIALS[index]

  return (
    <section id="testimonials" className="section section--alt testimonials">
      <div className="container">
        <div className="testimonials__head reveal">
          <SplitTitle lines={['client', 'stories']} />
        </div>

        <blockquote className="testimonial reveal" key={t.name}>
          <p className="testimonial__quote">&ldquo;{t.quote}&rdquo;</p>
          <footer>
            <cite>{t.name}</cite>
            <span>{t.role}</span>
          </footer>
        </blockquote>

        <div className="testimonials__dots reveal">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.name}
              type="button"
              className={i === index ? 'is-active' : ''}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${item.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
