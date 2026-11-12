// Checks the built pages for broken links, without a network:
//
//   node tools/check-links.mjs
//
// Every relative href and src has to name a file of the site (a folder its
// index.html), and every #fragment an id on that page. The canonical and
// alternate links and the sitemap's addresses have to be pages of the site
// under SITE_URL. With ZENDILOOS_REPO set to a clone of zendiloOS, links
// into its README and docs on GitHub are checked too: the file there, and
// the heading a #fragment names. Other addresses are not fetched; the
// releases' files among them are listed, as they exist only once CI made
// the release (a test release's ISOs before its tag, say). With
// --releases, the releases' pages and files are asked for on GitHub too
// (HEAD requests to github.com, not its API).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const site = (process.env.SITE_URL ?? fs.readFileSync(path.join(root, 'SITE_URL'), 'utf8').trim()).replace(/\/?$/, '/')
const repo = process.env.ZENDILOOS_REPO
const github = 'https://github.com/mavnezz/zendiloOS'
const skip = new Set(['.git', 'src', 'tools', 'node_modules'])

const pages = []
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(entry.name)) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.name.endsWith('.html')) pages.push(full)
  }
}
walk(root)

const ids = new Map()
const idsOf = (file) => {
  if (!ids.has(file)) {
    const html = fs.readFileSync(file, 'utf8')
    ids.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])))
  }
  return ids.get(file)
}

const problems = []
const unescape = (s) => s.replaceAll('&amp;', '&').replaceAll('&quot;', '"')

// A page of the site: the file a path leads to, a folder's index.html.
const fileOf = (target) => {
  const file = target.endsWith('/') ? path.join(target, 'index.html') : target
  if (fs.existsSync(file) && fs.statSync(file).isFile()) return file
  if (fs.existsSync(path.join(file, 'index.html'))) return path.join(file, 'index.html')
  return null
}

const checkLocal = (from, link) => {
  const [address, fragment] = link.split('#')
  const file = address ? fileOf(path.resolve(path.dirname(from), address) + (address.endsWith('/') ? '/' : '')) : from
  if (!file) return problems.push(`${path.relative(root, from)}: ${link} leads to no file`)
  if (fragment && file.endsWith('.html') && !idsOf(file).has(decodeURIComponent(fragment))) {
    problems.push(`${path.relative(root, from)}: ${link} names no id on ${path.relative(root, file)}`)
  }
}

const checkSite = (from, url) => {
  const file = fileOf(path.join(root, url.slice(site.length)) + (url.endsWith('/') ? '/' : ''))
  if (!file) problems.push(`${from}: ${url} is no page of the site`)
}

// GitHub's ids for a Markdown file's headings.
const slugs = new Map()
const slugsOf = (file) => {
  if (!slugs.has(file)) {
    const seen = new Map()
    const found = new Set()
    let fenced = false
    for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
      if (/^\s*```/.test(line)) fenced = !fenced
      const heading = !fenced && line.match(/^#{1,6}\s+(.*?)\s*#*\s*$/)
      if (!heading) continue
      const base = heading[1]
        .replace(/<[^>]+>/g, '')
        .replace(/[`*_]/g, '')
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s-]/gu, '')
        .replace(/\s/g, '-')
      const n = seen.get(base) ?? 0
      seen.set(base, n + 1)
      found.add(n ? `${base}-${n}` : base)
    }
    slugs.set(file, found)
  }
  return slugs.get(file)
}

const checkRepo = (from, url) => {
  const rest = url.slice(github.length)
  const [address, fragment] = rest.split('#')
  let file
  if (address === '' || address === '/') file = 'README.md'
  else if (address.startsWith('/blob/main/')) file = address.slice('/blob/main/'.length)
  else return
  const full = path.join(repo, file)
  if (!fs.existsSync(full)) return problems.push(`${path.relative(root, from)}: ${url} names no file in the repository`)
  if (fragment && file.endsWith('.md') && !slugsOf(full).has(fragment)) {
    problems.push(`${path.relative(root, from)}: ${url} names no heading of ${file}`)
  }
}

let links = 0
const assets = new Set()
for (const page of pages) {
  const html = fs.readFileSync(page, 'utf8')
  for (const [, attr, value] of html.matchAll(/\s(href|src|srcset)="([^"]*)"/g)) {
    const link = unescape(value)
    links++
    if (/^(mailto|data|javascript):/.test(link)) continue
    if (link.startsWith(`${github}/releases/download/`) || link.startsWith(`${github}/releases/tag/`)) assets.add(link)
    if (link.startsWith(site)) checkSite(path.relative(root, page), link.split('#')[0])
    else if (repo && (link === github || link.startsWith(`${github}#`) || link.startsWith(`${github}/blob/`))) checkRepo(page, link)
    else if (/^[a-z]+:|^\/\//.test(link)) continue
    else if (attr === 'srcset') link.split(',').forEach((s) => checkLocal(page, s.trim().split(/\s+/)[0]))
    else checkLocal(page, link)
  }
}

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8')
const addresses = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>|href="([^"]+)"/g)].map((m) => m[1] ?? m[2])
for (const url of addresses) {
  if (!url.startsWith(site)) problems.push(`sitemap.xml: ${url} is not under ${site}`)
  else checkSite('sitemap.xml', url)
}
const listed = new Set(addresses.filter((u) => u.startsWith(site)).map((u) => u.slice(site.length)))
for (const page of pages.filter((p) => p.endsWith('index.html'))) {
  const dir = path.relative(root, path.dirname(page))
  if (!listed.has(dir ? `${dir}/` : '')) problems.push(`sitemap.xml: ${path.relative(root, page)} is missing`)
}

const online = process.argv.includes('--releases')
if (online) {
  for (const link of assets) {
    const answer = await fetch(link, { method: 'HEAD', redirect: 'follow' }).catch((e) => ({ ok: false, status: e.message }))
    if (!answer.ok) problems.push(`${link}: ${answer.status}`)
  }
}

if (problems.length) {
  console.error(problems.join('\n'))
  console.error(`${problems.length} broken links`)
  process.exit(1)
}
console.log(`${pages.length} pages, ${links} links, ${addresses.length} sitemap addresses: all lead somewhere${repo ? ' (the repository too)' : ''}`)
if (online) console.log(`${assets.size} pages and files of releases found on GitHub`)
else if (assets.size) console.log(`Not checked, pages and files of releases:\n${[...assets].map((a) => `  ${a}`).join('\n')}`)
