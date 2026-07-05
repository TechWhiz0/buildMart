import { COMPANY } from '../data/company.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <a href="#home" className="logo footer__logo">
          <span className="logo__mark" aria-hidden="true">BM</span>
          <span className="logo__text">{COMPANY.name}</span>
        </a>
      </div>

      <div className="container footer__bar">
        <p>Copyright © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        <p>{COMPANY.tagline}</p>
      </div>
    </footer>
  )
}
