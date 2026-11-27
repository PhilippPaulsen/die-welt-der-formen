# Presets (`/p/<slug>/`)

Source of truth: the generator repo, `presets/` (manifest, session files; exports in `presets/quellen/`, texts in `tools/presets/presets-table.json`, rebuilt by `tools/presets/build-presets.js`). Here, `tools/sync-studio.sh` (v4) copies `presets/manifest.json` and `presets/*.session.json` into `studio/presets/`.

Website part (task 163):
- `node tools/build-presets.cjs` writes `p/<slug>/index.html` for every slug and every old slug of `manifest.redirects` (`--check` only compares). The stubs are committed; run it after every sync that changes the manifest.
- `p/preset-loader.js` (shared by the stubs): fetch the session file, put it into this tab's autosave slot (`wof:session`) under the Studio URL `studio/?preset=<slug>[&mode=][&lang=]`, go there. The Studio restores it through its unchanged restore path. Existing work in the tab: a choice first (keep / open preset); opening stores the old autosave in `wof:session:before-preset` before anything is replaced.
- `404.html`: the first site-wide 404 page (GitHub Pages serves it for any unknown path; for `/p/...` the text says the preset does not exist).
- `noindex` in every stub and in 404.html. `robots.txt` keeps only `Disallow: /studio/` (no `Disallow: /p/`: a disallowed URL hides the noindex). At the soft launch remove the `noindex` lines (stubs: in `tools/build-presets.cjs`) and the `/studio/` rule.
- Tests: `node tools/test-presets.cjs` (stubs, 404, robots, contract with the synced Studio session code, no loss of an existing autosave).
- Renaming a slug: add `"old": "new"` to `redirects` in the generator manifest (via the table), sync, rebuild.
