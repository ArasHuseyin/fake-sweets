import { categories } from '../data.js'

export default function Products() {
  return (
    <section className="section" id="produkte">
      <div className="section__head reveal">
        <span className="kicker">Die Kollektion</span>
        <h2>Drei kleine Welten zum Verlieben</h2>
        <p>Von der Konditorei bis zum Obstkorb – alles in Miniatur, alles von Hand geformt.</p>
      </div>
      <div className="cards">
        {categories.map((c) => (
          <article className="card reveal" key={c.title}>
            <div className="card__emoji">{c.emoji}</div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <ul className="card__list">
              {c.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
