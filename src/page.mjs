// The pages, the same for every language: t holds the texts (src/i18n), c
// the links and paths (build.mjs). renderHome is the home page,
// renderFeatures the page of features in detail one level below it.

// Icons: Lucide (ISC license, https://lucide.dev), as the interface uses them.
const ICONS = {
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  shares:
    '<path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"/><path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"/><path d="M3 5a2 2 0 0 0 2 2h3"/><path d="M3 3v13a2 2 0 0 0 2 2h3"/>',
  history: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
  folder:
    '<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>',
  apps: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  box: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  refresh:
    '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  shield:
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  activity:
    '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
  monitorCog:
    '<path d="M12 17v4"/><path d="m14.305 7.53.923-.382"/><path d="m15.228 4.852-.923-.383"/><path d="m16.852 3.228-.383-.924"/><path d="m16.852 8.772-.383.923"/><path d="m19.148 3.228.383-.924"/><path d="m19.53 9.696-.382-.924"/><path d="m20.772 4.852.924-.383"/><path d="m20.772 7.148.924.383"/><path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M8 21h8"/><circle cx="18" cy="6" r="3"/>',
  hardDriveDownload:
    '<path d="M12 2v8"/><path d="m16 6-4 4-4-4"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 18h.01"/><path d="M10 18h.01"/>',
  network:
    '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
  cpu: '<path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>',
  download: '<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  monitor: '<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>',
  server:
    '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/>',
  layers:
    '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  ban: '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  terminal: '<path d="m4 17 6-6-6-6"/><path d="M12 19h8"/>',
  key: '<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  cloudOff:
    '<path d="m2 2 20 20"/><path d="M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"/><path d="M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"/>',
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  alert:
    '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
}

const GITHUB =
  '<svg class="i" width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/></svg>'

// The colours of the apps' icons on the zendiloOS desktop.
const TINTS = {
  storage: ['#a78bfa', '#7c3aed'],
  shares: ['#fdba74', '#f97316'],
  snapshots: ['#a5b4fc', '#4f46e5'],
  files: ['#fde047', '#eab308'],
  apps: ['#93c5fd', '#2563eb'],
  docker: ['#7dd3fc', '#0284c7'],
  vms: ['#a78bfa', '#4f46e5'],
  backup: ['#fbbf24', '#ea580c'],
  network: ['#67e8f9', '#0891b2'],
  updates: ['#6ee7b7', '#059669'],
  security: ['#fda4af', '#e11d48'],
  monitor: ['#5eead4', '#0d9488'],
  hardware: ['#cbd5e1', '#475569'],
}
const FEATURE_ICONS = {
  storage: 'database',
  shares: 'shares',
  snapshots: 'history',
  files: 'folder',
  apps: 'apps',
  docker: 'box',
  vms: 'monitorCog',
  backup: 'hardDriveDownload',
  network: 'network',
  updates: 'refresh',
  security: 'shield',
  monitor: 'activity',
  hardware: 'cpu',
}
// The section of the features page that tells more of a home page feature.
const FEATURE_AREAS = {
  storage: 'storage',
  shares: 'files',
  snapshots: 'files',
  files: 'files',
  apps: 'apps',
  docker: 'apps',
  vms: 'vms',
  backup: 'backup',
  network: 'network',
  updates: 'updates',
  security: 'security',
  monitor: 'monitor',
}
// The features page's sections: the tile they show and the screenshots of
// the tour that fit them ([image, tour row, its alt text]).
const AREAS = {
  storage: { tile: 'storage', shots: [['disks', 'storage', 'alt']], fit: true },
  files: { tile: 'shares', shots: [['shares', 'shares', 'alt'], ['files', 'shares', 'alt2']] },
  apps: { tile: 'apps', shots: [['apps', 'apps', 'alt'], ['docker', 'docker', 'alt']] },
  vms: { tile: 'vms' },
  backup: { tile: 'backup' },
  network: { tile: 'network' },
  security: { tile: 'security' },
  updates: { tile: 'updates', shots: [['updates', 'updates', 'alt']] },
  monitor: { tile: 'monitor' },
  hardware: { tile: 'hardware' },
}
const TOUR_IMAGES = { storage: 'disks', shares: 'shares', apps: 'apps', docker: 'docker', updates: 'updates' }
const NODE_ICONS = ['monitor', 'server', 'shield', 'layers']
const GUARD_ICONS = ['ban', 'lock', 'users', 'shield', 'terminal', 'key']
const VALUE_ICONS = ['cloudOff', 'layers', 'code']

