/**
 * tools/test-gallery.cjs (task 171): the gallery of the two start pages. node tools/test-gallery.cjs
 * built = committed, order and texts from the manifest, complete without JavaScript, images (size, shape), the controls' values against the synced Studio, the position pins, links relative.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');
const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
let checks = 0, failures = 0;
const check = (name, ok, detail) => { checks++; if (!ok) failures++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail !== undefined ? '  [' + detail + ']' : ''}`); };
const J = JSON.stringify;
const B = require('./build-start.cjs');
const man = JSON.parse(read('studio/presets/manifest.json'));
const gal = man.presets.filter(p => p.gallery).sort((a, b) => a.gallery.order - b.gallery.order);

console.log('== built = committed, from the manifest ==');
const built = B.build();
check('index_d.html and index.html are exactly what tools/build-start.cjs builds', Object.entries(built).every(([f, t]) => read(f) === t));
check('the manifest has five gallery exhibits in the order lines, fill, sine, projective, rotation', J(gal.map(p => p.slug)) === J(['quadrat-linien', 'quadrat-spiegelung-flaeche', 'quadrat-spiegelung-sinus', 'quadrat-spiegelung-projektiv', 'quadrat-drehung-flaeche']));
for (const [file, lang] of [['index_d.html', 'de'], ['index.html', 'en']]) {
    const h = read(file);
    const region = h.slice(h.indexOf('gallery:begin'), h.indexOf('gallery:end'));
    const slides = [...region.matchAll(/<figure class="g-slide" id="g(\d+)" data-href="([^"]+)"[^>]*aria-label="([^"]+)">([\s\S]*?)<\/figure>/g)];
    check(`${file}: five slides, ids g1..g5, in the manifest's order`, slides.length === 5 && slides.every((m, i) => m[1] === String(i + 1) && m[2] === `p/${gal[i].slug}/?lang=${lang}`));
    check(`${file}: every slide carries its image (the manifest's file), alt text and caption in ${lang.toUpperCase()}`, slides.every((m, i) => m[4].includes(`src="assets/presets/${gal[i].gallery.image}"`) && m[4].includes(`alt="${gal[i].gallery.alt[lang].replace(/"/g, '&quot;')}"`) && m[4].includes(`<figcaption><span>${gal[i].gallery.caption[lang]}</span>`)));
    check(`${file}: the slide labels read "n ${lang === 'de' ? 'von' : 'of'} 5"`, slides.every((m, i) => m[3] === `${i + 1} ${lang === 'de' ? 'von' : 'of'} 5`));
    check(`${file}: the first image is not lazy, the others are; every image has width and height 600`, !/loading="lazy"/.test(slides[0][4]) && slides.slice(1).every(m => /loading="lazy"/.test(m[4])) && slides.every(m => /width="600" height="600"/.test(m[4])));
    check(`${file}: each slide has the open icon: a link with aria-label and title "${lang === 'de' ? 'Preset im Studio öffnen' : 'Open preset in the Studio'}" to p/<slug>/?lang=${lang}`, slides.every((m, i) => m[4].includes(`class="icon-btn g-open" href="p/${gal[i].slug}/?lang=${lang}" aria-label="${lang === 'de' ? 'Preset im Studio öffnen' : 'Open preset in the Studio'}" title=`)));
    check(`${file}: links are relative (no localhost, no absolute URL) and carry ?lang=${lang}`, !/localhost|https?:\/\//.test(region.replace(/xmlns="[^"]*"/g, '')) && [...region.matchAll(/href="([^"]+)"/g)].every(m => m[1] === `p/${m[1].split('/')[1]}/?lang=${lang}`));
    check(`${file}: complete without JavaScript: the region has the slides, the captions and the links in the HTML, and no <script>`, slides.length === 5 && !/<script/.test(region));
    check(`${file}: the strip can be focused and labelled, the section is a labelled carousel`, /<section class="gallery" aria-roledescription="[^"]+" aria-label="[^"]+">/.test(region) && /<div class="g-viewport" tabindex="0" role="group" aria-label="[^"]+">/.test(region));
    check(`${file}: no id twice`, (() => { const ids = [...h.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]); return new Set(ids).size === ids.length; })());
}

console.log('== images ==');
for (const p of gal) {
    const f = path.join('assets', 'presets', p.gallery.image), svg = read(f);
    const size = fs.statSync(path.join(ROOT, f)).size;
    check(`${p.slug}.svg: under 150 KB, a 600 x 600 sheet, no <title>, no script, no external reference`, size < 150 * 1024 && /<svg [^>]*viewBox="0 0 600 600"/.test(svg) && /width="600" height="600"/.test(svg) && !/<title>|<script|href=|xlink:|<image|<foreignObject/.test(svg), size + ' B');
    const outside = svg.split('\n').filter(line => { const m = /<(path|polygon)\b[^>]*?\b(d|points)="([^"]*)"/.exec(line); if (!m || (m[1] === 'path' && /[A-Za-z]/.test(m[3].replace(/[MLCZ]/g, '')))) return false; const n = (m[3].match(/-?\d+(?:\.\d+)?/g) || []).map(Number); if (n.length < 2) return false; const xs = n.filter((_, i) => i % 2 === 0), ys = n.filter((_, i) => i % 2 === 1); return Math.max(...xs) < -1 || Math.max(...ys) < -1 || Math.min(...xs) > 601 || Math.min(...ys) > 601; }).length;
    check(`${p.slug}.svg: nothing lies completely outside the sheet (the export's tiling is clipped)`, outside === 0, outside + ' outside');
}
check('assets/presets/ holds the five gallery svgs (and, task 172, the png files)', gal.every(p => fs.existsSync(path.join(ROOT, 'assets', 'presets', p.gallery.image))));

console.log('== controls and position against the Studio ==');
const css = read('gallery.css'), js = read('gallery.js'), sCss = read('studio/style.css'), sHtml = read('studio/index.html');
check('Studio: --target 36px (48px on a coarse pointer), --radius 6px, canvas max 560px, gutter 16px, hover #f0f0f0', /--target: 48px;/.test(sCss) && /--target: 36px;/.test(sCss) && /--radius: 6px;/.test(sCss) && /--canvas-max: 560px;/.test(sCss) && /--gutter: 16px;/.test(sCss) && /--hover-bg: #f0f0f0;/.test(sCss + sHtml));
check('gallery.css uses the same values: 36px / 48px (coarse), radius 6px, hover #f0f0f0, frame min(560px, 100vw - 32px)', /--g-target: 36px/.test(css) && /pointer: coarse\) \{ :root \{ --g-target: 48px/.test(css) && /--g-radius: 6px/.test(css) && /--g-hover: #f0f0f0/.test(css) && /--g-cv: min\(560px, calc\(100vw - 32px\)\)/.test(css));
check('the Studio stepper chevron is M6 15 L12 9 L18 15; gallery.js draws it turned (left M15 6 L9 12 L15 18, right M9 6 L15 12 L9 18) with the Studio icon line (1.75, round, 18px)', sHtml.includes('M6 15 L12 9 L18 15') && js.includes('M15 6 L9 12 L15 18') && js.includes('M9 6 L15 12 L9 18') && /\.gallery \.ico \{[^}]*stroke-width: 1\.75[^}]*stroke-linecap: round[^}]*width: 18px; height: 18px/.test(css) && /\.ico \{[^}]*stroke-width: 1\.75/.test(sCss));
check('the controls have no visible border (transparent) but the 1px box of the Studio icon button, no autoplay in gallery.js', /\.gallery \.icon-btn \{[^}]*border: 1px solid transparent/.test(css) && !/setInterval|autoplay/i.test(js.replace(/\/\/.*$/gm, '')));   // comments stripped: the file says "No autoplay" in a comment
check('reduced motion: smooth scrolling only without prefers-reduced-motion; keyboard: left/right on the strip; the invisible live text "n von m" exists', /prefers-reduced-motion: no-preference\) \{ \.g-viewport \{ scroll-behavior: smooth/.test(css) && /ArrowLeft/.test(js) && /ArrowRight/.test(js) && /aria-live="polite"/.test(js));
check('invisible slides are out of the tab order and hidden from screen readers (tabIndex -1, aria-hidden); the slides\' caption links (the bar has the one open link) are never tabbable', /tabIndex = k === idx \? 0 : -1/.test(js) && /aria-hidden/.test(js) && /figcaption a'\), function \(a\) \{ a\.tabIndex = -1/.test(js));
check('the caption has no vertical offset (Safari is the reference, task 175): no top / position: relative on .g-text', !/\.g-text \{[^}]*((?<![-\w])top:|position: relative)/.test(css));
check('the phone caption is centred on the buttons by their size, not by a fixed number (padding-top from --g-target)', /padding-top: calc\(\(var\(--g-target\) - 1\.4em\) \/ 2\)/.test(css));
const pins = JSON.parse(read('tools/gallery-position-pins.json'));
check('position pins: the gallery frame sits where the Studio canvas sits (same x and width on desktop and phone, same y on desktop; the phone y is 20 px lower: 60 px bar against 40 px header)', J({ x: pins.gallery.desktop.x, y: pins.gallery.desktop.y, w: pins.gallery.desktop.w }) === J(pins.studio.desktop) && pins.gallery.phone.x === pins.studio.phone.x && pins.gallery.phone.w === pins.studio.phone.w && pins.gallery.phone.y - pins.studio.phone.y === 20);
check('the CSS puts the frame there: .gallery margin-top 14px (desktop) / -28px (phone) under the .content padding; text column 560px', /\.gallery \{ margin: 14px 0 0/.test(css) && /\(max-width: 767px\) \{ \.gallery \{ margin-top: -28px/.test(css) && /\.start-page \.content \{ max-width: 560px/.test(css));

console.log('== the sheet the user sees without images or script ==');
for (const [file, lang] of [['index_d.html', 'de'], ['index.html', 'en']]) {
    const h = read(file);
    const last = [...h.matchAll(/<p>([\s\S]*?)<\/p>/g)].pop()[1];
    check(`${file}: the way into the Studio is in the page text itself (the word "Studio" in the last sentence of the last paragraph is the link, studio/?lang=${lang}) and in the menu`, new RegExp(`<a class="studio-link" href="studio/\\?lang=${lang}">Studio</a>[^<]*\\.\\s*$`).test(last) && h.includes(`<a href="studio/?lang=${lang}">Studio</a>`));
}
check('robots.txt unchanged (only /studio/ is disallowed)', read('robots.txt').trim() === 'User-agent: *\nDisallow: /studio/');
check('no font file or @font-face in gallery.css / gallery.js / the start pages (the font comes from style.css as before)', !/@font-face|\.woff|font-family/.test(css + js));
console.log(`\n${checks - failures}/${checks} checks passed`);
process.exit(failures ? 1 : 0);
