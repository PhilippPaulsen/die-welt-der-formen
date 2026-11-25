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
