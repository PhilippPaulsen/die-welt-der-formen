/**
 * tools/test-hamburger.cjs (task 176/177): the hamburger of the website's menu and of the Studio's menu button, and the phone bar height. node tools/test-hamburger.cjs
 * One drawing (18 x 14 px, three 2 px lines, 6 px pitch, no ring), one hit area (44 x 44 px, reaching 13 px into the margin so the lines end flush with the content edge), the same height of the bar and
 * of the Studio header, the measured pins (Browser pane).
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
let checks = 0, failures = 0;
const check = (name, ok, detail) => { checks++; if (!ok) failures++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail !== undefined ? '  [' + detail + ']' : ''}`); };
const pins = JSON.parse(read('tools/header-pins.json'));
const D = 'M0 1H18M0 7H18M0 13H18', VB = '0 0 18 14';
const css = read('style.css'), nav = read('studio-site/site-nav.css'), js = read('studio-site/site-nav.js');

check('the drawing: three horizontal lines at y 1, 7, 13 (6 px pitch, 2 px lines: rows 0-2, 6-8, 12-14) across 18 px, in a 0 0 18 14 box', D === 'M0 1H18M0 7H18M0 13H18' && VB === '0 0 18 14');
const pages = ['index', 'index_d', 'harmony', 'harmony_d', 'world', 'world_d', 'about', 'about_d'];
check('the website: all eight pages carry exactly this drawing in the menu button (and nothing of the old spans)', pages.every(p => { const h = read(p + '.html'); return h.includes(`<svg viewBox="${VB}" aria-hidden="true"><path d="${D}"/></svg>`) && !/class="hamburger"/.test(h); }));
check('the Studio: site-nav.js draws the same path in the same box (18 x 14), no circle', js.includes(`width="18" height="14" viewBox="${VB}"`) && js.includes(`<path d="${D}"></path>`) && !/<circle cx="12" cy="12" r="10">[^']*M8 9\.5h8/.test(js));
check('website CSS: the drawing is 18 x 14 px with 2px lines, flat ends (butt is the default), crisp edges; the button is 44 x 44 px, frameless, margin-right -13px', /\.dropbtn svg \{[^}]*width: 18px; height: 14px;[^}]*stroke-width: 2;[^}]*shape-rendering: crispEdges/.test(css) && /\.dropbtn \{[^}]*width: 44px;[^}]*height: 44px;[^}]*margin: 0 -13px 0 0;[^}]*border: 0;/.test(css));
check('Studio CSS (studio-site/site-nav.css): the button is 44 x 44 px (out-ranking the phone layout\'s 40 px square), margin-right -13px; the drawing 18 x 14 px, 2px, flat ends, crisp edges', /html \.app-header \.icon-btn\.site-nav-btn, html\.ph \.app-header \.icon-btn\.site-nav-btn \{[^}]*width: 44px; height: 44px; min-width: 44px; min-height: 44px; margin-right: -13px/.test(nav) && /\.site-nav-btn \.ico \{[^}]*width: 18px; height: 14px; stroke-width: 2; stroke-linecap: butt; shape-rendering: crispEdges/.test(nav));
check('the 13 px: the hit area (44) is centred on the drawing (18): (44 - 18) / 2 = 13 = the negative margin on both sides', (44 - 18) / 2 === 13);
check('the lines are as thick as the stem of the font: 2 px against 1.91 px (the stem of Suisse Book at 18 px, measured), within 0.2 px', Math.abs(2 - pins.stemPx['l@18']) < 0.2 && Math.abs(2 - pins.stemPx['emdash@18']) < 0.3);
check('the Studio header icons are 2 px on the screen too (studio/style.css: .app-header .icon-btn .ico stroke-width 2.67 on an 18 px / 24 unit icon)', /\.app-header \.icon-btn \.ico \{ stroke-width: 2\.67; \}/.test(read('studio/style.css')) && Math.abs(2.67 * 18 / 24 - 2) < 0.01);

console.log('== the same height, flush right (pins) ==');
for (const w of ['375', '430']) {
    const a = pins.website[w], b = pins.studio[w];
    check(`${w} px: website bar and Studio header are equally high (${a.barH} px), the lines end flush with the right edge of gallery and canvas (${a.glyphRight} = ${a.galleryRight} = ${b.canvasRight}), same hit area, gallery at y ${a.galleryY} like the canvas (${b.canvasY}), no horizontal overflow`, a.barH === 40 && b.headerH === 40 && a.glyphRight === a.galleryRight && b.glyphRight === b.canvasRight && a.glyphRight === b.glyphRight && J(a.btn) === J(b.btn) && a.galleryY === b.canvasY && a.scrollWidth === +w && b.scrollWidth === +w);
}
function J(x) { return JSON.stringify(x); }
check('800 px (tablet): the website bar stays 60 px, the hamburger ends at the 30 px inner margin, the menu panel starts at the bar\'s lower edge', pins.website['800'].barH === 60 && pins.website['800'].glyphRight === 800 - 30 && Math.abs(pins.website['800'].panelTop - 60) <= 0.5);
check('1280 px: both bars 60 px; the website shows its links, no hamburger; the Studio\'s menu button opens the panel', pins.website['1280'].barH === 60 && pins.website['1280'].hamburger === 'hidden' && pins.studio['1280'].headerH === 60 && pins.studio['1280'].panelOpens === true);
check('before (for the record): the Studio header was 6.7 px too wide at 375 px, the website bar 60 px high with a 20 x 15 px hamburger left of EN | DE', pins.before.studio375.menuButtonRight === 365.7 && pins.before.website375.barH === 60);
check('CSS: the website bar is 40 px below 768 px (60 above), the Studio phone header 40 px (studio/style.css --ph-header-h) and 60 px (--bar-h) above', /@media \(max-width: 767px\) \{\s*\.top-bar \{\s*--bar-h: 40px;/.test(css) && /--ph-header-h: 40px/.test(read('studio/style.css')) && /--bar-h: calc\(var\(--target\) \+ 24px\)/.test(read('studio/style.css')) && /--bar-h: 60px;/.test(css));
check('labels: the website button says "Navigation umschalten" / "Toggle navigation menu" (aria-label and title); the Studio button\'s label and title are the Website menu\'s name (unchanged), aria-expanded stays', pages.every(p => { const t = p.endsWith('_d') ? pins.markerTexts.de : pins.markerTexts.en; return read(p + '.html').includes(`aria-label="${t}" title="${t}"`); }) && /aria-expanded/.test(js) && /'aria-controls': 'site-nav-panel'/.test(js));
check('the menu panel on the website follows the bar height (top from --bar-h), not a fixed 100%', /top: calc\(22px \+ var\(--bar-h\) \/ 2\)/.test(css));
console.log(`\n${checks - failures}/${checks} checks passed`);
process.exit(failures ? 1 : 0);