// The community catalog's apps, by name only.
const APPS = [
  'AdGuard Home', 'Home Assistant', 'Immich', 'Jellyfin', 'Plex Media Server', 'Pi-hole', 'Uptime Kuma', 'Homarr',
  'qBittorrent', 'Sonarr', 'Radarr', 'Lidarr', 'Prowlarr', 'Bazarr', 'Seerr', 'Tdarr', 'Jellystat', 'Wizarr',
  'Bookshelf', 'Kapowarr', 'Dispatcharr', 'FlareSolverr', 'autobrr', 'cross-seed', 'Unpackerr', 'Profilarr',
  'Decluttarr', 'Janitorr',
]

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const icon = (name, size = 20) =>
  `<svg class="i" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`
const tint = (id) => `--c1:${TINTS[id][0]};--c2:${TINTS[id][1]}`
const tile = (id, size = 20) => `<span class="tile" style="${tint(id)}">${icon(FEATURE_ICONS[id], size)}</span>`

// What both pages share: the texts' placeholders and badges, the head,
// the header, the call to action and the footer. `home` leads from the page
// to its language's home page ('' on the home page itself).
function site(t, c, home) {
  const href = (lang) => `${c.root}${c.alternates[lang]}` || './'
  const features = home ? './' : 'features/'

  // A badge for what is only in the test release (while there is one) or
  // a preview; in the texts as [[next]] and [[preview]]. Text in {{ }} is
  // there only while there is a test release.
  const badge = (kind) =>
    kind === 'next' && !c.next ? '' : `<span class="badge badge-${kind}">${t.badges[kind]}</span>`
  const fill = (s) =>
    String(s)
      .replace(/\{\{([\s\S]*?)\}\}/g, (_, text) => (c.next ? text : ''))
      .replaceAll('[[next]]', badge('next'))
      .replaceAll('[[preview]]', badge('preview'))
      .replaceAll('{nextVersion}', c.next ? c.next.version : '')
      .replaceAll('{nextIsoAmd64}', c.next ? c.next.iso.amd64 : '')
      .replaceAll('{nextIsoArm64}', c.next ? c.next.iso.arm64 : '')
      .replaceAll('{next}', c.next ? c.next.url : '')
      .replaceAll('{repo}', c.repo)
      .replaceAll('{features}', features)
  const badges = (marks = []) => {
    const html = marks.map(badge).join('')
    return html ? `<span class="badges">${html}</span>` : ''
  }

  // A screenshot, light or dark as the visitor's system is.
  const shot = (name, alt, { cls = '', eager = false } = {}) => {
    const [w, h] = c.images[name]
    return `<picture class="${cls}"><source srcset="${c.root}assets/img/${name}-dark.webp" media="(prefers-color-scheme: dark)"><img src="${c.root}assets/img/${name}-light.webp" width="${w}" height="${h}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></picture>`
  }
  // One screenshot on a tinted stage, or two with the second in front.
  const stage = (id, shots, fit) =>
    shots.length > 1
      ? `<div class="stage stack" style="${tint(id)}">${shot(shots[0][0], shots[0][1])}${shot(shots[1][0], shots[1][1], { cls: 'back' })}</div>`
      : `<div class="stage${fit ? ' fit' : ''}" style="${tint(id)}">${shot(shots[0][0], shots[0][1])}</div>`

  const langs = Object.keys(c.alternates)
    .map(
      (lang) =>
        `<a href="${href(lang)}" hreflang="${lang}" lang="${lang}" data-lang="${lang}"${lang === t.lang ? ' aria-current="page"' : ''}>${lang.toUpperCase()}</a>`,
    )
    .join('')

  const head = ({ title, description, ld }) => {
    const url = `${c.site}${c.dir}`
    return `<!doctype html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
${Object.entries(c.alternates)
  .map(([lang, dir]) => `<link rel="alternate" hreflang="${lang}" href="${c.site}${dir}">`)
  .join('\n')}
<link rel="alternate" hreflang="x-default" href="${c.site}${c.alternates.en}">
<meta name="theme-color" content="#070a16">
<meta name="color-scheme" content="light dark">
<link rel="icon" href="${c.root}favicon.svg" type="image/svg+xml">
<meta property="og:type" content="website">
<meta property="og:site_name" content="zendiloOS">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${t.locale}">
<meta property="og:image" content="${c.site}assets/img/og-${t.lang}.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="preload" href="${c.root}assets/fonts/geist.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${c.root}assets/css/site.css">
<script>document.documentElement.classList.add('js')${
      t.lang === 'en'
        ? `
// German visitors who have not picked a language get the German page.
try { if (!localStorage.getItem('zendiloos.lang') && /^de\\b/i.test(navigator.language || '') && !/bot|crawl|spider/i.test(navigator.userAgent)) location.replace('${href('de')}' + location.hash) } catch (e) {}`
        : ''
    }</script>${ld ? `\n<script type="application/ld+json">${JSON.stringify(ld)}</script>` : ''}
</head>
<body>
<a class="skip" href="#main">${t.nav.skip}</a>
`
  }

  const header = () => {
    const nav = [
      [features, t.nav.features, home ? 'page' : ''],
      [`${home}#security`, t.nav.security],
      [`${home}#apps`, t.nav.apps],
      [`${home}#install`, t.nav.install],
      [`${home}#faq`, t.nav.faq],
    ]
      .map(([to, label, current]) => `<a href="${to}"${current ? ` aria-current="${current}"` : ''}>${label}</a>`)
      .join('')
    return `
<header class="header" id="top">
  <div class="container header-inner">
    <a class="brand" href="${home || './'}" aria-label="zendiloOS">
      <img src="${c.root}favicon.svg" width="30" height="30" alt="">
      <span>zendiloOS</span>
    </a>
    <nav class="nav" id="nav" aria-label="${t.nav.label}">${nav}</nav>
    <div class="header-actions">
      <div class="lang" role="group" aria-label="${t.nav.language}">${langs}</div>
      <a class="btn btn-small btn-glass" href="${c.repo}" aria-label="GitHub">${GITHUB}<span class="hide-sm">GitHub</span></a>
      <button class="menu-button" type="button" aria-controls="nav" aria-expanded="false" aria-label="${t.nav.menu}">${icon('menu', 22)}${icon('close', 22)}</button>
    </div>
  </div>
</header>
`
  }

  const cta = () => `
  <section class="section section-cta">
    <div class="container">
      <div class="cta reveal">
        <img src="${c.root}favicon.svg" width="64" height="64" alt="">
        <h2>${t.cta.title}</h2>
        <p>${t.cta.lead}</p>
        <div class="actions">
          <a class="btn btn-white" href="${c.iso}">${icon('download', 18)}<span>${t.hero.download}</span></a>
          <a class="btn btn-glass" href="${c.repo}">${GITHUB}<span>${t.hero.github}</span></a>
        </div>
      </div>
    </div>
  </section>`

  const footer = () => `
<footer class="footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <a class="brand" href="${home || './'}"><img src="${c.root}favicon.svg" width="28" height="28" alt=""><span>zendiloOS</span></a>
      <p>${t.footer.tagline}</p>
      <div class="lang" role="group" aria-label="${t.nav.language}">${langs}</div>
    </div>
    <nav aria-label="${t.footer.product}">
      <h2>${t.footer.product}</h2>
      <a href="${features}">${t.footer.details}</a>
      <a href="${home}#install">${t.nav.install}</a>
      <a href="${c.iso}">${t.footer.iso}</a>
      <a href="${c.repo}/releases">${t.footer.releases}</a>
    </nav>
    <nav aria-label="${t.footer.project}">
      <h2>${t.footer.project}</h2>
      <a href="${c.repo}">GitHub</a>
      <a href="${c.repo}/blob/main/docs/architecture.md">${t.footer.architecture}</a>
      <a href="${c.repo}/blob/main/docs/testing.md">${t.footer.testing}</a>
      <a href="${c.repo}/blob/main/docs/licences.md">${t.footer.licenses}</a>
      <a href="${c.catalog}">${t.footer.catalog}</a>
    </nav>
  </div>
  <div class="container footer-bottom">
    <p>${t.footer.license.replace('{year}', '2026')}</p>
    <p>${t.footer.trademark}${c.imprint ? ` · <a href="${c.imprint}">${t.footer.imprint}</a>` : ''}</p>
  </div>
</footer>

<script src="${c.root}assets/js/site.js" defer></script>
</body>
</html>
`

  return { features, badge, badges, fill, shot, stage, head, header, cta, footer }
}

