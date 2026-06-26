export default function Story() {
  return (
    <section className="section" id="story">
      <div className="story">
        <div className="story__art reveal" aria-hidden="true">
          {['🍰', '🍡', '🍬', '🥐'].map((e) => (
            <div className="story__bubble" key={e}>{e}</div>
          ))}
        </div>
        <div className="story__text reveal">
          <span className="kicker">Über uns</span>
          <h2>Zwei Hände, eine Leidenschaft – und ganz viel Knete</h2>
          <p>
            Zuckerwerk ist das gemeinsame Herzensprojekt von uns beiden. Aus der Liebe
            zu Miniaturen, Farben und süßen Dingen ist eine kleine Manufaktur entstanden,
            in der wir täuschend echte Süßigkeiten aus Polymer Clay erschaffen.
          </p>
          <p>
            Was als gemütliches Hobby am Küchentisch begann, wird jetzt zu unserem
            gemeinsamen Business. Jedes Teil entsteht von Hand: geformt, gebacken,
            bemalt und versiegelt – ohne Gussformen aus der Massenproduktion.
          </p>
          <div className="stats">
            <div className="stat"><strong>100 %</strong><span>handgemacht</span></div>
            <div className="stat"><strong>0</strong><span>Stück gleichen sich</span></div>
            <div className="stat"><strong>∞</strong><span>Liebe zum Detail</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
