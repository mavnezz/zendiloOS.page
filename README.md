# zendiloOS.page

The homepage of [zendiloOS](https://github.com/mavnezz/zendiloOS): a home
page and a page of its features in detail, in English (`/`, `/features/`)
and German (`/de/`, `/de/features/`), static and served by GitHub Pages.

## Editing

The texts live in `src/i18n/en.mjs` and `src/i18n/de.mjs`, the pages'
structure in `src/page.mjs`, the design in `assets/css/site.css`. After a
change, build and commit the result; CI checks that nothing was forgotten
and that no link leads nowhere.

```sh
node build.mjs            # both pages in both languages, sitemap.xml, robots.txt
node tools/check-links.mjs  # every link of the site leads to a file and an id
python3 -m http.server    # look at it on http://localhost:8000
```

`ZENDILOOS_REPO=~/zendiloOS node tools/check-links.mjs` also checks the
links into zendiloOS's README and docs against a clone: the file, and the
heading a `#` names.

## A test release

While a test release is out beside the stable one, `next` in `build.mjs`
names its version, its page and its ISOs: the hero points to them, and
what only it has carries a badge, marked `[[next]]` in the texts
(`[[preview]]` marks a preview). Text in `{{ }}` is shown only while there
is a test release, for what is true of it alone ("installed from the test
release's ISO"). Once that version is out as a stable release, set `next`
to `null` and build: the pointer, the badges and that text go, and the
rest stays true.

No dependencies, no framework, no requests to other sites except one: the
page asks GitHub's API for the newest release, to show its version and the
ISO's size. Without an answer it shows the same page without them.

## Address

`SITE_URL` holds the address the site lives at: canonical links, the sitemap
and the preview image of shared links use it. For a domain of your own, put it
there, add a `CNAME` file with the domain, run `node build.mjs` and set the
domain in the repository's Pages settings.

An imprint (Impressum) link appears in the footer when the page is built with
`IMPRINT_URL=https://… node build.mjs`.

## Screenshots

`assets/img/*-light.webp` and `*-dark.webp` are taken from a zendiloOS test
machine at twice the resolution; the page shows the one matching the
visitor's colour scheme. Window shots have transparent rounded corners.
`og-*.jpg` are the preview images for shared links (1200 × 630), shot from
`tools/og.html` (`?lang=de` for German). Which shots are still missing, and
with what data: `tools/screenshots-needed.md`.

## Credits

- [Geist](https://github.com/vercel/geist-font) and
  [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono), SIL Open Font
  License 1.1 (`assets/fonts/`)
- Icons from [Lucide](https://lucide.dev), ISC License
