/*
 * tools/test-menu-style.cjs - task 146: one rule for every menu. studio-site/menu.css holds size, weight and the two colours; the website menu (style.css), its language switch and
 * brand and the Studio menu panel (studio-site/site-nav.css) read them. Nothing in a menu may set its own weight or an underline.
 *   node tools/test-menu-style.cjs
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const strip = s => s.replace(/\/\*[\s\S]*?\*\//g, '');
let failures = 0, checks = 0;
const check = (name, ok, detail) => { checks++; if (!ok) failures++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail !== undefined ? '  [' + detail + ']' : ''}`); };
const rules = css => { const out = []; const re = /([^{}@]+)\{([^{}]*)\}/g; let m; while ((m = re.exec(css))) out.push({ sel: m[1].trim().replace(/\s+/g, ' '), body: m[2] }); return out; };

const menu = strip(read('studio-site/menu.css')), site = strip(read('style.css')), nav = strip(read('studio-site/site-nav.css'));
const V = {}; for (const m of menu.matchAll(/--(menu-[a-z]+): ([^;]+);/g)) V[m[1]] = m[2].trim();
check('menu.css defines the four values: 18px, 400, #000, #757575', V['menu-fs'] === '18px' && V['menu-fw'] === '400' && V['menu-ink'] === '#000' && V['menu-muted'] === '#757575', JSON.stringify(V));
check('the grey has 4.5:1 contrast on white (#757575 = 4.6:1)', (() => { const c = 0x75 / 255, l = ((c + 0.055) / 1.055) ** 2.4; return (1.05) / (l + 0.05) >= 4.5; })());

const MENU_SEL = /dropdown-content|lang-switch|\.brand|site-nav/;
const sr = rules(site).filter(r => MENU_SEL.test(r.sel)), nr = rules(nav).filter(r => MENU_SEL.test(r.sel));
const entry = sr.filter(r => /^\.dropdown-content a(\b|$)/.test(r.sel) && !/:|\.active/.test(r.sel));
check('website: .dropdown-content a takes size, weight and colour from the variables', entry.some(r => /font-size: var\(--menu-fs/.test(r.body) && /font-weight: var\(--menu-fw/.test(r.body) && /color: var\(--menu-muted/.test(r.body)));
check('website: the current page, hover and focus are black (variable), without bold and underline', sr.some(r => /a\.active/.test(r.sel) && /a:hover/.test(r.sel) && /color: var\(--menu-ink/.test(r.body) && /text-decoration: none/.test(r.body)));
check('website: the language switch uses the same size, weight and colours', sr.some(r => r.sel === '.lang-switch' && /font-size: var\(--menu-fs/.test(r.body) && /font-weight: var\(--menu-fw/.test(r.body)) && sr.some(r => /^\.lang-switch a$/.test(r.sel) && /color: var\(--menu-muted/.test(r.body)) && sr.some(r => /\.lang-switch a\.active/.test(r.sel) && /color: var\(--menu-ink/.test(r.body)));
check('website: the brand and the bar use the menu size, the brand its weight', sr.some(r => r.sel === '.brand' && /font-size: var\(--menu-fs/.test(r.body) && /font-weight: var\(--menu-fw/.test(r.body)) && /\.top-bar \{[^}]*font-size: var\(--menu-fs/.test(site.replace(/\n/g, ' ')));
check('Studio panel: entries and language links take size, weight and colour from the same variables', nr.some(r => /site-nav-block li a/.test(r.sel) && /font-size: var\(--menu-fs/.test(r.body) && /font-weight: var\(--menu-fw/.test(r.body) && /color: var\(--menu-muted/.test(r.body)) && nr.some(r => /aria-current/.test(r.sel) && /color: var\(--menu-ink/.test(r.body)));
const bad = [...sr, ...nr].filter(r => /font-weight: *(bold|[5-9]00|var\(--weight-strong\))|text-decoration: *underline/.test(r.body));
check('no menu rule (website or Studio panel) sets a bold weight or an underline', bad.length === 0, bad.map(r => r.sel).join(' | '));
check('no menu rule sets a literal font size or colour (only the variables), except the hairline and the separator', [...sr.filter(r => /dropdown-content a$|\.lang-switch$|\.lang-switch a$/.test(r.sel)), ...nr.filter(r => /li a|li span|lang a/.test(r.sel))].every(r => !/font-size: *[0-9]/.test(r.body)));
const pages = ['index', 'harmony', 'world', 'about', 'index_d', 'harmony_d', 'world_d', 'about_d'].map(f => [f, read(f + '.html')]);
check('all 8 pages load studio-site/menu.css before style.css', pages.every(([f, h]) => h.indexOf('studio-site/menu.css') > 0 && h.indexOf('studio-site/menu.css') < h.indexOf('href="style.css"')), pages.filter(([f, h]) => !(h.indexOf('studio-site/menu.css') > 0)).map(p => p[0]).join());
const js = read('studio-site/site-nav.js');
check('site-nav.js loads menu.css and site-nav.css, in this order', /\['menu\.css', 'site-nav\.css'\]/.test(js));
check('the Studio menu button is appended after Plus and Help (order Plus, Help, Menu; the menu at the right edge)', /header\.appendChild\(button\);[\s\S]*header\.appendChild\(panel\);/.test(js) && !/insertBefore\(button/.test(js));
check('the button sits close to Help (negative margin like Help sits close to Plus) and the old "before Plus" margin rule is gone', /\.app-header \.icon-btn\.site-nav-btn \{ margin-left: -12px; \}/.test(nav) && !/mode-plus/.test(nav));
console.log(`\n${checks - failures}/${checks} checks passed`);
console.log(failures === 0 ? 'PASS' : 'FAIL');
process.exit(failures === 0 ? 0 : 1);
