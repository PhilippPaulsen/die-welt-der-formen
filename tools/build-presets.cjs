/**
 * tools/build-presets.cjs (task 163). The stub pages p/<slug>/index.html from studio/presets/manifest.json (the synced copy of the generator's manifest).
 *   node tools/build-presets.cjs [--check]      writes the stubs; --check only compares (exit 1 on a difference, used by tools/test-presets.cjs)
 * One stub per slug AND one per old slug of manifest.redirects (it opens the NEW preset, its canonical URL is the new one). Stubs are committed: GitHub Pages does not build.
 * Every stub: noindex (until the soft launch), title and description in German for the static meta tags (crawlers run no script), og:title/description/url/type, no og:image yet
 * (task 165). The page text and the choice dialog are written by p/preset-loader.js (DE/EN, ?lang=). No font file is added: the pages load style.css (its @font-face points to the font host) and fall back to the system font stack.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const BASE = 'https://www.die-welt-der-formen.de';   // CNAME
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function stub(entry, slugForUrl) {
    const url = `${BASE}/p/${slugForUrl}/`;
    return `<!DOCTYPE html>
<html lang="de" data-preset="${esc(entry.slug)}" data-file="${esc(entry.file)}" data-title-de="${esc(entry.title.de)}" data-title-en="${esc(entry.title.en)}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">
  <title>${esc(entry.title.de)} · Die Welt der Formen</title>
  <meta name="description" content="${esc(entry.description.de)}">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Die Welt der Formen">
  <meta property="og:title" content="${esc(entry.title.de)}">
  <meta property="og:description" content="${esc(entry.description.de)}">
  <meta property="og:url" content="${url}">
  <meta property="og:locale" content="de_DE">
  <meta property="og:locale:alternate" content="en_US">
  <link rel="preload" href="https://bachmann-paulsen.de/fonts/suisseintl-book.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="../../style.css">
  <style>
    body { margin: 0; font: 16px/1.5 "SuisseIntl", system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif; color: #000; background: #fff; }
    main { max-width: 34rem; margin: 0 auto; padding: 4rem 1.25rem; }
    h1 { font-size: 1.25rem; font-weight: 700; margin: 0 0 1rem; }
    p { margin: 0 0 1rem; }
    .actions { display: flex; flex-wrap: wrap; gap: .75rem; }
    button, a.link { font: inherit; padding: .6rem 1rem; border: 1px solid #000; background: #fff; color: #000; border-radius: 0; cursor: pointer; text-decoration: none; }
    button:hover, a.link:hover { background: #000; color: #fff; }
    button:focus-visible, a.link:focus-visible { outline: 2px solid #000; outline-offset: 2px; }
  </style>
</head>
<body>
  <main>
    <h1 id="p-title">${esc(entry.title.de)}</h1>
    <p id="p-status" role="status" aria-live="polite">Das Preset wird geöffnet …</p>
    <div id="p-ask" hidden>
      <p><strong id="p-ask-title"></strong></p>
      <p id="p-ask-body"></p>
      <div class="actions"><button type="button" id="p-keep"></button><button type="button" id="p-open"></button></div>
    </div>
    <p><a class="link" id="p-fallback" href="../../studio/" hidden></a></p>
    <noscript><p>Dieses Preset braucht JavaScript. / This preset needs JavaScript.</p><p><a class="link" href="../../studio/">Studio</a></p></noscript>
  </main>
  <script src="../preset-loader.js" defer></script>
</body>
</html>
`;
}

function plan() {
    const man = JSON.parse(fs.readFileSync(path.join(ROOT, 'studio', 'presets', 'manifest.json'), 'utf8'));
    const out = {};
    for (const p of man.presets) out[`p/${p.slug}/index.html`] = stub(p, p.slug);
    for (const [oldSlug, newSlug] of Object.entries(man.redirects || {})) {
        const target = man.presets.find(p => p.slug === newSlug);
        if (!target) throw new Error(`redirect ${oldSlug} -> ${newSlug}: no such preset`);
        out[`p/${oldSlug}/index.html`] = stub(target, newSlug);
    }
    return { files: out, manifest: man };
}
module.exports = { plan, stub, BASE };

if (require.main === module) {
    const check = process.argv.includes('--check');
    const { files } = plan();
    let diff = 0;
    for (const [rel, text] of Object.entries(files)) {
        const f = path.join(ROOT, rel);
        const same = fs.existsSync(f) && fs.readFileSync(f, 'utf8') === text;
        if (!same) { diff++; if (!check) { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, text); } console.log((check ? 'DIFFERS ' : 'wrote ') + rel); }
    }
    // stubs of slugs that are gone: report (never delete silently)
    const dir = path.join(ROOT, 'p');
    for (const d of fs.existsSync(dir) ? fs.readdirSync(dir) : []) { const rel = `p/${d}/index.html`; if (fs.existsSync(path.join(ROOT, rel)) && !files[rel]) { console.log('STALE ' + rel + ' (no longer in the manifest; delete by hand)'); diff++; } }
    console.log(`${Object.keys(files).length} stubs, ${diff} ${check ? 'difference(s)' : 'changed'}`);
    process.exit(check && diff ? 1 : 0);
}
