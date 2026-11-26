/*
 * tools/test-start-page.cjs - task 139: the start pages (index.html, index_d.html) and the menus of all 8 pages.
 *   node tools/test-start-page.cjs
 * The embedded prototype is gone (no p5, no cdnjs, no p5_prototype script, no interface block), the Studio entry is there with the language in its link, every menu lists
 * Studio directly after Start with the language in its link, the dead CSS of the prototype is gone, and p5_prototype/ and notebooks/p5.min.js are still in place.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
let failures = 0, checks = 0;
const check = (name, ok, detail) => { checks++; if (!ok) failures++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail !== undefined ? '  [' + detail + ']' : ''}`); };
const PAGES = [['index', 'en'], ['harmony', 'en'], ['world', 'en'], ['about', 'en'], ['index_d', 'de'], ['harmony_d', 'de'], ['world_d', 'de'], ['about_d', 'de']];
for (const [p, lang] of [['index', 'en'], ['index_d', 'de']]) {
    const h = read(p + '.html');
    check(`${p}.html: no cdnjs, no p5, no p5_prototype, no interface block`, !/cdnjs|p5\.min|p5\.dom|p5\.sound|p5_prototype|interface-container|p5-controls|canvas-container|btn-help|help-overlay/.test(h));
    check(`${p}.html: no <script> at all (the start page needs none)`, !/<script/i.test(h));
    const m = /<a class="studio-entry" href="([^"]+)">/.exec(h);
    check(`${p}.html: the Studio entry links to studio/?lang=${lang}`, !!m && m[1] === `studio/?lang=${lang}`, m && m[1]);
    check(`${p}.html: the entry comes before the text, followed by one sentence`, h.indexOf('studio-entry"') > h.indexOf('<h2>') && h.indexOf('studio-entry"') < h.indexOf('<p>\n') && /class="studio-entry-note"/.test(h));
    check(`${p}.html: the existing text is still there (3 paragraphs)`, (h.match(/<section class="content">[\s\S]*<\/section>/)[0].match(/<p>\s/g) || []).length === 3);
}
for (const [p, lang] of PAGES) {
    const h = read(p + '.html');
    const menu = /<div class="dropdown-content">([\s\S]*?)<\/div>/.exec(h)[1];
    const links = [...menu.matchAll(/<a href="([^"]+)"[^>]*>([^<]*)<\/a>/g)].map(m => m[1]);
    const suffix = lang === 'de' ? '_d' : '';
    const want = [`index${suffix}.html`, `studio/?lang=${lang}`, `harmony${suffix}.html`, `world${suffix}.html`, `about${suffix}.html`];
    check(`${p}.html: menu = Start, Studio (?lang=${lang}), Harmony, World, About in this order`, JSON.stringify(links) === JSON.stringify(want), links.join(' '));
    check(`${p}.html: exactly one active entry in the menu`, (menu.match(/class="active"/g) || []).length === 1);
}
const css = read('style.css');
check('style.css: the prototype rules are gone', !/p5-controls|control-group|icon-row|button-group|shape-icon-btn|action-btn|#help-overlay|\.help-content|interface-container|canvas-container/.test(css));
check('style.css: .studio-entry rules exist (black block, white text, 72px)', /\.content a\.studio-entry[\s\S]*?background: #000;[\s\S]*?color: #fff;/.test(css) && /height: 72px/.test(css));
check('p5_prototype/sketch.js and notebooks/p5.min.js are still there (not deleted)', fs.existsSync(path.join(ROOT, 'p5_prototype/sketch.js')) && fs.existsSync(path.join(ROOT, 'notebooks/p5.min.js')));
check('robots.txt still disallows /studio/ (soft launch)', /Disallow: \/studio\//.test(read('robots.txt')));
console.log(`\n${checks - failures}/${checks} checks passed`);
console.log(failures === 0 ? 'PASS' : 'FAIL');
process.exit(failures === 0 ? 0 : 1);
