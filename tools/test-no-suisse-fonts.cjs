// Guard (task 131): Suisse Int'l is commercially licensed and must not be in this public repository.
// The web fonts are served from https://bachmann-paulsen.de/fonts/ and only declared in style.css.
//   node tools/test-no-suisse-fonts.cjs
const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const ROOT = path.join(__dirname, '..');
let failures = 0, checks = 0;
const check = (name, ok, detail) => { checks++; if (!ok) failures++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  [' + detail + ']' : ''}`); };
const FONT = /suisse.*\.(woff2?|otf|ttf)$/i;
const BASE = 'https://bachmann-paulsen.de/fonts/';
const walk = (dir, out) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        if (e.name === '.git' || e.name === 'node_modules') continue;
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walk(p, out); else if (FONT.test(e.name)) out.push(path.relative(ROOT, p));
    }
    return out;
};
const inTree = walk(ROOT, []);
check('no woff/woff2/otf/ttf with "Suisse" in its name in the working tree', inTree.length === 0, inTree.join(', '));
let listed = [];
try { listed = cp.execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard'], { cwd: ROOT, encoding: 'utf8' }).split('\n').filter(n => FONT.test(path.basename(n))); } catch (e) { check('git ls-files runs', false, String(e.message).slice(0, 100)); }
check('none tracked by git or addable (git ls-files --cached --others --exclude-standard)', listed.length === 0, listed.join(', '));
const gi = fs.readFileSync(path.join(ROOT, '.gitignore'), 'utf8').split('\n').map(l => l.trim());
for (const ext of ['woff', 'woff2', 'otf', 'ttf']) check(`.gitignore blocks *Suisse*.${ext}`, gi.includes(`*[Ss]uisse*.${ext}`));
// The site root and studio/ (generated copy of the generator, tools/sync-studio.sh) follow the same rules.
const SCOPES = [{ label: '', dir: ROOT }];
if (fs.existsSync(path.join(ROOT, 'studio'))) SCOPES.push({ label: 'studio/', dir: path.join(ROOT, 'studio') });
for (const { label, dir } of SCOPES) {
    const css = fs.readFileSync(path.join(dir, 'style.css'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
    const faces = [...css.matchAll(/@font-face\s*\{[^}]*\}/g)].map(m => m[0]);
    const remote = faces.filter(f => /url\(/.test(f));
    const urls = remote.map(f => (f.match(/url\(\s*["']?([^"')]+)/) || [])[1]);
    const urlOk = u => /^https:\/\/bachmann-paulsen\.de\/fonts\/suisseintl-[a-z]+\.woff2$/.test(u || '');
    const faceOk = f => /font-family:\s*"SuisseIntl"/.test(f) && /format\("woff2"\)/.test(f) && /font-display:\s*swap/.test(f);
    if (!label) {
        check('style.css declares 4 faces, family "SuisseIntl", each a ' + BASE + 'suisseintl-<cut>.woff2 URL with format("woff2") and font-display: swap',
            faces.length === 4 && faces.every(faceOk) && urls.every(urlOk), urls.join(', '));
    } else {
        // studio/ is the generator's own style.css: Book + Semibold from the font host, plus a local() metrics fallback face
        check(label + 'style.css: every @font-face with a url() is a "SuisseIntl" face from ' + BASE + ' (woff2, swap); at least Book and Semibold; the rest is local()',
            remote.length >= 2 && remote.every(faceOk) && urls.every(urlOk) && faces.filter(f => !/url\(/.test(f)).every(f => /src:\s*local\(/.test(f)), urls.join(', '));
    }
    check(label + 'style.css has no other font-family name than var(--font-ui) / inherit / SuisseIntl', !/font-family:\s*"Suisse"/.test(css) && (css.match(/font-family:\s*[^;]+;/g) || []).every(d => /SuisseIntl|var\(--font-ui\)|inherit/.test(d)));
    let bad = [];
    // preload: the site pages and the studio entry pages (generator, Farborgel). studio/gallery.html has none by design,
    // but must not point at assets/Suisse or another font host.
    const pages = fs.readdirSync(dir).filter(n => n.endsWith('.html'));
    if (label) pages.push('color-harmony/ui/index.html');
    for (const f of pages) {
        const s = fs.readFileSync(path.join(dir, f), 'utf8');
        const m = s.match(/<link rel="preload"[^>]*as="font"[^>]*>/g) || [];
        const needs = !(label && f === 'gallery.html');
        if (needs ? !(m.length === 1 && m[0].includes(BASE + 'suisseintl-book.woff2') && /crossorigin/.test(m[0])) : m.some(x => !x.includes(BASE))) bad.push(f);
        if (/assets\/Suisse/i.test(s)) bad.push(f + ' (assets/Suisse)');
    }
    check(label + 'every html page preloads the Book face from the font host with crossorigin', bad.length === 0, bad.join(', '));
}
if (SCOPES.length > 1) {
    check('studio/ has no assets/ folder (fonts are never copied)', !fs.existsSync(path.join(ROOT, 'studio', 'assets')));
    const sync = fs.existsSync(path.join(ROOT, 'studio', 'SYNC.md')) ? fs.readFileSync(path.join(ROOT, 'studio', 'SYNC.md'), 'utf8') : '';
    check('studio/SYNC.md names the source commit (40 hex digits)', /Commit: [0-9a-f]{40}\b/.test(sync));
}
console.log(`\n${checks - failures}/${checks} checks passed`);
process.exit(failures ? 1 : 0);
