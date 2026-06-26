import { steps } from '../data.js'

export default function Manufaktur() {
  return (
    <section className="section section--alt" id="manufaktur">
      <div className="section__head reveal">
        <span className="kicker">Manufaktur</span>
        <h2>So entsteht ein Zuckerwerk</h2>
        <p>Vier Schritte vom Klümpchen Clay zum kleinen Kunstwerk.</p>
      </div>
      <ol className="steps">
        {steps.map((s) => (
          <li className="step reveal" key={s.num}>
            <span className="step__num">{s.num}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
