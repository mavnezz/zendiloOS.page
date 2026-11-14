// Builds the static site: the home page and the page of features in detail,
// one of each per language, from src/page.mjs and the texts in src/i18n,
// plus sitemap.xml and robots.txt. No dependencies:
//
//   node build.mjs
//
// The output is committed; GitHub Pages serves the repository as it is.
// SITE_URL is where the site lives, for canonical links, the sitemap and
// the preview image of shared links.
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderHome, renderFeatures } from './src/page.mjs'
import en from './src/i18n/en.mjs'
import de from './src/i18n/de.mjs'

const here = path.dirname(fileURLToPath(import.meta.url))
const site = (process.env.SITE_URL ?? fs.readFileSync(path.join(here, 'SITE_URL'), 'utf8').trim()).replace(/\/?$/, '/')

const project = {
  repo: 'https://github.com/mavnezz/zendiloOS',
  api: 'https://api.github.com/repos/mavnezz/zendiloOS/releases/latest',
  catalog: 'https://github.com/mavnezz/zendiloOS.community.applications',
  // Only stable releases carry the ISOs, under the same names every time;
  // arm64's since 0.5.0.
  iso: 'https://github.com/mavnezz/zendiloOS/releases/latest/download/zendiloos-amd64-netinst.iso',
  isoArm64: 'https://github.com/mavnezz/zendiloOS/releases/latest/download/zendiloos-arm64-netinst.iso',
  // The test release beside the stable one, while there is one: the hero
  // points to it and its ISOs, and what only it has carries a badge. Set it
  // to null once that version is out as a stable release, and the pointer,
  // the badges and what the texts say only of it go.
  next: null,
  // A page with the provider's details (Impressum), if there is one.
  imprint: process.env.IMPRINT_URL ?? '',
}

// Width and height of a WebP image, for the img tags (no layout shift).
function webpSize(file) {
  const b = fs.readFileSync(file)
  const chunk = b.toString('ascii', 12, 16)
  if (chunk === 'VP8X') return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)]
  if (chunk === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff]
  if (chunk === 'VP8L') {
    const bits = b.readUInt32LE(21)
    return [1 + (bits & 0x3fff), 1 + ((bits >> 14) & 0x3fff)]
  }
  throw new Error(`${file}: not a WebP image`)
}

const images = {}
for (const file of fs.readdirSync(path.join(here, 'assets/img'))) {
  if (file.endsWith('-light.webp')) images[file.slice(0, -'-light.webp'.length)] = webpSize(path.join(here, 'assets/img', file))
}

const languages = [
  { t: en, dir: '' },
  { t: de, dir: 'de/' },
]
// Each page in every language; the features page sits below its home page.
const pages = [
  { name: 'home', sub: '', render: renderHome },
  { name: 'features', sub: 'features/', render: renderFeatures },
]

// The stylesheet's and the script's addresses carry a hash of their content:
// GitHub Pages lets a browser keep them for ten minutes, and a new page with
// the old stylesheet showed its new parts unstyled.
const versioned = (file) =>
  `${file}?v=${crypto.createHash('sha256').update(fs.readFileSync(path.join(here, file))).digest('hex').slice(0, 12)}`
const assets = { css: versioned('assets/css/site.css'), js: versioned('assets/js/site.js') }

const written = []
for (const page of pages) {
  const alternates = Object.fromEntries(languages.map((l) => [l.t.lang, `${l.dir}${page.sub}`]))
  for (const { t } of languages) {
    const dir = alternates[t.lang]
    const root = '../'.repeat(dir.split('/').filter(Boolean).length)
    const html = page.render(t, { ...project, site, dir, root, alternates, images, assets })
    fs.mkdirSync(path.join(here, dir || '.'), { recursive: true })
    fs.writeFileSync(path.join(here, dir, 'index.html'), html)
    console.log(`${dir}index.html`)
  }
  written.push(alternates)
}

const urls = written.flatMap((alternates) => {
  const links = Object.entries(alternates)
    .map(([lang, dir]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${site}${dir}"/>`)
    .join('\n')
  return Object.values(alternates).map((dir) => `  <url>\n    <loc>${site}${dir}</loc>\n${links}\n  </url>`)
})
fs.writeFileSync(
  path.join(here, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`,
)
fs.writeFileSync(path.join(here, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site}sitemap.xml\n`)
console.log('sitemap.xml, robots.txt')
