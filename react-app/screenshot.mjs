// Screenshot-Skript für die Zuckerwerk React-App (nutzt vorinstalliertes Chromium)
import { chromium } from 'playwright-core'

const EXECUTABLE = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'
const URL = process.env.URL || 'http://localhost:4173/'
const OUT = '../screenshots'

const shots = [
  { name: 'desktop-full', width: 1440, height: 900, fullPage: true },
  { name: 'desktop-hero', width: 1440, height: 900, fullPage: false },
  { name: 'mobile-full', width: 390, height: 844, fullPage: true, mobile: true },
  { name: 'mobile-hero', width: 390, height: 844, fullPage: false, mobile: true },
]

const browser = await chromium.launch({ executablePath: EXECUTABLE })

for (const s of shots) {
  const ctx = await browser.newContext({
    viewport: { width: s.width, height: s.height },
    deviceScaleFactor: 2,
    isMobile: !!s.mobile,
    hasTouch: !!s.mobile,
  })
  const page = await ctx.newPage()
  await page.goto(URL, { waitUntil: 'networkidle' })
  // Alle Reveal-Elemente sichtbar schalten, damit der ganze Inhalt erscheint
  await page.addStyleTag({
    content: '.reveal{opacity:1!important;transform:none!important;}',
  })
  // Webfonts laden lassen
  await page.evaluate(() => document.fonts && document.fonts.ready)
  await page.waitForTimeout(700)
  await page.screenshot({ path: `${OUT}/${s.name}.png`, fullPage: s.fullPage })
  console.log('✓', s.name)
  await ctx.close()
}

await browser.close()
console.log('Fertig.')
