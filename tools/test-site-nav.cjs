/*
 * tools/test-site-nav.cjs - task 140: studio-site/site-nav.js and .css (the website menu and the language switch inside the Studio) and the hook in tools/sync-studio.sh.
 *   node tools/test-site-nav.cjs
 * Runs site-nav.js in a vm without a header (init() then does nothing) to test the pure parts: the link lists per language and the language URL.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const cp = require('child_process');
const ROOT = path.join(__dirname, '..');
const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
let failures = 0, checks = 0;
const check = (name, ok, detail) => { checks++; if (!ok) failures++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail !== undefined ? '  [' + detail + ']' : ''}`); };

const js = read('studio-site/site-nav.js'), css = read('studio-site/site-nav.css');
const ctx = vm.createContext({ document: { readyState: 'complete', currentScript: { src: 'https://www.die-welt-der-formen.de/studio-site/site-nav.js' }, querySelector: () => null, getElementById: () => null, querySelectorAll: () => [], addEventListener() {} }, window: {}, URL, location: { href: 'https://www.die-welt-der-formen.de/studio/?lang=de#farbe' }, console });
ctx.window = ctx;
vm.runInContext(js, ctx, { filename: 'site-nav.js' });
const api = ctx.wofSiteNav;

check('the website root is found from the script URL (studio-site/ lies next to studio/)', api.root === 'https://www.die-welt-der-formen.de/', api.root);
const en = api.links('en'), de = api.links('de');
check('EN menu: Start, Studio (the page itself, no link), Harmony, World, About', en.map(x => x.label).join('|') === 'Start|Studio|Harmony|World|About' && en[1].href === null && en.filter(x => x.href).length === 4);
check('EN links go to index.html, harmony.html, world.html, about.html', en.filter(x => x.href).map(x => x.href.replace(api.root, '')).join(' ') === 'index.html harmony.html world.html about.html');
check('DE menu: Start, Studio, Harmonie, Welt, Über with the *_d.html pages', de.map(x => x.label).join('|') === 'Start|Studio|Harmonie|Welt|Über' && de.filter(x => x.href).map(x => x.href.replace(api.root, '')).join(' ') === 'index_d.html harmony_d.html world_d.html about_d.html');
check('an unknown language reads as German (the Studio default)', api.links('xx').map(x => x.label)[2] === 'Harmonie');
check('the language URL replaces ?lang= and keeps the hash', api.langUrl('https://x.de/studio/?lang=de#farbe', 'en') === 'https://x.de/studio/?lang=en#farbe');
check('...adds ?lang= where there is none and keeps other parameters', api.langUrl('https://x.de/studio/?mode=advanced#netz', 'de') === 'https://x.de/studio/?mode=advanced&lang=de#netz');
check('...never produces anything but en or de', api.langUrl('https://x.de/studio/', 'fr').endsWith('lang=de'));
check('the script does not touch storage and reads only uiI18n from the generator', !/localStorage|sessionStorage/.test(js) && (js.match(/window\.([A-Za-z0-9]+)/g) || []).filter(w => !['window.wofSiteNav', 'window.uiI18n'].includes(w)).length === 0);
check('the language links compute their target at the click, so the tab (hash) is kept (a plain click is intercepted, a modified click keeps the href)', /addEventListener\('click'[\s\S]*?location\.assign\(langUrl\(location\.href, code\)\)/.test(js) && /e\.metaKey \|\| e\.ctrlKey \|\| e\.shiftKey/.test(js));
check('the CSS hides the button below 375px and shows the Help block there (and nowhere else)', /not all and \(min-width: 375px\)[\s\S]*?\.site-nav-btn[\s\S]*?display: none/.test(css) && /\.site-nav-help \{ display: none; \}/.test(css) && /\.site-nav-help \{ display: block;/.test(css));
check('the CSS has no shadow and no gradient (minimal style)', !/box-shadow|gradient|backdrop-filter/.test(css));

console.log('\n== tools/sync-studio.sh ==');
const sh = read('tools/sync-studio.sh');
check('the script is version 4 (task 162; the hook lines are from version 3) and writes the hook into the COPY (before rsync), checks it exactly once, and names it in SYNC.md', /SCRIPT_VERSION=4/.test(sh) && /data-site-hook/.test(sh) && /grep -c 'data-site-hook'/.test(sh) && /Site hook:/.test(sh));
check('the hook is inserted after the reference check (the check must not see ../studio-site)', sh.indexOf('Site hook (task 140)') > sh.indexOf('reference check failed'));
check('the script requires studio-site/site-nav.js and .css in the website repo', /studio-site\/site-nav\.css/.test(sh) && /studio-site\/site-nav\.js/.test(sh));
check('ui-mode.js is still a required file of the copy (task 135)', /ui-mode\.js/.test(sh));
check('studio-site/ is not inside studio/ (rsync --delete can never remove it)', fs.existsSync(path.join(ROOT, 'studio-site/site-nav.js')) && !fs.existsSync(path.join(ROOT, 'studio/studio-site')));

console.log('\n== studio/ (generated) ==');
const sync = fs.existsSync(path.join(ROOT, 'studio/SYNC.md')) ? read('studio/SYNC.md') : '';
const ver = +((/Script version: (\d+)/.exec(sync) || [])[1] || 0);
if (ver >= 3) {
    const idx = read('studio/index.html');
    check('studio/index.html carries the hook exactly once, last before </body>', (idx.match(/data-site-hook/g) || []).length === 1 && /<script src="\.\.\/studio-site\/site-nav\.js" defer data-site-hook><\/script>\s*<\/body>/.test(idx));
    check('SYNC.md names the site hook', /Site hook:/.test(sync));
} else console.log('NOTE  studio/ was synced with an older script (version ' + ver + '): the hook is checked after the next sync');
const gen = path.join(ROOT, '..', 'world_of_forms_generator');
if (fs.existsSync(gen)) {
    const src = cp.execSync('git show main:index.html', { cwd: gen, maxBuffer: 1 << 26 }).toString();
    check('the generator source index.html has NO site hook (it stays website-independent)', !/data-site-hook|studio-site/.test(src));
}
console.log(`\n${checks - failures}/${checks} checks passed`);
console.log(failures === 0 ? 'PASS' : 'FAIL');
process.exit(failures === 0 ? 0 : 1);
