/**
 * p/preset-loader.js (task 163). WEBSITE-owned, shared by every stub page p/<slug>/index.html (built by tools/build-presets.cjs).
 *
 * What it does: the stub of a preset fetches the preset's session JSON (../../studio/presets/<slug>.session.json, a synced copy of the generator's presets/), puts it
 * into THIS TAB's autosave slot of the Studio under the Studio URL it is about to open, and goes there. The Studio then restores it through its own, unchanged restore path
 * (core/session-store.js: same URL ignoring #hash and ?lang=, a snapshot in sessionStorage -> restore). Nothing in the generator is touched.
 *
 * The contract with the generator (tools/test-presets.cjs runs this file against the synced studio/core/session-store.js):
 *   key 'wof:session' = JSON { v: 1, href: origin + pathname + search of the Studio URL (no hash), at: ms, snapshot: <the session JSON text> }.
 *
 * Work in the tab: if this tab's autosave holds work (a line or a layer) that is not the preset itself, nothing is written or removed before the visitor has chosen:
 *   "keep my work"  -> back to the Studio URL the autosave belongs to (it restores unchanged);
 *   "open preset"   -> the old autosave text is first copied to 'wof:session:before-preset' (one slot, newest wins; a backup, the Studio has no control to bring it back),
 *                      only if that copy was stored the preset is written and opened; otherwise the visitor stays and is told.
 * No work (or none at all, or storage unavailable for reading) -> straight through. Storage unusable for writing / fetch failed -> a message and a link to the plain Studio.
 *
 * Parameters passed through to the Studio: lang (en | de), mode (simple | advanced). Everything else is dropped.
 */
