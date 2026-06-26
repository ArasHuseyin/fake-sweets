// Hochauflösende Screenshots der Zuckerwerk-Seite (vorinstalliertes Chromium)
import { chromium } from 'playwright-core'

const EXECUTABLE =
  process.env.CHROME_BIN || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'
const URL = process.env.URL || 'http://localhost:4321/'
const OUT = './screenshots'

const shots = [
  { name: 'desktop-full', width: 1512, height: 982, scale: 2, fullPage: true },
  { name: 'desktop-hero', width: 1512, height: 982, scale: 3, fullPage: false },
  { name: 'mobile-full', width: 414, height: 896, scale: 3, fullPage: true, mobile: true },
  { name: 'mobile-hero', width: 414, height: 896, scale: 3, fullPage: false, mobile: true },
]

const browser = await chromium.launch({ executablePath: EXECUTABLE })

async function prep(page) {
  // Reveal-Elemente sichtbar schalten, damit der ganze Inhalt erscheint
  await page.addStyleTag({
    content: '.reveal{opacity:1!important;transform:none!important;}',
  })
  // Lazy-Bilder erzwingen, durchscrollen und auf vollständiges Laden warten
  await page.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      img.loading = 'eager'
    })
    await new Promise((r) => {
      let y = 0
      const t = setInterval(() => {
        window.scrollBy(0, 800)
        y += 800
        if (y >= document.body.scrollHeight) {
          clearInterval(t)
          r()
        }
      }, 50)
    })
    window.scrollTo(0, 0)
    await Promise.all(
      [...document.images].map((img) =>
        img.complete ? Promise.resolve() : img.decode().catch(() => {})
      )
    )
  })
  await page.evaluate(() => document.fonts && document.fonts.ready)
  await page.waitForTimeout(700)
}

for (const s of shots) {
  const ctx = await browser.newContext({
    viewport: { width: s.width, height: s.height },
    deviceScaleFactor: s.scale,
    isMobile: !!s.mobile,
    hasTouch: !!s.mobile,
  })
  const page = await ctx.newPage()
  await page.goto(URL, { waitUntil: 'networkidle' })
  await prep(page)
  await page.screenshot({ path: `${OUT}/${s.name}.png`, fullPage: s.fullPage })
  console.log('✓', s.name, `(${s.width}x${s.height} @${s.scale}x)`)
  await ctx.close()
}

// Open-Graph-Bild 1200x630 (Hero-Ausschnitt) für public/
const og = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 })
const ogPage = await og.newPage()
await ogPage.goto(URL, { waitUntil: 'networkidle' })
await prep(ogPage)
await ogPage.screenshot({ path: './public/og-image.png' })
console.log('✓ og-image (public/og-image.png)')
await og.close()

await browser.close()
console.log('Fertig.')
