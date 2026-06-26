# 🍬 Zuckerwerk

Website für **Zuckerwerk** – handgemachte Fake-Süßigkeiten, Obst und Backwaren
aus Polymer Clay. Täuschend echte Miniaturen als Schlüsselanhänger, Deko und
Sammlerstücke, von Hand modelliert.

Gebaut mit **[Astro](https://astro.build)** – schnelle, statisch generierte
Seite mit optimierten Bildern und sauberem SEO-Setup.

## Stack

- **Astro 4** – komponentenbasiert, gibt statisches HTML aus (top für SEO & Speed)
- **`astro:assets`** – automatische Bildoptimierung (WebP, responsive Größen)
- **`@astrojs/sitemap`** – Sitemap-Generierung
- **ESLint + Prettier** – Linting & Formatierung

## Projektstruktur

```
src/
  assets/products/   echte Produktfotos (werden optimiert)
  components/        Nav, Hero, Products, Gallery, Story, Manufaktur, Contact, Footer
  data/content.js    zentrale Inhalte (Texte, Kategorien, Navigation)
  layouts/Layout.astro  <head>, Meta/OG/Twitter, JSON-LD
  pages/index.astro  Startseite + Client-Script
  styles/global.css  pastelliges "Candy Shop"-Design
public/              favicon.svg, robots.txt
```

## Entwicklung

```bash
npm install
npm run dev       # Dev-Server auf http://localhost:4321
npm run build     # Produktions-Build -> dist/
npm run preview   # Build lokal ansehen
npm run lint      # ESLint + Prettier-Check
npm run format    # Prettier-Autoformat
```

## Screenshots erzeugen

```bash
npm run build && npm run preview -- --port 4321 &
node screenshot.mjs
```

## Offene To-dos (bewusst später)

- ⚖️ Impressum & Datenschutzerklärung (vor dem öffentlichen Launch Pflicht)
- ✉️ Kontaktformular an echten Dienst anbinden (z. B. Formspree)
- 🔗 Echte Instagram-/TikTok-Links & finale Domain eintragen
- 🛒 Verkauf anbinden (Etsy / Shopify)
