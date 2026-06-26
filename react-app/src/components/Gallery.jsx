import { gallery } from '../data.js'

export default function Gallery() {
  return (
    <section className="section section--alt" id="galerie">
      <div className="section__head reveal">
        <span className="kicker">Galerie</span>
        <h2>Frisch aus der Werkstatt</h2>
        <p>Ein Blick in unsere Auslage – jedes Stück handmodelliert und liebevoll lackiert.</p>
      </div>
      <div className="gallery">
        {gallery.map((g) => (
          <figure className="gallery__item reveal" key={g.title} style={{ '--c1': g.c1, '--c2': g.c2 }}>
            <div className="gallery__visual">{g.emoji}</div>
            <figcaption>
              <strong>{g.title}</strong>
              <span>{g.sub}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="gallery__note reveal">📸 Echte Fotos folgen bald – hier entsteht unsere wachsende Auslage.</p>
    </section>
  )
}