export function renderHome(t, c) {
  const s = site(t, c, '')
  const { fill } = s

  const features = t.features.items
    .map(
      (f) => `
        <a class="card feature reveal" href="${s.features}#${FEATURE_AREAS[f.id]}">
          <span class="feature-top">${tile(f.id)}${s.badges(f.marks)}</span>
          <h3><span>${f.title}</span>${icon('arrowRight', 16)}</h3>
          <p>${fill(f.text)}</p>
        </a>`,
    )
    .join('')

  const rows = t.tour
    .map((r, i) => {
      const image =
        r.id === 'shares'
          ? s.stage(r.id, [['shares', r.alt], ['files', r.alt2]])
          : s.stage(r.id, [[TOUR_IMAGES[r.id], r.alt]], r.id === 'storage')
      return `
      <div class="row${i % 2 ? ' flip' : ''} reveal" id="tour-${r.id}">
        <div class="row-text">
          <p class="eyebrow-app" style="${tint(r.id)}">${tile(r.id, 16)}<span>${r.eyebrow}</span></p>
          <h3>${r.title}</h3>
          <p>${fill(r.text)}</p>
          <ul class="checks">${r.checks.map((x) => `<li>${icon('check', 18)}<span>${fill(x)}</span></li>`).join('')}</ul>
        </div>
        ${image}
      </div>`
    })
    .join('')

  const nodes = t.security.nodes
    .map(
      (n, i) => `
          <li class="node${i === 2 ? ' node-agent' : ''}">
            <span class="node-icon">${icon(NODE_ICONS[i], 22)}</span>
            <strong>${n.title}</strong>
            <span>${n.text}</span>
          </li>`,
    )
    .join('<li class="link" aria-hidden="true"><span></span></li>')

  const guards = t.security.cards
    .map(
      (g, i) => `
          <div class="guard">
            ${icon(GUARD_ICONS[i], 20)}
            <div><strong>${g.title}</strong><p>${g.text}</p></div>
          </div>`,
    )
    .join('')

  const hue = (name) => [...name].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) % 360, 7)
  const chips = (names, hidden) =>
    names
      .map(
        (n) =>
          `<li class="app-chip"${hidden ? ' aria-hidden="true"' : ''}><b style="--h:${hue(n)}">${esc(n[0].toUpperCase())}</b>${esc(n)}</li>`,
      )
      .join('')
  const half = Math.ceil(APPS.length / 2)
  const marquee = (names, reverse) =>
    `<div class="marquee${reverse ? ' reverse' : ''}"><ul class="marquee-track">${chips(names, false)}${chips(names, true)}</ul></div>`

  const steps = t.install.steps
    .map(
      (st, i) => `
          <li class="step reveal">
            <span class="step-num">0${i + 1}</span>
            <h3>${st.title}</h3>
            <p>${fill(st.text)}</p>
          </li>`,
    )
    .join('')

  const values = t.values.items
    .map(
      (v, i) => `
        <article class="card value reveal">
          <span class="value-icon">${icon(VALUE_ICONS[i], 22)}</span>
          <h3>${v.title}</h3>
          <p>${v.text}</p>
        </article>`,
    )
    .join('')

  const faq = t.faq.items
    .filter((f) => !f.next || c.next)
    .map(
      (f) => `
          <details>
            <summary><span>${f.q}</span>${icon('chevron', 20)}</summary>
            <div class="answer"><p>${fill(f.a)}</p></div>
          </details>`,
    )
    .join('')

  const next = c.next
    ? `
      <div class="hero-next">
        <a class="hero-next-link" href="${c.next.url}"><span>${fill(t.hero.next.link)}</span>${icon('arrowRight', 14)}</a>
        <p>${fill(t.hero.next.text)}</p>
        <p class="hero-next-isos">${[
          ['amd64', t.hero.next.isoAmd64],
          ['arm64', t.hero.next.isoArm64],
        ]
          .map(([arch, label]) => `<a href="${c.next.iso[arch]}">${icon('download', 14)}<span>${label}</span></a>`)
          .join('')}</p>
      </div>`
    : ''

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'zendiloOS',
    description: t.description,
    url: `${c.site}${c.dir}`,
    downloadUrl: c.iso,
    operatingSystem: 'Debian 13',
    applicationCategory: 'UtilitiesApplication',
    license: 'https://www.apache.org/licenses/LICENSE-2.0',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    image: `${c.site}assets/img/og-${t.lang}.jpg`,
  }

  return `${s.head({ title: t.title, description: t.description, ld })}${s.header()}
<main id="main">
  <section class="hero">
    <div class="container hero-text">
      <a class="pill" href="${c.repo}/releases/latest" data-release="${esc(t.hero.release)}">
        <span class="pill-dot"></span><span data-release-text>${t.hero.pill}</span>${icon('arrowRight', 14)}
      </a>
      <h1>${t.hero.title}</h1>
      <p class="lead">${t.hero.lead}</p>
      <div class="actions">
        <a class="btn btn-primary" href="${c.iso}" data-download>${icon('download', 18)}<span>${t.hero.download}</span></a>
        <a class="btn btn-glass" href="${c.repo}">${GITHUB}<span>${t.hero.github}</span></a>
      </div>
      <p class="hero-meta"><span data-download-meta data-template="${esc(t.hero.downloadMeta)}">${t.hero.meta}</span></p>${next}
    </div>
    <div class="container">
      <div class="hero-visual">
        <div class="frame">
          <div class="frame-bar" aria-hidden="true">
            <i></i><i></i><i></i>
            <span class="frame-url">${icon('lock', 12)}192.168.1.20</span>
          </div>
          ${s.shot('hero', t.hero.alt, { eager: true })}
        </div>
        <div class="chip chip-a" aria-hidden="true">
          ${tile('storage', 18)}
          <span><strong>${t.hero.chipPool[0]}</strong><small><i class="ok"></i>${t.hero.chipPool[1]}</small></span>
        </div>
        <div class="chip chip-b" aria-hidden="true">
          ${tile('updates', 18)}
          <span><strong>${t.hero.chipUpdate[0]}</strong><small>${t.hero.chipUpdate[1]}</small></span>
        </div>
      </div>
    </div>
  </section>

  <section class="built-on" aria-label="${esc(t.builtOn.title)}">
    <div class="container">
      <p>${t.builtOn.title}</p>
      <ul>${['Debian', 'OpenZFS', 'Samba', 'NFS', 'Docker', 'nginx', 'Rust', 'Vue'].map((n) => `<li>${n}</li>`).join('')}</ul>
    </div>
  </section>

  <section class="section" id="features">
    <div class="container">
      <header class="section-head reveal">
        <p class="eyebrow">${t.features.eyebrow}</p>
        <h2>${t.features.title}</h2>
        <p>${t.features.lead}</p>
      </header>
      <div class="features">${features}
      </div>
      <div class="features-more reveal">
        ${c.next ? `<p class="legend">${fill(t.features.legend)}</p>` : ''}
        <a class="link" href="${s.features}">${t.features.more}${icon('arrowRight', 16)}</a>
      </div>
    </div>
  </section>

  <section class="section section-tour" aria-label="${esc(t.tourLabel)}">
    <div class="container tour">${rows}
    </div>
  </section>

  <section class="section" id="security">
    <div class="container">
      <div class="panel-dark reveal">
        <header class="section-head">
          <p class="eyebrow">${t.security.eyebrow}</p>
          <h2>${t.security.title}</h2>
          <p>${t.security.lead}</p>
        </header>
        <ol class="flow">${nodes}
        </ol>
        <div class="guards">${guards}
        </div>
      </div>
    </div>
  </section>

  <section class="section section-apps" id="apps">
    <div class="container">
      <header class="section-head reveal">
        <p class="eyebrow">${t.apps.eyebrow}</p>
        <h2>${t.apps.title}</h2>
        <p>${t.apps.lead}</p>
      </header>
    </div>
    <div class="marquees reveal">
      ${marquee(APPS.slice(0, half), false)}
      ${marquee(APPS.slice(half), true)}
    </div>
    <p class="center"><a class="link" href="${c.catalog}">${t.apps.link}${icon('arrowRight', 16)}</a></p>
  </section>

  <section class="section" id="install">
    <div class="container">
      <header class="section-head reveal">
        <p class="eyebrow">${t.install.eyebrow}</p>
        <h2>${t.install.title}</h2>
        <p>${t.install.lead}</p>
      </header>
      <ol class="steps">${steps}
      </ol>
      <div class="install-more">
        <div class="card need reveal">
          <h3>${t.install.needTitle}</h3>
          <ul class="checks">${t.install.need.map((x) => `<li>${icon('check', 18)}<span>${fill(x)}</span></li>`).join('')}</ul>
          <p class="note">${icon('alert', 18)}<span>${t.install.note}</span></p>
          <p class="need-more"><a class="link" href="${s.features}#hardware">${t.install.needMore}${icon('arrowRight', 16)}</a></p>
        </div>
        <div class="card debian reveal">
          <h3>${t.install.debianTitle}</h3>
          <p>${t.install.debianText.replace('{releases}', `${c.repo}/releases/latest`)}</p>
          <div class="code">
            <div class="code-bar"><span>${t.install.terminal}</span><button type="button" class="copy" data-copied="${esc(t.install.copied)}">${icon('copy', 15)}<span>${t.install.copy}</span></button></div>
<pre><code>sudo sed -i 's/^Components: main$/Components: main contrib/' \\
    /etc/apt/sources.list.d/debian.sources
sudo apt update &amp;&amp; sudo apt install linux-headers-$(uname -r)
sudo apt install ./zendiloos_<span data-version-text>&lt;version&gt;</span>_amd64.deb</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="open-source">
    <div class="container">
      <header class="section-head reveal">
        <p class="eyebrow">${t.values.eyebrow}</p>
        <h2>${t.values.title}</h2>
      </header>
      <div class="values">${values}
      </div>
    </div>
  </section>

  <section class="section" id="faq">
    <div class="container faq">
      <header class="reveal">
        <p class="eyebrow">${t.faq.eyebrow}</p>
        <h2>${t.faq.title}</h2>
        <p>${t.faq.more.replace('{issues}', `${c.repo}/issues`)}</p>
      </header>
      <div class="faq-list reveal">${faq}
      </div>
    </div>
  </section>
${s.cta()}
</main>
${s.footer()}`
}

