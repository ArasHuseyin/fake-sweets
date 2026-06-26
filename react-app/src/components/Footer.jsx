import { navLinks } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="brand__mark">🍬</span>
          <span className="brand__name">Zuckerwerk</span>
          <p>Handgemachte Fake-Süßigkeiten aus Polymer Clay.</p>
        </div>
        <nav className="footer__nav" aria-label="Footer">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} Zuckerwerk · Mit 🤍 von Hand gemacht. Nicht zum Verzehr geeignet.
      </p>
    </footer>
  )
}
