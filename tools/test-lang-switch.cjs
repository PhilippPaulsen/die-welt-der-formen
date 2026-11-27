/**
 * tools/test-lang-switch.cjs (task 179): the language switch EN | DE stands twice in the markup of all eight pages; exactly one is displayed. node tools/test-lang-switch.cjs
 * Up to 900 px (hamburger): brand, EN | DE, hamburger. From 901 px (the menu items stand in the bar): brand, the menu items, EN | DE as the LAST element, flush right at the bar's inner margin.
 * The checks are functions, run on the real files and on sabotaged copies (they must fail there).
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
let checks = 0, failures = 0;
const check = (name, ok, detail) => { checks++; if (!ok) failures++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail !== undefined ? '  [' + detail + ']' : ''}`); };
const J = JSON.stringify;
const pins = JSON.parse(read('tools/header-pins.json'));
const PAGES = [['index', 'en'], ['harmony', 'en'], ['world', 'en'], ['about', 'en'], ['index_d', 'de'], ['harmony_d', 'de'], ['world_d', 'de'], ['about_d', 'de']];
const norm = s => s.replace(/\s+/g, ' ').trim();

// -> list of problems (empty = fine) for one page's markup
function markupProblems(h, file, lang) {
    const bad = [];
    const blocks = [...h.matchAll(/<div class="lang-switch (lang-before|lang-after)">([\s\S]*?)<\/div>/g)];
    if (blocks.length !== 2 || blocks[0][1] !== 'lang-before' || blocks[1][1] !== 'lang-after') bad.push('need exactly one lang-before then one lang-after');
    if (blocks.length === 2) {
        const [a, b] = [norm(blocks[0][2]), norm(blocks[1][2])];
        if (a !== b) bad.push('the two blocks differ');
        const base = file.replace(/_d$/, '');
        const want = `<a href="${base}.html"${lang === 'en' ? ' class="active"' : ''}>EN</a> <span>|</span> <a href="${base}_d.html"${lang === 'de' ? ' class="active"' : ''}>DE</a>`;
        if (a !== want) bad.push('content is not the expected EN | DE with the active mark: ' + a);
        if (/\sid=|aria-|hidden|style=|tabindex/.test(blocks[0][2] + blocks[1][2])) bad.push('an id / aria / hidden / style / tabindex in a block');
    }
    const ids = [...h.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
    if (new Set(ids).size !== ids.length) bad.push('a duplicate id');
    const nav = /<nav class="top-bar">([\s\S]*?)<\/nav>/.exec(h)[1];
    const at = s => nav.indexOf(s);
    // DOM order = tab order: brand, EN | DE (before), hamburger button, menu items, EN | DE (after)
    if (!(at('class="brand"') < at('lang-before') && at('lang-before') < at('class="dropbtn"') && at('class="dropbtn"') < at('class="dropdown-content"') && at('class="dropdown-content"') < at('lang-after'))) bad.push('DOM order is not brand, before, hamburger, items, after');
    return bad;
}
// -> list of problems for the CSS: before shown up to 900 px, after from 901 px, never both, never none; 901 is the width from which the items are in the bar
function cssProblems(css) {
    const bad = [];
    if (!/\.lang-switch\.lang-after \{ display: none; \}/.test(css)) bad.push('lang-after is not hidden by default');
    if (!/@media \(min-width: 901px\) \{\s*\.lang-switch\.lang-before \{ display: none; \}\s*\.lang-switch\.lang-after \{ display: flex; \}\s*\}/.test(css)) bad.push('from 901 px: before must be hidden and after displayed');
    if (!/@media \(max-width: 900px\)/.test(css)) bad.push('the hamburger range is not max-width 900 px');
    if (/\.lang-switch\.lang-before\s*\{[^}]*display:\s*none/.test(css.replace(/@media \(min-width: 901px\) \{[\s\S]*?\n\}/, ''))) bad.push('lang-before is hidden outside the 901 px query');
    if (/\.lang-switch[^{]*\{[^}]*(visibility|opacity|clip)/.test(css)) bad.push('a visibility trick on the language switch');
    return bad;
}

console.log('== the eight pages ==');
for (const [file, lang] of PAGES) {
    const p = markupProblems(read(file + '.html'), file, lang);
    check(`${file}.html: two identical EN | DE blocks (text, links, the active mark ${lang.toUpperCase()}), no id / aria / hidden / style in them, no duplicate id, DOM order brand, EN | DE, hamburger, items, EN | DE`, p.length === 0, p.join('; '));
}
const css = read('style.css');
console.log('== the switch at 901 px ==');
check('style.css: exactly one block is displayed at every width: lang-before up to 900 px, lang-after from 901 px (display: none, no visibility trick); 901 px is the first width with the items in the bar', cssProblems(css).length === 0, cssProblems(css).join('; '));
check('the hamburger range and the language switch use the same boundary (max-width 900 px / min-width 901 px)', /@media \(max-width: 900px\)[\s\S]*?\.dropbtn \{[^}]*display: inline-flex/.test(css) && /@media \(min-width: 901px\)/.test(css));

console.log('== pins (Browser pane) ==');
const P = pins.website, hdr = pins.websiteLangRight;
check('pins: widths 768, 900, 901, 1024, 1280, 1920 are all there', ['768', '900', '901', '1024', '1280', '1920'].every(w => hdr[w]));
for (const w of Object.keys(hdr)) {
    const e = hdr[w], W = +w;
    if (W < 901) check(`${w} px (hamburger range, unchanged): EN | DE is the block BEFORE the menu, left of the hamburger; the other block is not displayed; the hamburger's lines end at W - 30`, e.visible === 'before' && e.hidden === 'after' && e.langRight < e.hamburgerGlyphRight && e.hamburgerGlyphRight === W - 30 && e.bothVisible === false && e.noneVisible === false);
    else check(`${w} px (items in the bar): EN | DE is the block AFTER the menu and the LAST element, its right edge is W - 20 (${W - 20}), the items end 20 px to its left, Start at ${e.startX}; exactly one block displayed`, e.visible === 'after' && e.hidden === 'before' && e.langRight === W - 20 && Math.abs(e.startX + e.itemsWidthDe + 20 - e.langX) < 0.2 && e.langX + e.langWidth === e.langRight && e.bothVisible === false && e.noneVisible === false);
}
check('pins: the boundary is exact: 900 px shows the block before, 901 px the block after, nothing in between is shown twice or not at all', hdr['900'].visible === 'before' && hdr['901'].visible === 'after');
check('pins: EN | DE moved only above 900 px (Start from the former x to x - 84.8 = the stand before task 176): 901 px 519 -> 434.2, 1280 px 898 -> 813.2', hdr['901'].startBefore === 519 && hdr['1280'].startBefore === 898 && Math.abs(hdr['901'].startX - (519 - 84.8)) < 0.1 && Math.abs(hdr['1280'].startX - (898 - 84.8)) < 0.1);
check('pins: the phone pins are unchanged (header-pins.json website 375 / 430 / 800 / 1280 as before task 179)', J(P['375']) === J({ barH: 40, glyphRight: 359, galleryRight: 359, btn: [328, -2.5, 44, 44], galleryY: 48, scrollWidth: 375 }) && J(P['430']) === J({ barH: 40, glyphRight: 414, galleryRight: 414, btn: [383, -2.5, 44, 44], galleryY: 48, scrollWidth: 430 }));
check('pins: the long brand of the notebook pages (221 px) fits beside the items at 901 px, DE and EN: no wrap, the gap between brand and items is at least 150 px', pins.notebooks901.every(n => n.noWrap === true && n.gap >= 150), pins.notebooks901.map(n => n.page + ' ' + n.gap).join(', '));

console.log('== sabotage: the checks fail when it is wrong ==');
const html = read('index_d.html'), cssNow = css;
check('sabotage 1: the blocks in the old order (EN | DE before the menu only, no second block) -> the markup check fails', markupProblems(html.replace(/\s*<div class="lang-switch lang-after">[\s\S]*?<\/div>/, ''), 'index_d', 'de').length > 0);
check('sabotage 2: EN | DE moved back in front of the items at 901 px (lang-before shown, lang-after hidden) -> the CSS check fails', cssProblems(cssNow.replace('.lang-switch.lang-before { display: none; }', '.lang-switch.lang-before { display: flex; }')).length > 0);
check('sabotage 3: both blocks shown at 901 px (the hiding of lang-before removed) -> the CSS check fails', cssProblems(cssNow.replace(/\n\s*\.lang-switch\.lang-before \{ display: none; \}/, '')).length > 0);
check('sabotage 4: the second block hidden by a visibility trick -> fails', cssProblems(cssNow + '\n.lang-switch.lang-after { visibility: hidden; }').length > 0);
check('sabotage 5: the boundary at 900 px instead of 901 px -> fails', cssProblems(cssNow.replace('@media (min-width: 901px) {\n  .lang-switch.lang-before', '@media (min-width: 900px) {\n  .lang-switch.lang-before')).length > 0);
check('sabotage 6: the two blocks swapped in the DOM (after before the menu) -> the order check fails', markupProblems(html.replace('lang-before', 'TMP').replace('lang-after', 'lang-before').replace('TMP', 'lang-after'), 'index_d', 'de').length > 0);
check('sabotage 7: the active mark wrong in one block (DE page, EN marked in the second block) -> fails', markupProblems(html.replace(/(lang-after">[\s\S]*?)<a href="index\.html">EN<\/a>/, '$1<a href="index.html" class="active">EN</a>'), 'index_d', 'de').length > 0);
check('sabotage 8: a duplicate id or an aria-hidden in a block -> fails', markupProblems(html.replace('<div class="lang-switch lang-after">', '<div class="lang-switch lang-after" aria-hidden="true">'), 'index_d', 'de').length > 0);
console.log(`\n${checks - failures}/${checks} checks passed`);
process.exit(failures ? 1 : 0);
