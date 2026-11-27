// gallery.js (task 171). The start page's gallery. The HTML holds the slides only (complete and readable without JavaScript); this adds the strip behaviour, the controls under it and ONE caption
// area that follows the slide. Arrows, left/right on the focused strip, swipe/scroll natively (CSS scroll-snap). No autoplay. The strings come from <html lang>.
(function () {
  'use strict';
  document.documentElement.classList.add('js');
  var g = document.querySelector('.gallery'); if (!g) return;
  var L = { de: { of: 'von', prev: 'Voriges Bild', next: 'Nächstes Bild', open: 'Preset im Studio öffnen' }, en: { of: 'of', prev: 'Previous image', next: 'Next image', open: 'Open preset in the Studio' } }[document.documentElement.lang === 'en' ? 'en' : 'de'];
  var vp = g.querySelector('.g-viewport'), slides = [].slice.call(g.querySelectorAll('.g-slide')), idx = 0;
  // the Studio stepper's chevron (M6 15 L12 9 L18 15) turned to the left and to the right; the open icon is drawn in the same line style (24 grid, 1.75 line, round ends)
  var ICON = { l: '<path d="M15 6 L9 12 L15 18"/>', r: '<path d="M9 6 L15 12 L9 18"/>', o: '<path d="M10 5 H5 V19 H19 V14"/><path d="M14 5 H19 V10"/><path d="M19 5 L11 13"/>' };
  function svg(p) { return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + p + '</svg>'; }
  var bar = document.createElement('div'); bar.className = 'g-bar';
  bar.innerHTML = '<p class="g-text"></p><div class="g-btns"><button class="icon-btn g-prev" type="button" aria-label="' + L.prev + '" title="' + L.prev + '">' + svg(ICON.l) + '</button><button class="icon-btn g-next" type="button" aria-label="' + L.next + '" title="' + L.next + '">' + svg(ICON.r) + '</button><a class="icon-btn g-open" href="#" aria-label="' + L.open + '" title="' + L.open + '">' + svg(ICON.o) + '</a></div><span class="g-sr" aria-live="polite"></span>';
  vp.after(bar);
  var prev = bar.querySelector('.g-prev'), next = bar.querySelector('.g-next'), sr = bar.querySelector('.g-sr'), text = bar.querySelector('.g-text'), open = bar.querySelector('.g-open');
  function show(i) {
    idx = Math.max(0, Math.min(slides.length - 1, i));
    var s = slides[idx];
    sr.textContent = (idx + 1) + ' ' + L.of + ' ' + slides.length;
    text.textContent = s.querySelector('figcaption span').textContent;
    open.href = s.getAttribute('data-href');
    prev.disabled = idx === 0; next.disabled = idx === slides.length - 1;
    slides.forEach(function (sl, k) { sl.querySelector('.g-frame').tabIndex = k === idx ? 0 : -1; sl.setAttribute('aria-hidden', k === idx ? 'false' : 'true'); });
  }
  function go(i) { i = Math.max(0, Math.min(slides.length - 1, i)); vp.scrollTo({ left: i * vp.clientWidth }); show(i); }
  prev.addEventListener('click', function () { go(idx - 1); });
  next.addEventListener('click', function () { go(idx + 1); });
  vp.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1); } else if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1); } });
  var t; vp.addEventListener('scroll', function () { clearTimeout(t); t = setTimeout(function () { show(Math.round(vp.scrollLeft / vp.clientWidth)); }, 60); });
  show(0);
})();
