import { useState } from 'react'

export default function Contact() {
  const [hint, setHint] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    if (!form.checkValidity()) {
      setHint('Bitte fülle alle Felder aus. 🧁')
      return
    }
    const name = form.elements.name.value.trim()
    setHint(`Danke ${name}! Deine Nachricht ist angekommen – wir melden uns bald. 🍬`)
    form.reset()
  }

  return (
    <section className="section" id="kontakt">
      <div className="contact reveal">
        <div className="contact__text">
          <span className="kicker">Sag Hallo</span>
          <h2>Lust auf ein süßes Unikat?</h2>
          <p>
            Wir starten gerade durch! Schreib uns für Bestellungen, Wunschanfertigungen
            oder einfach, um Teil unserer süßen Reise zu werden.
          </p>
          <div className="contact__socials">
            <a href="#" className="chip">📷 Instagram</a>
            <a href="#" className="chip">🎵 TikTok</a>
            <a href="mailto:hallo@zuckerwerk.shop" className="chip">✉️ E-Mail</a>
          </div>
        </div>
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <label>
            Dein Name
            <input type="text" name="name" placeholder="Wie heißt du?" required />
          </label>
          <label>
            E-Mail
            <input type="email" name="email" placeholder="du@beispiel.de" required />
          </label>
          <label>
            Deine Nachricht
            <textarea name="message" rows="4" placeholder="Erzähl uns von deinem Wunsch …" required></textarea>
          </label>
          <button type="submit" className="btn btn--primary">Absenden 🍭</button>
          <p className="contact__hint" role="status">{hint}</p>
        </form>
      </div>
    </section>
  )
}
