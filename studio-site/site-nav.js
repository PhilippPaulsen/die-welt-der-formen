/*
 * studio-site/site-nav.js (task 140). WEBSITE-owned, not part of the generator: the way from the Studio back to the website (Start, Harmony, World, About) and the language switch.
 * tools/sync-studio.sh puts ONE line into the generated studio/index.html that loads this file (`<script src="../studio-site/site-nav.js" defer data-site-hook>`); the generator's
 * source never mentions the website. Without that line (the generator's own GitHub Pages site) nothing of this exists.
 *
 * What it does
 *  - a ring button with three short lines (the same 18px ring as Help and Plus) in the header, left of Plus: #btn-site-nav, aria-expanded / aria-controls, opens #site-nav-panel
 *    (Esc, a click outside or the button close it; the focus goes back to the button). From 375px up. Below 375px the header has no room (320 to 374px: tabs + three buttons do not
 *    fit): the same block is appended to the Help overlay instead and the button is hidden (site-nav.css).
 *  - the links follow the Studio's language (uiI18n.lang, 'de' | 'en'): EN -> index.html, harmony.html, world.html, about.html; DE -> the *_d.html pages. They are rewritten on 'langchange'.
 *  - EN | DE: a language switch = a reload of the Studio with the other ?lang= (location.assign); the autosave of the Studio survives it because core/session-store.js leaves `lang`
 *    out of the URL its snapshot is bound to (generator task 138). The hash (the tab) is kept.
 *  Reads from the generator: uiI18n.lang only. Writes nothing of its own to storage.
 * window.wofSiteNav = { links(lang), langUrl(href, lang), root } (for the test)
 */
(function () {
  'use strict';
  var script = document.currentScript || (function () { var s = document.querySelectorAll('script[data-site-hook]'); return s[s.length - 1]; })();
  var root = script && script.src ? new URL('../', script.src).href : '/';   // the website root: studio-site/ lies next to studio/

  var TEXT = {
    en: { start: 'Start', harmony: 'Harmony', world: 'World', about: 'About', studio: 'Studio', nav: 'Website', open: 'Website: Start, Harmony, World, About', lang: 'Language' },
    de: { start: 'Start', harmony: 'Harmonie', world: 'Welt', about: 'Über', studio: 'Studio', nav: 'Website', open: 'Website: Start, Harmonie, Welt, Über', lang: 'Sprache' }
  };
  var PAGES = { start: 'index', harmony: 'harmony', world: 'world', about: 'about' };
  var ORDER = ['start', 'studio', 'harmony', 'world', 'about'];

  function lang() { var l = window.uiI18n && window.uiI18n.lang; return l === 'en' ? 'en' : 'de'; }
  // [{ id, label, href | null (the Studio itself) }] in menu order
  function links(l) {
    l = l === 'en' ? 'en' : 'de';
    return ORDER.map(function (id) {
      return { id: id, label: TEXT[l][id], href: id === 'studio' ? null : root + PAGES[id] + (l === 'de' ? '_d' : '') + '.html' };
    });
  }
  // the same page with the other language: ?lang= replaced or added, everything else (other parameters, the hash) kept
  function langUrl(href, l) {
    var u = new URL(href);
    u.searchParams.set('lang', l === 'en' ? 'en' : 'de');
    return u.href;
  }

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    (kids || []).forEach(function (k) { n.appendChild(typeof k === 'string' ? document.createTextNode(k) : k); });
    return n;
  }

  // one block of links + language switch; built twice (the panel, the Help overlay), refreshed together
  var blocks = [];
  function buildBlock(id) {
    var nav = el('nav', { id: id, 'class': 'site-nav-block' });
    var ul = el('ul', {});
    var sw = el('div', { 'class': 'site-nav-lang', role: 'group' });
    nav.appendChild(ul); nav.appendChild(sw);
    var b = { nav: nav, ul: ul, sw: sw };
    blocks.push(b);
    return b;
  }
  function refreshBlock(b) {
    var l = lang(), t = TEXT[l];
    b.nav.setAttribute('aria-label', t.nav);
    b.ul.textContent = '';
    links(l).forEach(function (x) {
      var li = el('li', {});
      if (x.href) li.appendChild(el('a', { href: x.href }, [x.label]));
      else li.appendChild(el('span', { 'aria-current': 'page' }, [x.label]));
      b.ul.appendChild(li);
    });
    b.sw.setAttribute('aria-label', t.lang);
    b.sw.textContent = '';
    ['en', 'de'].forEach(function (code) {
      var a = el('a', { href: langUrl(location.href, code), lang: code, hreflang: code }, [code.toUpperCase()]);
      if (code === l) a.setAttribute('aria-current', 'true');
      b.sw.appendChild(a);
    });
  }
  function refreshAll() {
    blocks.forEach(refreshBlock);
    if (button) button.setAttribute('aria-label', TEXT[lang()].open), button.setAttribute('title', TEXT[lang()].open);
  }

  var button = null, panel = null;
  function setOpen(open) {
    if (!button || !panel) return;
    panel.hidden = !open;
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  function init() {
    var header = document.querySelector('.app-header');
    if (!header || document.getElementById('btn-site-nav')) return;
    var css = el('link', { rel: 'stylesheet', href: root + 'studio-site/site-nav.css' });
    document.head.appendChild(css);
    var svg = '<svg class="ico" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M8 9.5h8M8 12h8M8 14.5h8"></path></svg>';
    button = el('button', { id: 'btn-site-nav', 'class': 'icon-btn site-nav-btn', type: 'button', 'aria-expanded': 'false', 'aria-controls': 'site-nav-panel' });
    button.innerHTML = svg;
    var plus = document.getElementById('btn-mode-plus');
    header.insertBefore(button, plus || document.getElementById('btn-help'));
    var pb = buildBlock('site-nav-links');
    panel = el('div', { id: 'site-nav-panel', 'class': 'site-nav-panel', hidden: '' }, [pb.nav]);
    header.insertBefore(panel, plus || document.getElementById('btn-help'));
    button.addEventListener('click', function () { setOpen(panel.hidden); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { setOpen(false); button.focus(); } });
    document.addEventListener('click', function (e) { if (!panel.hidden && !panel.contains(e.target) && !button.contains(e.target)) setOpen(false); });
    // below 375px: the same block inside the Help overlay (shown by CSS only there)
    var help = document.querySelector('#help-overlay .dialog-content');
    if (help) {
      var hb = buildBlock('site-nav-help-links');
      var wrap = el('div', { 'class': 'site-nav-help' }, [hb.nav]);
      var close = document.getElementById('close-help');
      help.insertBefore(wrap, close || null);
    }
    refreshAll();
    document.addEventListener('langchange', refreshAll);
  }

  window.wofSiteNav = { links: links, langUrl: langUrl, root: root };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
