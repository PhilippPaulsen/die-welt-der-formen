# /studio/ (Task 132)

`studio/` is a **generated copy** of the generator (`world_of_forms_generator`), served at https://www.die-welt-der-formen.de/studio/ (no iframe, same origin).

- **Never edit `studio/` by hand.** Changes are made in the generator repo, then synced:
  ```bash
  tools/sync-studio.sh --dry-run            # always first
  tools/sync-studio.sh [<generator-commit>]  # default: main of ../world_of_forms_generator
  ```
  The script reads from a commit (not the working tree), copies an allowlist of runtime files (including the Formorgel: `gallery.html`, `gallery/`, `tools/gallery/combinations.js`), refuses fonts and `assets/`, checks that every local reference of the pages resolves, and writes `studio/SYNC.md` (source commit, size, date). `--delete` of rsync acts only inside `studio/`.
- **Fonts:** never copied. SuisseIntl is loaded from https://bachmann-paulsen.de/fonts/ (CORS allows the website and `localhost`/`127.0.0.1`). Guard: `node tools/test-no-suisse-fonts.cjs` (covers `studio/`).
- **Storage keys** of the studio all start with `wof:`: the autosave (`wof:session`, `wof:session:quarantine`) lives in `sessionStorage` (per tab, same URL), the Farborgel handoff mailbox (`wof:farborgel:handoff`, `wof:farborgel:ack`) in `localStorage`. The site itself uses neither.
- **Soft launch:** `robots.txt` contains `Disallow: /studio/` so search engines skip the studio until the soft launch. **At the soft launch: remove that line from `robots.txt`** (and check that the nav link and `studio/` are meant to be public).
- **Replaces** the old embedded prototype `p5_prototype/sketch.js` (+ cdnjs p5 1.6.0 / p5.dom / p5.sound on `index.html`, `index_d.html`). It is still there for now; retiring it (and deleting `p5_prototype/`) is a separate, later step.
- `.nojekyll` is set so GitHub Pages serves the files as they are.

## Site hook: menu and language switch inside the Studio (Task 140)
- **`studio-site/` is website-owned** (`site-nav.js`, `site-nav.css`), lies next to `studio/` and is never touched by the sync (`rsync --delete` acts only inside `studio/`).
- **One line** is added by `tools/sync-studio.sh` (version 3) to the generated `studio/index.html`, last before `</body>`: `<script src="../studio-site/site-nav.js" defer data-site-hook></script>`. It is inserted into the copy, never into the generator source; the script checks that it is there exactly once and `studio/SYNC.md` lists it ("Site hook"). The generator knows nothing about the website; without the line (its own GitHub Pages site) the menu does not exist.
- **What it adds:** a ring button with three short lines in the Studio header (left of Plus, from 375 px up; below that the same block sits in the Help overlay) opening Start, Studio (current), Harmony, World, About, and an `EN | DE` switch.
- **Language:** the links follow the Studio's language (`uiI18n.lang`: EN -> `index.html`, `harmony.html`, ...; DE -> the `*_d.html` pages). The switch reloads the Studio with the other `?lang=`; the autosave survives because the generator's `core/session-store.js` leaves `lang` out of the URL the snapshot is bound to (generator task 138). From the website, every Studio link carries the language of its page (`studio/?lang=en` on the English pages, `studio/?lang=de` on the `_d` pages) and so does the start-page entry.
- **Tests:** `node tools/test-site-nav.cjs`, `node tools/test-start-page.cjs`, `node tools/test-no-suisse-fonts.cjs`.
- **Out of scope (backlog):** the Formorgel (`studio/gallery.html`) stays English only; the Farborgel has its own language choice.