(function (root) {
  'use strict';
  var KEY = 'wof:session', BACKUP_KEY = 'wof:session:before-preset', MAX_CHARS = 2 * 1024 * 1024;

  var TEXT = {
    de: {
      opening: 'Das Preset wird geöffnet …',
      askTitle: 'In diesem Tab gibt es eine Arbeit.',
      askBody: 'Öffnest du das Preset, ersetzt es sie. Sie wird als Sicherung abgelegt, im Studio gibt es aber keinen Weg, sie zurückzuholen.',
      keep: 'Bei meiner Arbeit bleiben',
      open: 'Preset öffnen',
      fail: 'Das Preset konnte nicht geöffnet werden.',
      failLink: 'Studio ohne Preset öffnen',
      noBackup: 'Deine Arbeit konnte nicht gesichert werden. Sie bleibt unverändert, das Preset wurde nicht geöffnet.',
      noscript: 'Dieses Preset braucht JavaScript.'
    },
    en: {
      opening: 'Opening the preset …',
      askTitle: 'There is work in this tab.',
      askBody: 'If you open the preset, it replaces that work. The work is kept as a backup, but the Studio has no way to bring it back.',
      keep: 'Keep my work',
      open: 'Open preset',
      fail: 'The preset could not be opened.',
      failLink: 'Open the Studio without the preset',
      noBackup: 'Your work could not be backed up. It is unchanged and the preset was not opened.',
      noscript: 'This preset needs JavaScript.'
    }
  };

  function langOf(search) { var m = /(?:^|[?&])lang=([A-Za-z]+)(?:&|$)/.exec(search || ''); var l = m ? m[1].toLowerCase() : ''; return l === 'en' ? 'en' : l === 'de' ? 'de' : null; }
  function modeOf(search) { var m = /(?:^|[?&])mode=([A-Za-z]+)(?:&|$)/.exec(search || ''); var v = m ? m[1].toLowerCase() : ''; return v === 'simple' || v === 'advanced' ? v : null; }

  // the Studio URL of a preset: ?preset=<slug>[&mode=..][&lang=..] (the same string is the autosave's href and the address we go to)
  function studioUrl(base, slug, mode, lang) {
    var u = new URL(base);
    u.search = ''; u.hash = '';
    u.searchParams.set('preset', slug);
    if (mode) u.searchParams.set('mode', mode);
    if (lang) u.searchParams.set('lang', lang);
    return u;
  }
  // origin + path + search, no hash: what core/session-store.js sessionCurrentHref() makes of the page
  function hrefOf(u) { return u.origin + u.pathname + u.search; }

  function parseEnvelope(raw) {
    try {
      var o = JSON.parse(raw);
      if (!o || typeof o !== 'object' || o.v !== 1 || typeof o.href !== 'string' || typeof o.snapshot !== 'string') return null;
      return o;
    } catch (e) { return null; }
  }
  function withoutSavedAt(text) { try { var o = JSON.parse(text); delete o.savedAt; return JSON.stringify(o); } catch (e) { return null; } }
  // is there work in a snapshot text: a line on the base or any layer
  function hasWork(snapshotText) {
    try {
      var s = JSON.parse(snapshotText);
      return !!((s.base && s.base.connections && s.base.connections.length) || (s.layers && s.layers.length));
    } catch (e) { return false; }
  }

  /**
   * deps: { storage, base (URL string of the Studio, e.g. '.../studio/'), fetchText(url) -> Promise<string>, slug, file, now(), lang (or null), mode (or null),
   *         ui: { status(key), ask(onKeep, onOpen), fail(key), go(url) } }
   * -> { start() -> Promise }
   */
  function createLoader(deps) {
    var storage = deps.storage;
    function readExisting() { try { return storage ? storage.getItem(KEY) : null; } catch (e) { return null; } }
    function start() {
      var target = studioUrl(deps.base, deps.slug, deps.mode, deps.lang);
      var targetHref = hrefOf(target);
      deps.ui.status('opening');
      return deps.fetchText(deps.base.replace(/\/?$/, '/') + 'presets/' + deps.file).then(function (presetText) {
        if (!storage) { deps.ui.fail('fail'); return; }
        var raw = readExisting();
        var env = raw ? parseEnvelope(raw) : null;
        var presetNorm = withoutSavedAt(presetText);
        var work = !!(env && hasWork(env.snapshot) && withoutSavedAt(env.snapshot) !== presetNorm);
        function openPreset() {
          if (raw && (work || !env)) {   // the backup first (work, or a stored text we cannot read: never dropped silently); without it nothing is replaced
            try {
              var backup = JSON.stringify({ v: 1, reason: 'preset', preset: deps.slug, at: deps.now(), text: raw });
              storage.setItem(BACKUP_KEY, backup);
              if (storage.getItem(BACKUP_KEY) !== backup) throw new Error('backup not readable');
            } catch (e) { deps.ui.fail('noBackup', true); return; }
          }
          try {
            var text = JSON.stringify({ v: 1, href: targetHref, at: deps.now(), snapshot: presetText });
            if (text.length > MAX_CHARS) throw new Error('too large');
            storage.setItem(KEY, text);
            if (storage.getItem(KEY) !== text) throw new Error('not readable');
          } catch (e) { deps.ui.fail('fail'); return; }
          deps.ui.go(target.toString());
        }
        function keepWork() {
          var back = new URL(env.href);
          back.hash = '';
          if (deps.lang) back.searchParams.set('lang', deps.lang);
          deps.ui.go(back.toString());
        }
        if (work) deps.ui.ask(keepWork, openPreset); else openPreset();
      }, function () { deps.ui.fail('fail'); });
    }
    return { start: start };
  }

  var api = { createLoader: createLoader, studioUrl: studioUrl, hrefOf: hrefOf, parseEnvelope: parseEnvelope, hasWork: hasWork, withoutSavedAt: withoutSavedAt, langOf: langOf, modeOf: modeOf, TEXT: TEXT, KEY: KEY, BACKUP_KEY: BACKUP_KEY };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof document === 'undefined' || !document.documentElement || !document.documentElement.hasAttribute('data-preset')) return;

  // ---- the page ----------------------------------------------------------------------------------------------------------------------------------------------------
  var html = document.documentElement;
  var lang = langOf(location.search), mode = modeOf(location.search), L = lang || 'de', T = TEXT[L];
  html.lang = L;
  var titleEl = document.getElementById('p-title'), statusEl = document.getElementById('p-status'), askEl = document.getElementById('p-ask');
  var title = html.getAttribute('data-title-' + L); if (title && titleEl) titleEl.textContent = title;
  var studioPlain = new URL('../../studio/', location.href); if (lang) studioPlain.searchParams.set('lang', lang);
  function say(key) { if (statusEl) statusEl.textContent = T[key]; }
  var ui = {
    status: say,
    fail: function (key, keepAsk) {
      say(key);
      if (!keepAsk && askEl) askEl.hidden = true;
      var a = document.getElementById('p-fallback');
      if (a) { a.textContent = T.failLink; a.href = studioPlain.toString(); a.hidden = false; }
    },
    go: function (url) { location.replace(url); },
    ask: function (onKeep, onOpen) {
      statusEl.textContent = '';
      document.getElementById('p-ask-title').textContent = T.askTitle;
      document.getElementById('p-ask-body').textContent = T.askBody;
      var k = document.getElementById('p-keep'), o = document.getElementById('p-open');
      k.textContent = T.keep; o.textContent = T.open;
      k.onclick = onKeep; o.onclick = onOpen;
      askEl.hidden = false; k.focus();
    }
  };
  var storage = null;
  try { storage = window.top === window.self ? window.sessionStorage : null; } catch (e) { storage = null; }   // like sessionStorageGuard() of the Studio: not in a frame, reachable
  createLoader({
    storage: storage,
    base: new URL('../../studio/', location.href).toString(),
    slug: html.getAttribute('data-preset'), file: html.getAttribute('data-file'),
    now: function () { return Date.now(); }, lang: lang, mode: mode, ui: ui,
    fetchText: function (u) { return fetch(u).then(function (r) { if (!r.ok) throw new Error('http ' + r.status); return r.text(); }); }
  }).start();
})(typeof window !== 'undefined' ? window : this);
