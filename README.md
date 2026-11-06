# zendiloOS.page

The homepage of [zendiloOS](https://github.com/mavnezz/zendiloOS): one static
page in English (`/`) and German (`/de/`), served by GitHub Pages.

## Editing

The texts live in `src/i18n/en.mjs` and `src/i18n/de.mjs`, the page's
structure in `src/page.mjs`, the design in `assets/css/site.css`. After a
change, build and commit the result; CI checks that nothing was forgotten.

```sh
node build.mjs            # index.html, de/index.html, sitemap.xml, robots.txt
python3 -m http.server    # look at it on http://localhost:8000
```

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
`og-*.jpg` are the preview images for shared links (1200 × 630).

## Credits

- [Geist](https://github.com/vercel/geist-font) and
  [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono), SIL Open Font
  License 1.1 (`assets/fonts/`)
- Icons from [Lucide](https://lucide.dev), ISC License
