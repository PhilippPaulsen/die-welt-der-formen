/*
 * tools/test-start-page.cjs - task 139: the start pages (index.html, index_d.html) and the menus of all 8 pages.
 *   node tools/test-start-page.cjs
 * Task 171: the black Studio block is gone; the Studio link is a text link at the end of the last paragraph; the only script is gallery.js (the gallery).
 * The embedded prototype is gone (no p5, no cdnjs, no p5_prototype script, no interface block), the Studio entry is there with the language in its link, every menu lists
 * Studio directly after Start with the language in its link, the dead CSS of the prototype is gone, and p5_prototype/ and notebooks/p5.min.js are still in place.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
let failures = 0, checks = 0;
const check = (name, ok, detail) => { checks++; if (!ok) failures++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail !== undefined ? '  [' + detail + ']' : ''}`); };
const J = JSON.stringify;
const TEXT = {
  de: [
    'Der Naturforscher und Nobelpreisträger Wilhelm Ostwald veröffentlichte 1922 seine Formenlehre *Die Harmonie der Formen*. Bis 1928 folgten vier Mappenwerke unter dem Titel *Die Welt der Formen*, in denen die Lehre methodisch ausformuliert wurde. Die 240 Serien von Formen, auf transparenten Blättern gedruckt, erlauben unzählige Kombinationsmöglichkeiten und stellen ein frühes Beispiel regelbasierter Programmierung im Bereich von Kunst und Design dar.',
    'Ostwalds Farben- und Formlehre beeinflussten nicht nur den Werkbund, sondern auch das Bauhaus und die niederländische Kunstbewegung De Stijl. Designer wie Moholy-Nagy, Herbert Bayer oder später Vertreter der Konkreten Kunst wie Max Bill, Karl Gerstner, und besonders Hans Hinterreiter, nahmen seine Ideen begeistert auf. Dennoch ist Ostwalds Formenlehre – im Gegensatz zu seiner Farbenlehre – heute weitgehend in Vergessenheit geraten.',
    'Dieses Forschungsprojekt möchte dazu beitragen, Ostwalds Formenlehre einer breiteren Öffentlichkeit zugänglich zu machen: Im Herbst 2027 erscheint eine kritische Neuauflage im Verlag Spector Books Leipzig, die auch bisher unveröffentlichte Manuskripte und Fragmente einschließt, sowie Ostwalds Arbeiten im Spannungsfeld von Wissenschaft und Kunst, Gesetzmäßigkeit und Intuition, Ornament und Figuration einordnet. Begleitend dazu lädt diese digitale Plattform (aktuell im Beta-Status) dazu ein, Ostwalds Texte, Formen und Gesetze mithilfe von interaktiven Grafiken zu entdecken. Im [studio/?lang=de|Studio] lassen sich die Formen selbst erkunden.'],
  en: [
    'The natural scientist and Nobel laureate Wilhelm Ostwald published his theory of form, *The Harmony of Forms*, in 1922. Between 1922 and 1928, he expanded on this work through four portfolios titled *The World of Forms*, where the doctrine was methodically developed. The 240 series of shapes, printed on transparent sheets, allow countless combinations and represent an early example of rule-based programming in the realm of art and design.',
    'Ostwald’s theories of color and form influenced not only the Werkbund but also the Bauhaus and the Dutch art movement De Stijl. Designers such as Moholy-Nagy, Herbert Bayer, and later representatives of Concrete Art like Max Bill, Karl Gerstner, and especially Hans Hinterreiter enthusiastically adopted his ideas. Despite this, Ostwald’s theory of form—unlike his color theory—has largely fallen into obscurity today.',
    'This research project aims to make Wilhelm Ostwald’s theory of form accessible to a wider audience. In the fall of 2027, a critical new edition will be published by Spector Books Leipzig, including previously unpublished manuscripts and fragments. This edition will contextualize Ostwald’s work within the intersections of science and art, lawfulness and intuition, ornament and figuration. Complementing the publication, this digital platform (currently in beta) invites users to explore Ostwald’s texts, shapes, and principles through interactive graphics. In the [studio/?lang=en|Studio] you can explore the forms yourself.'],
};
const PAGES = [['index', 'en'], ['harmony', 'en'], ['world', 'en'], ['about', 'en'], ['index_d', 'de'], ['harmony_d', 'de'], ['world_d', 'de'], ['about_d', 'de']];
for (const [p, lang] of [['index', 'en'], ['index_d', 'de']]) {
    const h = read(p + '.html');
    check(`${p}.html: no cdnjs, no p5, no p5_prototype, no interface block`, !/cdnjs|p5\.min|p5\.dom|p5\.sound|p5_prototype|interface-container|p5-controls|canvas-container|btn-help|help-overlay/.test(h));
    check(`${p}.html: the only script is gallery.js (deferred, no inline script, no other source)`, J((h.match(/<script\b[^>]*>/gi) || [])) === J(['<script src="gallery.js" defer>']) && !/<script[^>]*>\s*[^<\s]/i.test(h.replace(/<script src="gallery\.js" defer><\/script>/, '')));
    check(`${p}.html: the black Studio block and its note are gone`, !/studio-entry/.test(h));
    const paras = [...h.match(/<section class="content">[\s\S]*<\/section>/)[0].matchAll(/<p>([\s\S]*?)<\/p>/g)].map(m => m[1].replace(/<a class="studio-link" href="([^"]+)">([^<]*)<\/a>/, '[$1|$2]').replace(/<\/?em>/g, '*').replace(/\s+/g, ' ').trim());
    check(`${p}.html: three paragraphs; the first two word for word as before`, paras.length === 3 && paras[0] === TEXT[lang][0] && paras[1] === TEXT[lang][1], paras.length);
    check(`${p}.html: the last paragraph is the old one (autumn / fall 2027) plus the short sentence about the Studio (task 175: the word Studio is the link, studio/?lang=${lang}, relative, no localhost)`, paras[2] === TEXT[lang][2], paras[2].slice(-170));
    check(`${p}.html: no localhost and no absolute Studio link in the page`, !/localhost|https?:\/\/[^"']*studio/i.test(h));
    check(`${p}.html: the gallery block comes before the heading, inside the content section`, h.indexOf('gallery:begin') > h.indexOf('<section class="content">') && h.indexOf('gallery:end') < h.indexOf('<h2>') && /<body class="editorial-page start-page">/.test(h) && /<link rel="stylesheet" href="gallery\.css">/.test(h));
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
for (const [p, lang] of PAGES) {
    const h = read(p + '.html');
    const hr = /<div class="header-right">([\s\S]*?)<\/nav>/.exec(h)[1];
    const label = lang === 'de' ? 'Navigation umschalten' : 'Toggle navigation menu';
    check(`${p}.html: header-right order = language switch (lang-before), the menu (hamburger and items), language switch (lang-after, task 179; tools/test-lang-switch.cjs checks the pair)`, hr.indexOf('class="lang-switch lang-before"') >= 0 && hr.indexOf('class="lang-switch lang-before"') < hr.indexOf('class="dropdown"') && hr.indexOf('class="dropdown"') < hr.indexOf('class="lang-switch lang-after"'));
    check(`${p}.html: the menu button has aria-label and title "${label}", aria-haspopup, and the shared hamburger drawing (viewBox 0 0 18 14, three 2px lines, no spans)`, new RegExp(`<button class="dropbtn" type="button" aria-label="${label}" title="${label}" aria-haspopup="true">\\s*<svg viewBox="0 0 18 14" aria-hidden="true"><path d="M0 1H18M0 7H18M0 13H18"/></svg>\\s*</button>`).test(hr) && !/class="hamburger"|<span><\/span>/.test(hr));
}
const css = read('style.css');
check('style.css: the prototype rules are gone', !/p5-controls|control-group|icon-row|button-group|shape-icon-btn|action-btn|#help-overlay|\.help-content|interface-container|canvas-container/.test(css));
check('style.css: task 176: the bar is 40px high below 768px (--bar-h) with a 16px inner margin, 60px above; the hamburger is a frameless 44 x 44 px button (margin-right -13px) with an 18 x 14 px drawing of 2px lines; the old three-span hamburger CSS is gone', /\.top-bar \{[^}]*--bar-h: 60px;[^}]*height: var\(--bar-h\)/.test(css) && /@media \(max-width: 767px\) \{\s*\.top-bar \{\s*--bar-h: 40px;\s*padding: 0 16px;/.test(css) && /\.dropbtn \{[^}]*width: 44px;[^}]*height: 44px;[^}]*margin: 0 -13px 0 0;/.test(css) && /\.dropbtn svg \{[^}]*width: 18px; height: 14px;[^}]*stroke-width: 2;/.test(css) && !/\.hamburger/.test(css));
check('style.css: the phone menu also opens for keyboard focus (.dropdown:focus-within, task 175), besides :hover', /@media \(max-width: 900px\)[\s\S]*\.dropdown:hover \.dropdown-content \{[\s\S]*?\}[\s\S]*\.dropdown:focus-within \.dropdown-content \{\s*display: flex;/.test(css));
check('notebooks/intro.js (not loaded by any page) says 2027 in both languages, no 2025 left', /Herbst 2027/.test(read('notebooks/intro.js')) && /fall of 2027/.test(read('notebooks/intro.js')) && !/2025/.test(read('notebooks/intro.js')));
check('style.css: the .studio-entry rules of the black block are gone (the block is gone)', !/studio-entry/.test(css));
check('p5_prototype/sketch.js and notebooks/p5.min.js are still there (not deleted)', fs.existsSync(path.join(ROOT, 'p5_prototype/sketch.js')) && fs.existsSync(path.join(ROOT, 'notebooks/p5.min.js')));
check('robots.txt still disallows /studio/ (soft launch)', /Disallow: \/studio\//.test(read('robots.txt')));
console.log(`\n${checks - failures}/${checks} checks passed`);
console.log(failures === 0 ? 'PASS' : 'FAIL');
process.exit(failures === 0 ? 0 : 1);
