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
const css = fs.readFileSync(path.join(ROOT, 'style.css'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
const faces = [...css.matchAll(/@font-face\s*\{[^}]*\}/g)].map(m => m[0]);
const urls = faces.map(f => (f.match(/url\(\s*["']?([^"')]+)/) || [])[1]);
check('style.css declares 4 faces, family "SuisseIntl", each a ' + BASE + 'suisseintl-<cut>.woff2 URL with format("woff2") and font-display: swap',
    faces.length === 4 && faces.every(f => /font-family:\s*"SuisseIntl"/.test(f) && /format\("woff2"\)/.test(f) && /font-display:\s*swap/.test(f)) && urls.every(u => /^https:\/\/bachmann-paulsen\.de\/fonts\/suisseintl-[a-z]+\.woff2$/.test(u || '')), urls.join(', '));
check('style.css has no other font-family name than var(--font-ui) / inherit / SuisseIntl', !/font-family:\s*"Suisse"/.test(css) && (css.match(/font-family:\s*[^;]+;/g) || []).every(d => /SuisseIntl|var\(--font-ui\)|inherit/.test(d)));
let bad = [];
for (const f of fs.readdirSync(ROOT).filter(n => n.endsWith('.html'))) {
    const s = fs.readFileSync(path.join(ROOT, f), 'utf8');
    const m = s.match(/<link rel="preload"[^>]*as="font"[^>]*>/g) || [];
    if (!(m.length === 1 && m[0].includes(BASE + 'suisseintl-book.woff2') && /crossorigin/.test(m[0]))) bad.push(f);
    if (/assets\/Suisse/i.test(s)) bad.push(f + ' (assets/Suisse)');
}
check('every html page preloads the Book face from the font host with crossorigin', bad.length === 0, bad.join(', '));
console.log(`\n${checks - failures}/${checks} checks passed`);
process.exit(failures ? 1 : 0);
