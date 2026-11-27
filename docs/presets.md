# Presets (`/p/<slug>/`)

Source of truth: the generator repo, `presets/` (manifest, session files; exports in `presets/quellen/`, texts in `tools/presets/presets-table.json`, rebuilt by `tools/presets/build-presets.js`). Here, `tools/sync-studio.sh` (v4) copies `presets/manifest.json` and `presets/*.session.json` into `studio/presets/`.

Website part (task 163):
- `node tools/build-presets.cjs` writes `p/<slug>/index.html` for every slug and every old slug of `manifest.redirects` (`--check` only compares). The stubs are committed; run it after every sync that changes the manifest.
- `p/preset-loader.js` (shared by the stubs): fetch the session file, put it into this tab's autosave slot (`wof:session`) under the Studio URL `studio/?preset=<slug>[&mode=][&lang=]`, go there. The Studio restores it through its unchanged restore path. Existing work in the tab (a line or a layer that is not an untouched preset: equal to any manifest preset after removing `savedAt`, `symmetryCategory`, `symmetryFold` and a null/default-gray `facePalette`): a choice first (keep / open preset); opening stores the old autosave in `wof:session:before-preset` before anything is replaced.
- `404.html`: the first site-wide 404 page (GitHub Pages serves it for any unknown path; for `/p/...` the text says the preset does not exist).
- `noindex` in every stub and in 404.html. `robots.txt` keeps only `Disallow: /studio/` (no `Disallow: /p/`: a disallowed URL hides the noindex). At the soft launch remove the `noindex` lines (stubs: in `tools/build-presets.cjs`) and the `/studio/` rule.
- Tests: `node tools/test-presets.cjs` (stubs, 404, robots, contract with the synced Studio session code, no loss of an existing autosave).
- Renaming a slug: add `"old": "new"` to `redirects` in the generator manifest (via the table), sync, rebuild.

## Start page gallery (tasks 169 to 171)
- Source: the manifest's optional `gallery` block per preset (`order`, `image`, `caption` DE/EN, `alt` DE/EN), written in the generator (`tools/presets/presets-table.json`, task 169). A new exhibit = a table entry (listed preset, next `order`, caption naming what is new against the previous image, alt text) + the image `assets/presets/<slug>.svg` + sync + `node tools/build-start.cjs`.
- Images: the Studio's SVG export, clipped to the sheet by the generator's `tools/presets/clip-svg.js` (task 170, steps in `tools/presets/render-images.js`), 8 to 44 KB. `og:image` PNGs (600 x 600) come with task 172.
- `node tools/build-start.cjs` writes the gallery (static HTML, readable without JavaScript, five slides under each other) between the markers in `index_d.html` and `index.html`; `--check` compares. `gallery.css` / `gallery.js` (no autoplay, arrows, arrow keys, swipe by scroll-snap) are linked from the two start pages only.
- The frame sits where the Studio canvas sits (560 x 560 at x 360 / y 128; phone 343 at x 16 / y 48: since task 176 the start page's phone bar is 40 px like the Studio header). `tools/gallery-position-pins.json` holds the measured values.
- Tests: `node tools/test-gallery.cjs`, `node tools/test-start-page.cjs`.
