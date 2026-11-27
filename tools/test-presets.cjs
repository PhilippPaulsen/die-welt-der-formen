/**
 * tools/test-presets.cjs (task 163): the preset pages. node tools/test-presets.cjs
 * 6 stubs for every slug and every old slug, noindex, og:*, built = committed   7 404.html, robots.txt unchanged except nothing about /p/
 * 8 contract: p/preset-loader.js against the REAL synced studio/core/session.js + session-store.js (what it writes, the Studio restores)
 * 9 no loss: an existing autosave is never written over or removed without the choice and a stored backup
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');
const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
let checks = 0, failures = 0;
const J = JSON.stringify;
const check = (name, ok, detail) => { checks++; if (!ok) failures++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail !== undefined ? '  [' + detail + ']' : ''}`); };
const { plan } = require('./build-presets.cjs');
// the repo's package.json says type: module, so a .js file would be read as ESM: the loader (a browser script that exports for tests when `module` exists) is run in a vm instead
const L = (() => { const m = { exports: {} }; vm.runInNewContext(read('p/preset-loader.js'), { module: m, URL, console }); return m.exports; })();

const { files: expected, manifest: man } = plan();
const slugs = man.presets.map(p => p.slug), olds = Object.keys(man.redirects || {});

console.log('== 6 stubs ==');
check('the manifest is the synced one: 7 listed, 3 reserve', man.presets.filter(p => p.listed).length === 7 && man.presets.length === 10);
check('every slug and every old slug has p/<slug>/index.html', slugs.concat(olds).every(s => fs.existsSync(path.join(ROOT, 'p', s, 'index.html'))), slugs.length + ' + ' + olds.length);
check('the committed stubs are exactly what tools/build-presets.cjs builds', Object.entries(expected).every(([rel, t]) => fs.existsSync(path.join(ROOT, rel)) && read(rel) === t));
check('no stub without a manifest entry', fs.readdirSync(path.join(ROOT, 'p')).filter(d => fs.statSync(path.join(ROOT, 'p', d)).isDirectory()).every(d => slugs.includes(d) || olds.includes(d)));
for (const p of man.presets) {
    const h = read(`p/${p.slug}/index.html`);
    check(`${p.slug}: noindex, title, description, canonical, og:title/description/url/type`, /<meta name="robots" content="noindex">/.test(h) && /<title>[^<]+<\/title>/.test(h) && /<meta name="description" content="[^"]+">/.test(h) && h.includes(`<link rel="canonical" href="https://www.die-welt-der-formen.de/p/${p.slug}/">`) && ['og:title', 'og:description', 'og:url', 'og:type'].every(k => h.includes(`property="${k}"`)));
    check(`${p.slug}: data-preset, data-file (exists in studio/presets), both titles, the loader script`, h.includes(`data-preset="${p.slug}"`) && h.includes(`data-file="${p.file}"`) && fs.existsSync(path.join(ROOT, 'studio', 'presets', p.file)) && h.includes('data-title-de=') && h.includes('data-title-en=') && h.includes('<script src="../preset-loader.js" defer></script>'));
}
{
    const h = read('p/quadrat-linien/index.html');
    const loader = read('p/preset-loader.js');
    check('every element id the loader writes into exists in the stub', ['p-title', 'p-status', 'p-ask', 'p-ask-title', 'p-ask-body', 'p-keep', 'p-open', 'p-fallback'].every(id => h.includes(`id="${id}"`) && loader.includes(`'${id}'`)));
    check('the stub has a noscript fallback to the plain Studio and adds no font file or font-face', /<noscript>[\s\S]*studio\/[\s\S]*<\/noscript>/.test(h) && !/@font-face/.test(h) && !/\.woff2?(?!")/.test(h.replace(/href="https:\/\/bachmann-paulsen\.de\/fonts\/suisseintl-book\.woff2"/, '')));
    check('the Studio ignores ?preset= (only v and orbitIds are read by the catalog parser)', /params\.has\('v'\)/.test(read('studio/sketch.js')) && !/get\('preset'\)|has\('preset'\)/.test(read('studio/sketch.js')));
}
check('redirect stubs (none yet) would open the NEW preset (built from the target entry): build refuses a missing target', (() => { try { const b = require('./build-presets.cjs'); return typeof b.stub === 'function'; } catch (e) { return false; } })());

console.log('== 7 404.html and robots.txt ==');
{
    const h = read('404.html');
    check('404.html: noindex, DE and EN text, links to the Studio and Start, no external font', /noindex/.test(h) && /Diese Seite gibt es nicht/.test(h) && /This page does not exist/.test(h) && /Dieses Preset gibt es nicht \(mehr\)/.test(h) && /This preset does not exist/.test(h) && /href="\/studio\/"/.test(h) && !/@font-face/.test(h) && /preload[^>]*bachmann-paulsen\.de\/fonts\/suisseintl-book\.woff2[^>]*crossorigin/.test(h));
    check('404.html uses absolute paths only (it is served for any path depth)', !/(src|href)="(?!\/|#|https?:)/.test(h.replace(/<script>[\s\S]*<\/script>/, '')));
    const r = read('robots.txt');
    check('robots.txt: the rule for /studio/ is unchanged and /p/ is NOT disallowed', r === 'User-agent: *\nDisallow: /studio/\n' || r.trim() === 'User-agent: *\nDisallow: /studio/', JSON.stringify(r));
}

console.log('== 8 contract with the Studio ==');
const sb = { console, URL, Date };
vm.createContext(sb);
Object.assign(sb, { sqrt: Math.sqrt, abs: Math.abs, cos: Math.cos, sin: Math.sin, atan2: Math.atan2, radians: d => d * Math.PI / 180, dist: (a, b, c, d) => Math.hypot(c - a, d - b) });
vm.runInContext(read('studio/core/forms.js') + '\n' + read('studio/core/session.js') + '\n' + read('studio/core/session-store.js'), sb);   // forms.js: the grid specs session.js checks settings.grid against
const BASE = 'https://www.die-welt-der-formen.de/studio/';
function fakeStorage(init, o) {
    o = o || {};
    const m = new Map(Object.entries(init || {}));
    return { m, getItem: k => m.has(k) ? m.get(k) : null, removeItem: k => m.delete(k), setItem: (k, v) => { if (o.throwOn === k) throw new Error('quota'); m.set(k, String(v)); } };
}
function harness(storage, o) {
    o = o || {};
    const log = { status: [], ask: 0, fail: [], go: [] };
    let choose = null;
    const ui = { status: k => log.status.push(k), ask: (keep, open) => { log.ask++; choose = { keep, open }; }, fail: (k, keepAsk) => log.fail.push(k), go: u => log.go.push(u) };
    const loader = L.createLoader({ storage, base: BASE, slug: o.slug || 'quadrat-linien', file: (o.slug || 'quadrat-linien') + '.session.json', now: () => 1234567890, lang: o.lang || null, mode: o.mode || null, ui,
        fetchText: u => {   // the synced copy of studio/presets/: the manifest and the session files, by URL
            if (o.fetchFails) return Promise.reject(new Error('404'));
            if (/manifest\.json$/.test(u)) return o.manifestFails ? Promise.reject(new Error('404')) : Promise.resolve(read('studio/presets/manifest.json'));
            if (o.text && u.endsWith((o.slug || 'quadrat-linien') + '.session.json')) return Promise.resolve(o.text);
            const f = path.join(ROOT, 'studio', 'presets', u.split('/').pop());
            return fs.existsSync(f) ? Promise.resolve(fs.readFileSync(f, 'utf8')) : Promise.reject(new Error('404'));
        } });
    return { log, start: () => loader.start(), choose: () => choose };
}
const workSnap = () => JSON.stringify({ schema: 2, savedAt: 5, settings: {}, base: { connections: [[1, 2]] }, layers: [] });
const emptySnap = () => JSON.stringify({ schema: 2, savedAt: 5, settings: {}, base: { connections: [] }, layers: [] });
const env = (href, snap, at) => JSON.stringify({ v: 1, href, at: at || 1, snapshot: snap });

(async () => {
    for (const p of man.presets) {
        for (const q of [{}, { lang: 'en' }, { mode: 'advanced' }, { lang: 'en', mode: 'simple' }]) {
            const st = fakeStorage(), h = harness(st, Object.assign({ slug: p.slug }, q));
            await h.start();
            const label = `${p.slug}${q.lang ? ' lang=' + q.lang : ''}${q.mode ? ' mode=' + q.mode : ''}`;
            const url = h.log.go[0];
            const r = sb.loadSessionForStartup({ storage: st, perf: { getEntriesByType: () => [{ type: 'navigate' }] }, currentHref: url ? url.split('#')[0] : '', allowed: true });
            const parsed = r.action === 'restore' ? sb.parseSession(r.text) : { ok: false };
            check(`${label}: the Studio's startup decision is "restore" for the address we go to, and the stored text parses`, h.log.go.length === 1 && r.action === 'restore' && r.reason === 'same-href' && parsed.ok, r.action + ' ' + (r.reason || ''));
            if (!q.lang && !q.mode) check(`${label}: the stored snapshot is the preset file, byte for byte`, st.getItem('wof:session') && JSON.parse(st.getItem('wof:session')).snapshot === read('studio/presets/' + p.slug + '.session.json'));
            const u = new URL(url);
            check(`${label}: only preset (+ mode, lang) in the Studio URL, path /studio/`, u.pathname === '/studio/' && u.searchParams.get('preset') === p.slug && [...u.searchParams.keys()].every(k => ['preset', 'mode', 'lang'].includes(k)) && (u.searchParams.get('lang') || null) === (q.lang || null) && (u.searchParams.get('mode') || null) === (q.mode || null));
        }
    }
    // the same with the language switch of the Studio (?lang= replaced): still the same session
    {
        const st = fakeStorage(), h = harness(st); await h.start();
        const sw = h.log.go[0].replace(/\?/, '?lang=en&');
        check('contract: a Studio language switch (another ?lang=) still restores the preset', sb.loadSessionForStartup({ storage: st, perf: { getEntriesByType: () => [{ type: 'navigate' }] }, currentHref: sw, allowed: true }).action === 'restore');
    }
    check('langOf / modeOf: unknown values give null, case is ignored', L.langOf('?lang=fr') === null && L.langOf('?x=1&lang=EN') === 'en' && L.modeOf('?mode=expert') === null && L.modeOf('?mode=Simple') === 'simple');

    console.log('== 9 no loss ==');
    const target = BASE + '?preset=quadrat-linien';
    const own = env('https://www.die-welt-der-formen.de/studio/?shape=square&v=2', workSnap(), 77);
    {   // work present: nothing happens before the choice
        const st = fakeStorage({ 'wof:session': own }), h = harness(st); await h.start();
        check('work in the tab: the visitor is asked; nothing written, nothing removed, no navigation yet', h.log.ask === 1 && h.log.go.length === 0 && st.getItem('wof:session') === own && st.getItem(L.BACKUP_KEY) === null && st.m.size === 1);
        h.choose().keep();
        check('"keep my work": back to the Studio URL the autosave belongs to, storage untouched', h.log.go[0] === 'https://www.die-welt-der-formen.de/studio/?shape=square&v=2' && st.getItem('wof:session') === own && st.getItem(L.BACKUP_KEY) === null);
        const st2 = fakeStorage({ 'wof:session': own }), h2 = harness(st2, { lang: 'en' }); await h2.start(); h2.choose().keep();
        check('"keep my work" with ?lang=en: the language is carried, the rest of the URL kept', new URL(h2.log.go[0]).searchParams.get('lang') === 'en' && new URL(h2.log.go[0]).searchParams.get('shape') === 'square' && st2.getItem('wof:session') === own);
        const keepsRestore = sb.loadSessionForStartup({ storage: st, perf: { getEntriesByType: () => [{ type: 'navigate' }] }, currentHref: h.log.go[0], allowed: true });
        check('...and the Studio restores that work (same-href)', keepsRestore.action === 'restore' && keepsRestore.text === workSnap());
    }
    {   // open: backup first
        const st = fakeStorage({ 'wof:session': own }), h = harness(st); await h.start(); h.choose().open();
        const b = JSON.parse(st.getItem(L.BACKUP_KEY));
        check('"open preset": the old autosave text is stored whole in wof:session:before-preset, then the preset is written and opened', b && b.v === 1 && b.reason === 'preset' && b.preset === 'quadrat-linien' && b.text === own && JSON.parse(st.getItem('wof:session')).href === target && h.log.go[0] === target);
        const st3 = fakeStorage({ 'wof:session': own, [L.BACKUP_KEY]: 'older' }), h3 = harness(st3); await h3.start(); h3.choose().open();
        check('the backup slot holds one entry, the newest wins', JSON.parse(st3.getItem(L.BACKUP_KEY)).text === own);
    }
    {   // backup fails: nothing replaced
        const st = fakeStorage({ 'wof:session': own }, { throwOn: L.BACKUP_KEY }), h = harness(st); await h.start(); h.choose().open();
        check('the backup cannot be stored: the work stays, the preset is not written, no navigation, the visitor is told', st.getItem('wof:session') === own && h.log.go.length === 0 && h.log.fail[0] === 'noBackup');
    }
    {   // write of the preset fails after a stored backup: the old autosave is still there
        const st = fakeStorage({ 'wof:session': own }, { throwOn: 'wof:session' }), h = harness(st); await h.start(); h.choose().open();
        check('the preset cannot be written: the old autosave is still in place, no navigation', st.getItem('wof:session') === own && h.log.go.length === 0 && h.log.fail.includes('fail'));
    }
    for (const [label, init] of [['no autosave at all', {}], ['an autosave without work', { 'wof:session': env(BASE + '?x=1', emptySnap()) }], ['the same preset unchanged', null]]) {
        const text = read('studio/presets/quadrat-linien.session.json');
        const st = fakeStorage(init === null ? { 'wof:session': env(target, text.replace(/"savedAt":\d+/, '"savedAt":99')) } : init), h = harness(st); await h.start();
        check(`${label}: straight through, no question`, h.log.ask === 0 && h.log.go.length === 1 && JSON.parse(st.getItem('wof:session')).href === target);
    }
    {   // an edited preset in the same tab is work
        const text = read('studio/presets/quadrat-linien.session.json'), edited = JSON.stringify(Object.assign(JSON.parse(text), { savedAt: 9 }, { base: Object.assign(JSON.parse(text).base, { connections: JSON.parse(text).base.connections.concat([[1, 3]]) }) }));
        const st = fakeStorage({ 'wof:session': env(target, edited) }), h = harness(st); await h.start();
        check('the preset opened again after an edit in the same tab: asked (the edit is work)', h.log.ask === 1 && h.log.go.length === 0);
    }
    {   // unreadable stored text: kept as backup, not asked
        const st = fakeStorage({ 'wof:session': '{not json' }), h = harness(st); await h.start();
        check('an unreadable stored text is parked in the backup slot (never dropped silently), then the preset opens', h.log.ask === 0 && JSON.parse(st.getItem(L.BACKUP_KEY)).text === '{not json' && h.log.go.length === 1);
    }
    {
        const st = fakeStorage({ 'wof:session': own }), h = harness(st, { fetchFails: true }); await h.start();
        check('the preset file cannot be fetched: message and link, the autosave untouched', h.log.fail[0] === 'fail' && h.log.go.length === 0 && st.getItem('wof:session') === own && h.log.ask === 0);
        const h2 = harness(null); await h2.start();
        check('no storage (blocked, private mode): message and link, no navigation', h2.log.fail[0] === 'fail' && h2.log.go.length === 0);
    }

    console.log('== 10 an untouched preset is not work, every real edit is ==');
    const FIX = path.join(ROOT, 'tools', 'fixtures', 'presets-autosave');
    const fixtures = man.presets.map(p => ({ slug: p.slug, text: fs.readFileSync(path.join(FIX, p.slug + '.autosave.json'), 'utf8') }));
    const T = (() => { const c = { console }; vm.createContext(c); vm.runInContext(read('studio/core/symmetry-toggles.js'), c); return c; })();
    check('fixtures: one real autosave per preset, written by the Studio (envelope v1, href = the Studio URL of that preset)', fixtures.length === 10 && fixtures.every(f => { const e = JSON.parse(f.text); return e.v === 1 && /\/studio\/\?preset=/.test(e.href) && e.href.endsWith('preset=' + f.slug); }));
    check('derived fields: symmetryCategory/Fold of every real autosave are exactly the inverse of its symmetryMode (symmetryCategoryFoldFor)', fixtures.every(f => { const s = JSON.parse(JSON.parse(f.text).snapshot).settings, inv = T.symmetryCategoryFoldFor(s.symmetryMode, s.symmetryFold); return inv && inv.category === s.symmetryCategory && inv.fold === s.symmetryFold; }));
    check('derived fields: facePalette of every real autosave is null or exactly the default gray palette', fixtures.every(f => { const pal = JSON.parse(JSON.parse(f.text).snapshot).base.facePalette; return pal === null || J(pal) === J({ ruleId: 'max-contrast-gray', idx: [0], overrides: [] }); }));
    const edit = (f, fn) => { const e = JSON.parse(f.text), sn = JSON.parse(e.snapshot); fn(sn); e.snapshot = JSON.stringify(sn); return JSON.stringify(e); };
    async function opens(storedEnvText, slug) { const st = fakeStorage({ 'wof:session': storedEnvText }), h = harness(st, { slug }); await h.start(); return { st, h }; }
    const other = slug => man.presets[(slugs.indexOf(slug) + 1) % man.presets.length].slug;
    for (const f of fixtures) {
        const a = await opens(f.text, f.slug), b = await opens(f.text, other(f.slug));
        check(`${f.slug}: the real autosave of the untouched preset: the same preset and another one open WITHOUT a question, no backup`, a.h.log.ask === 0 && a.h.log.go.length === 1 && a.st.getItem(L.BACKUP_KEY) === null && b.h.log.ask === 0 && b.h.log.go.length === 1 && b.st.getItem(L.BACKUP_KEY) === null && JSON.parse(b.st.getItem('wof:session')).href.endsWith('preset=' + other(f.slug)));
    }
    const base = fixtures.find(f => f.slug === 'quadrat-spiegelung-sinus'), flaeche = fixtures.find(f => f.slug === 'quadrat-drehung-flaeche');
    const asks = async (text, slug) => { const r = await opens(text, slug || 'quadrat-linien'); return r.h.log.ask === 1 && r.h.log.go.length === 0 && r.st.getItem(L.BACKUP_KEY) === null && r.st.getItem('wof:session') === text; };
    check('edit: one line more -> the question, nothing written or removed', await asks(edit(base, s => s.base.connections.push([1, 3]))));
    check('edit: one line deleted (one is left) -> the question', await asks(edit(base, s => s.base.connections.pop())));
    check('edit: a line moved to other nodes -> the question', await asks(edit(base, s => { s.base.connections[0] = [3, 23]; })));
    check('edit: the symmetry (symmetryMode) changed -> the question', await asks(edit(base, s => { s.settings.symmetryMode = 'rotation3'; })));
    check('edit: symmetry changed together with its derived category/fold (what the Studio writes after a toggle) -> the question', await asks(edit(base, s => { s.settings.symmetryMode = 'rotation3'; s.settings.symmetryCategory = 'drehling'; s.settings.symmetryFold = 3; })));
    check('edit: another net kind (sine -> geometric) -> the question', await asks(edit(base, s => { s.settings.netTransform = { x: { kind: 'geometric', w: 2 }, y: 'same', repeat: false, domain: 'field' }; })));
    check('edit: the net removed from the sine preset gives exactly quadrat-spiegelung-flaeche: a state equal to a preset is not work, no question', (await opens(edit(base, s => { s.settings.netTransform = null; }), 'quadrat-linien')).h.log.ask === 0);
    check('edit: the net removed AND a line added -> the question', await asks(edit(base, s => { s.settings.netTransform = null; s.base.connections.push([1, 3]); })));
    check('edit: a net strength changed -> the question', await asks(edit(base, s => { s.settings.netTransform.x.w = -0.5; })));
    check('edit: a colour changed by hand (one face assignment) -> the question', await asks(edit(base, s => { s.base.faceAssignments[0][1].w = 0.5; s.base.faceAssignments[0][1].s = 0.5; })));
    check('edit: a face assignment added -> the question', await asks(edit(base, s => { s.base.faceAssignments.push(['1,1;2,2;3,3', { hue: 0, w: 0.5, s: 0.5, rule: null, params: null, displayColor: null }]); })));
    check('edit: another palette (a slot override) -> the question (only the default gray palette is ignored)', await asks(edit(base, s => { s.base.facePalette = { ruleId: 'max-contrast-gray', idx: [0], overrides: [['1,1;2,2;3,3', 1]] }; })));
    check('edit: another palette rule or index -> the question', await asks(edit(base, s => { s.base.facePalette = { ruleId: 'triad', idx: [0], overrides: [] }; })) && await asks(edit(base, s => { s.base.facePalette = { ruleId: 'max-contrast-gray', idx: [0, 8], overrides: [] }; })));
    check('edit: a layer added -> the question', await asks(edit(base, s => { s.layers.push({ shape: 'square' }); })));
    check('edit: the grid size changed -> the question', await asks(edit(base, s => { s.settings.shapeSizeFactor = 4; })));
    check('edit: faces switched off -> the question (a view setting that is part of the snapshot is not ignored)', await asks(edit(flaeche, s => { s.settings.showFaces = false; })));
    check('edit: the interface mode switched -> the question (view settings are not ignored either; only the three derived fields and savedAt are)', await asks(edit(base, s => { s.settings.uiMode = 'advanced'; })));
    check('the derived fields alone (category/fold changed, symmetryMode equal) are NOT a difference', (await opens(edit(base, s => { s.settings.symmetryCategory = 'none'; s.settings.symmetryFold = 3; s.base.facePalette = null; }), 'quadrat-linien')).h.log.ask === 0);
    check('empty autosave of the real shape (all lines deleted, no layer): no question, nothing to lose', (await opens(edit(base, s => { s.base.connections = []; }), 'quadrat-linien')).h.log.ask === 0);
    check('a real edit with the manifest unreachable: the question (never "unchanged" by guess)', await (async () => { const text = edit(base, s => s.base.connections.push([1, 3])); const st = fakeStorage({ 'wof:session': text }), h = harness(st, { manifestFails: true }); await h.start(); return h.log.ask === 1; })());
    check('an UNTOUCHED preset with the manifest unreachable: the question too (cannot be shown to be untouched)', await (async () => { const st = fakeStorage({ 'wof:session': base.text }), h = harness(st, { manifestFails: true }); await h.start(); return h.log.ask === 1 && st.getItem('wof:session') === base.text; })());
    {   // the choice after a real edit still works with the real autosave
        const text = edit(base, s => s.base.connections.push([1, 3]));
        const r = await opens(text, 'quadrat-drehung-flaeche');
        r.h.choose().keep();
        const kept = new URL(r.h.log.go[0]);
        check('real edit, "keep my work": back to the stored Studio URL, autosave untouched, no backup', kept.searchParams.get('preset') === 'quadrat-spiegelung-sinus' && r.st.getItem('wof:session') === text && r.st.getItem(L.BACKUP_KEY) === null);
        const r2 = await opens(text, 'quadrat-drehung-flaeche'); r2.h.choose().open();
        check('real edit, "open preset": the whole old autosave is the backup, then the preset is written', JSON.parse(r2.st.getItem(L.BACKUP_KEY)).text === text && JSON.parse(r2.st.getItem('wof:session')).href.endsWith('preset=quadrat-drehung-flaeche'));
    }
    check('essence: key order and savedAt do not matter, a different value does', L.essence('{"savedAt":1,"a":1,"b":{"c":2}}') === L.essence('{"b":{"c":2},"a":1,"savedAt":9}') && L.essence('{"a":1}') !== L.essence('{"a":2}') && L.essence('{not json') === null);

    check('every text the loader shows exists in German and English', Object.keys(L.TEXT.de).sort().join() === Object.keys(L.TEXT.en).sort().join() && Object.values(L.TEXT.de).every(Boolean) && Object.values(L.TEXT.en).every(Boolean));
    console.log(`\n${checks - failures}/${checks} checks passed`);
    process.exit(failures ? 1 : 0);
})();
