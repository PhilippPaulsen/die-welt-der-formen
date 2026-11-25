# Task 131: Suisse Intl from Strato instead of the repository

Branch `task/131-font-external` (from `main`, `56e50db`). One commit, not pushed, history untouched.

## Decisions
- Family name is now **"SuisseIntl"** (it was "Suisse" here), consistent with the generator and Strato.
- Only the four faces in use are declared: Book 400, BookIt 400 italic, Bold 700, BoldIt 700 italic (the CSS only uses `normal` and `bold`; italics come from `<em>` in `index.html` and `index_d.html`). The other 14 of the 18 files on Strato stay unused.
- CORS on Strato (`https://www.die-welt-der-formen.de`, with and without www.) was tested by Philipp (200 from www., 403 from example.com). Not re-checkable locally.
- `tools/test-no-suisse-fonts.cjs` has the extension `.cjs` because `package.json` has `"type": "module"`.

## Changes
- `style.css`: four `@font-face` with `https://bachmann-paulsen.de/fonts/suisseintl-{book,bookit,bold,boldit}.woff2`, `format("woff2")`, `font-display: swap`; `:root { --font-ui: "SuisseIntl", system-ui, "Helvetica Neue", Arial, sans-serif; }`; both former `font-family: "Suisse", Helvetica, Arial, sans-serif` (body, `.p5-controls input[type="number"]`) use `var(--font-ui)`.
- 8 HTML files (`index`, `index_d`, `about`, `about_d`, `harmony`, `harmony_d`, `world`, `world_d`): `<link rel="preload" ... suisseintl-book.woff2 ... crossorigin>` before the stylesheet link.
- `git rm` of the 18 `assets/SuisseIntl-*.woff2`; `.gitignore`: `*[Ss]uisse*.{woff,woff2,otf,ttf}`.
- `tools/test-no-suisse-fonts.cjs` (9 checks): fails on Suisse font files in the tree or in `git ls-files --cached --others --exclude-standard`, checks `.gitignore`, the four faces and URLs in `style.css`, and the preload in every HTML page.
- `README.md`: section "Typeface" (served externally, fallback locally and in forks, proof of licence with the licensee, nothing invented); the License section notes the exclusion. The `LICENSE` files are untouched.
- No layout or content change. `.DS_Store` (already modified locally) is not committed.

## Results
- `node tools/test-no-suisse-fonts.cjs`: 9/9 PASS.
- Browser (Chromium pane, local static server), before: `index.html` loaded the fonts from `assets/`, no console errors. After: `document.fonts` shows SuisseIntl 400, 400 italic, 700 as "error" (blocked), 700 italic unloaded; `body` font stack is the new one; the preload points at the Strato Book file. Console: only CORS errors for `suisseintl-book.woff2` (preload and face), `-bold` and `-bookit`, as expected locally. `about.html`, `harmony.html` and `world_d.html`: no non-CORS errors (filtered console read; the other three pages were not opened).
- Note: the first reload after the edit still showed the old `style.css` from the browser cache (there is no `?v=` on `style.css`). A hard reload showed the new state.

## Faces in use
| File on Strato | CSS weight / style |
| --- | --- |
| `suisseintl-book.woff2` | 400 normal (also preloaded) |
| `suisseintl-bookit.woff2` | 400 italic |
| `suisseintl-bold.woff2` | 700 normal |
| `suisseintl-boldit.woff2` | 700 italic |

## For F4 (history rewrite)
- All 18 font files come from ONE commit: `18f7a5e` ("Update", 2025-01-02): `assets/SuisseIntl-{Black,BlackIt,Bold,BoldIt,Book,BookIt,Hairline,HairlineIt,Light,LightIt,Medium,MediumIt,Regular,RegularIt,Semibold,SemiboldIt,Thin,ThinIt}.woff2`.
- Branches: only `main` / `origin/main`; no tags. Pack size 2.1 MiB. A second clone with the same history: `The World of Forms_alt/die-welt-der-formen`. Forks, GitHub caches and PR refs are not checked.

## Deployment
After the push, GitHub Pages serves the site again (the `CNAME` is `www.die-welt-der-formen.de`). Visitors whose browser still has the old `style.css` cached (GitHub Pages sends `max-age` of about 10 minutes) request the deleted `assets/SuisseIntl-*.woff2`, get a 404 and see the fallback until the cache expires. The fonts on the live site only load once the new CSS is in use and the request comes from `die-welt-der-formen.de`.
