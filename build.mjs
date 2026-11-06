// Builds the static site: one page per language from src/page.mjs and the
// texts in src/i18n, plus sitemap.xml and robots.txt. No dependencies:
//
//   node build.mjs
//
// The output is committed; GitHub Pages serves the repository as it is.
// SITE_URL is where the site lives, for canonical links, the sitemap and
// the preview image of shared links.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { render } from './src/page.mjs'
import en from './src/i18n/en.mjs'
import de from './src/i18n/de.mjs'

const here = path.dirname(fileURLToPath(import.meta.url))
const site = (process.env.SITE_URL ?? fs.readFileSync(path.join(here, 'SITE_URL'), 'utf8').trim()).replace(/\/?$/, '/')

const project = {
  repo: 'https://github.com/mavnezz/zendiloOS',
  api: 'https://api.github.com/repos/mavnezz/zendiloOS/releases/latest',
  catalog: 'https://github.com/mavnezz/zendiloOS.community.applications',
  // Only stable releases carry the ISO, under the same name every time.
  iso: 'https://github.com/mavnezz/zendiloOS/releases/latest/download/zendiloos-amd64-netinst.iso',
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

const pages = [
  { t: en, dir: '' },
  { t: de, dir: 'de/' },
]
const alternates = Object.fromEntries(pages.map((p) => [p.t.lang, p.dir]))

for (const { t, dir } of pages) {
  const root = dir ? '../'.repeat(dir.split('/').filter(Boolean).length) : ''
  const html = render(t, { ...project, site, dir, root, alternates, images })
  fs.mkdirSync(path.join(here, dir || '.'), { recursive: true })
  fs.writeFileSync(path.join(here, dir, 'index.html'), html)
  console.log(`${dir}index.html`)
}

const links = pages.map((p) => `    <xhtml:link rel="alternate" hreflang="${p.t.lang}" href="${site}${p.dir}"/>`).join('\n')
fs.writeFileSync(
  path.join(here, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map((p) => `  <url>\n    <loc>${site}${p.dir}</loc>\n${links}\n  </url>`).join('\n')}
</urlset>
`,
)
fs.writeFileSync(path.join(here, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site}sitemap.xml\n`)
console.log('sitemap.xml, robots.txt')
