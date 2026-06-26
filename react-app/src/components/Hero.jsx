import { marquee } from '../data.js'

const treats = [
  ['treat--donut', '🍩'], ['treat--cake', '🍰'], ['treat--candy', '🍬'],
  ['treat--straw', '🍓'], ['treat--croissant', '🥐'], ['treat--bear', '🧸'],
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__blob hero__blob--1"></div>
      <div className="hero__blob hero__blob--2"></div>
      <div className="hero__inner">
        <div className="hero__text">
          <span className="hero__eyebrow">Handgemacht · Polymer Clay · Unikate</span>
          <h1>Süßigkeiten, die man nicht essen darf.</h1>
          <p className="hero__lead">
            Täuschend echte Miniatur-Süßigkeiten, Obst und Backwaren – von Hand aus
            Polymer Clay modelliert. Jedes Stück ein kleines Kunstwerk zum Sammeln,
            Verschenken und Anschmiegen.
          </p>
          <div className="hero__actions">
            <a href="#produkte" className="btn btn--primary">Kollektion entdecken</a>
            <a href="#story" className="btn btn--ghost">Unsere Geschichte</a>
          </div>
          <div className="hero__badges">
            <span>🌱 Vegan &amp; tierfrei</span>
            <span>✋ 100 % handgefertigt</span>
            <span>🎁 Jedes Stück ein Unikat</span>
          </div>
        </div>
        <div className="hero__art" aria-hidden="true">
          {treats.map(([cls, e]) => (
            <div key={cls} className={`treat ${cls}`}>{e}</div>
          ))}
          <div className="hero__plate">🫙</div>
        </div>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
