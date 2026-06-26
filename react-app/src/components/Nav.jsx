import { useState } from 'react'
import { navLinks } from '../data.js'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav" id="top">
      <div className="nav__inner">
        <a className="brand" href="#top" onClick={close}>
          <span className="brand__mark">🍬</span>
          <span className="brand__name">Zuckerwerk</span>
        </a>
        <nav className={`nav__links${open ? ' is-open' : ''}`} aria-label="Hauptnavigation">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a href="#kontakt" className="nav__cta" onClick={close}>Kontakt</a>
        </nav>
        <button
          className="nav__burger"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
