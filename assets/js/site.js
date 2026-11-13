// The few things the page does: the header on scroll, the menu on small
// screens, sections that appear, the tour's tabs, the copy button, the
// chosen language and the newest release from GitHub.
;(() => {
  const header = document.querySelector('.header')
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  const menu = document.querySelector('.menu-button')
  const close = () => {
    header.classList.remove('open')
    menu.setAttribute('aria-expanded', 'false')
  }
  menu.addEventListener('click', () => {
    const open = header.classList.toggle('open')
    menu.setAttribute('aria-expanded', String(open))
  })
  document.querySelectorAll('.nav a').forEach((a) => a.addEventListener('click', close))
  document.addEventListener('keydown', (e) => e.key === 'Escape' && close())

  // Sections appear as they scroll into view.
  const reveal = document.querySelectorAll('.reveal')
  if ('IntersectionObserver' in window) {
    const seen = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('shown')
          seen.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    reveal.forEach((el) => seen.observe(el))
  } else {
    reveal.forEach((el) => el.classList.add('shown'))
  }

  // The tour's tabs: one app's panel at a time, with the arrow keys from tab
  // to tab, and a link to a panel (#tour-backup) opening it.
  const tabs = [...document.querySelectorAll('[role="tab"]')]
  const select = (tab, focus) => {
    for (const other of tabs) {
      const on = other === tab
      other.setAttribute('aria-selected', String(on))
      other.tabIndex = on ? 0 : -1
      document.getElementById(other.getAttribute('aria-controls')).classList.toggle('active', on)
    }
    const row = tab.parentElement
    row.scrollTo({ left: tab.offsetLeft - row.offsetLeft - 20, behavior: 'smooth' })
    if (focus) tab.focus({ preventScroll: true })
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab))
    tab.addEventListener('keydown', (e) => {
      const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
      if (!step) return
      e.preventDefault()
      select(tabs[(i + step + tabs.length) % tabs.length], true)
    })
  })
  const linked = () => {
    const tab = tabs.find((t) => `#${t.getAttribute('aria-controls')}` === location.hash)
    if (tab) select(tab)
  }
  linked()
  window.addEventListener('hashchange', linked)

  // The language picked here wins over the browser's from now on.
  document.querySelectorAll('[data-lang]').forEach((a) =>
    a.addEventListener('click', () => {
      try {
        localStorage.setItem('zendiloos.lang', a.dataset.lang)
      } catch {
        // Storage unavailable: the link still leads there.
      }
    }),
  )

  document.querySelectorAll('.copy').forEach((button) => {
    const label = button.querySelector('span')
    const text = label.textContent
    button.addEventListener('click', async () => {
      const code = button.closest('.code').querySelector('code').textContent
      try {
        await navigator.clipboard.writeText(code)
        label.textContent = button.dataset.copied
        setTimeout(() => (label.textContent = text), 1800)
      } catch {
        // No clipboard access (an insecure context): select the text instead.
        const range = document.createRange()
        range.selectNodeContents(button.closest('.code').querySelector('code'))
        getSelection().removeAllRanges()
        getSelection().addRange(range)
      }
    })
  })

  // The newest release: its version on the badge and under the download
  // button. Kept for an hour, so a visitor asks GitHub once; a page that
  // shows neither does not ask.
  if (!document.querySelector('[data-release], [data-version-text], [data-download-meta]')) return
  const show = (release) => {
    if (!release || !release.version) return
    const pill = document.querySelector('[data-release]')
    if (pill) pill.querySelector('[data-release-text]').textContent = pill.dataset.release.replace('{version}', release.version)
    document.querySelectorAll('[data-version-text]').forEach((el) => (el.textContent = release.version))
    const meta = document.querySelector('[data-download-meta]')
    if (meta && release.bytes) {
      meta.textContent = meta.dataset.template.replace('{version}', release.version).replace('{size}', size(release.bytes))
    }
  }
  const lang = document.documentElement.lang
  const size = (bytes) =>
    new Intl.NumberFormat(lang, { maximumFractionDigits: 0 }).format(bytes / 1e6) + ' MB'
  let cached = null
  try {
    cached = JSON.parse(sessionStorage.getItem('zendiloos.release') || 'null')
  } catch {
    cached = null
  }
  if (cached && Date.now() - cached.at < 3600e3) {
    show(cached)
  } else {
    fetch('https://api.github.com/repos/mavnezz/zendiloOS/releases/latest', {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((r) => {
        if (!r) return
        const iso = (r.assets || []).find((a) => a.name === 'zendiloos-amd64-netinst.iso')
        const release = { version: r.tag_name.replace(/^v/, ''), bytes: iso ? iso.size : 0, at: Date.now() }
        try {
          sessionStorage.setItem('zendiloos.release', JSON.stringify(release))
        } catch {
          // Not kept: asked again on the next page view.
        }
        show(release)
      })
      .catch(() => {})
  }
})()