export function renderFeatures(t, c) {
  const s = site(t, c, '../')
  const { fill } = s
  const d = t.details
  const tourAlt = (id, key) => t.tour.find((r) => r.id === id)[key]

  const toc = d.areas
    .map((a) => `<a href="#${a.id}">${tile(AREAS[a.id].tile, 14)}<span>${a.label}</span></a>`)
    .join('')

  const areas = d.areas
    .map((a) => {
      const area = AREAS[a.id]
      const shots = (area.shots ?? []).map(([image, row, key]) => [image, tourAlt(row, key)])
      const specs = a.specs
        .map(([term, text]) => `
            <div><dt>${fill(term)}</dt><dd>${fill(text)}</dd></div>`)
        .join('')
      const docs = a.docs
        .map(
          ([label, to]) =>
            `<a class="link" href="${to.startsWith('#') ? `${c.repo}${to}` : `${c.repo}/blob/main/${to}`}">${label}${icon('arrowRight', 16)}</a>`,
        )
        .join('')
      return `
  <section class="area" id="${a.id}" aria-labelledby="${a.id}-title">
    <div class="container area-grid">
      <div class="area-text reveal">
        <p class="eyebrow-app" style="${tint(area.tile)}">${tile(area.tile, 16)}<span>${a.label}</span>${s.badges(a.marks)}</p>
        <h2 id="${a.id}-title">${a.title}</h2>
        ${a.text.map((p) => `<p>${fill(p)}</p>`).join('\n        ')}
        <div class="area-docs"><span>${d.docs}</span>${docs}</div>
      </div>
      <div class="area-side">
        <dl class="card specs reveal">${specs}
        </dl>${shots.length ? `\n        <div class="reveal">${s.stage(area.tile, shots, area.fit)}</div>` : ''}
      </div>
    </div>
  </section>`
    })
    .join('\n')

  return `${s.head({ title: d.title, description: fill(d.description) })}${s.header()}
<main id="main">
  <section class="hero hero-page">
    <div class="container hero-text">
      <p class="eyebrow">${d.eyebrow}</p>
      <h1>${d.heading}</h1>
      <p class="lead">${d.lead}</p>
      <p class="hero-status">${fill(c.next ? d.legend : d.legendStable)}</p>
      <nav class="toc" aria-label="${esc(d.tocLabel)}">${toc}</nav>
    </div>
  </section>
${areas}
${s.cta()}
</main>
${s.footer()}`
}
