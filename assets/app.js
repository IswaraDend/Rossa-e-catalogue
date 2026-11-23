/* Rossa · Koleksi Seni Rupa
   Mesin tampilan situs. Konten diedit di content.js, bukan di sini. */
(function () {
  'use strict';

  var main = document.getElementById('main');
  if (!window.SITE) {
    main.innerHTML = '<section class="page"><span class="label">content.js</span>' +
      '<h1 class="page-title">Konten tidak terbaca.</h1>' +
      '<p class="prose" style="margin-top:24px">Periksa content.js. Biasanya ada tanda koma atau tanda kutip yang hilang di baris terakhir yang diubah.</p></section>';
    return;
  }

  /* ------------------------------------------------------------------
     Data
     ------------------------------------------------------------------ */
  const S = window.SITE;
  const settings = S.settings || {};
  const collector = S.collector || {};
  // Data contoh ditandai sample: true. Matikan lewat settings.showSamples = false sebelum tayang.
  const showSamples = settings.showSamples !== false;
  const keep = x => !!x && (showSamples || !x.sample);
  const OTHER = { id: '_lainnya', name: { id: 'Lainnya', en: 'Other' }, display: 'hang', room: 'stone' };
  const categories = (S.categories || []).filter(c => c && c.id);
  const catById = new Map(categories.map(c => [c.id, c]));
  const artists = (S.artists || []).filter(a => keep(a) && a.slug);
  const artistBySlug = new Map(artists.map(a => [a.slug, a]));
  const catOf = w => catById.get(w.category) || OTHER;
  const catRank = c => { const i = categories.indexOf(c); return i < 0 ? 9999 : i; };
  const WORKS = (S.works || []).filter(w => keep(w) && w.slug)
    .map((w, i) => ({ w, i }))
    .sort((a, b) => (catRank(catOf(a.w)) - catRank(catOf(b.w))) || (a.i - b.i))
    .map(x => x.w);
  const workBySlug = new Map(WORKS.map(w => [w.slug, w]));
  const CHAPTERS = categories.filter(c => WORKS.some(w => catOf(w) === c));
  if (WORKS.some(w => catOf(w) === OTHER)) CHAPTERS.push(OTHER);
  const worksInCat = c => WORKS.filter(w => catOf(w) === c);
  const worksOfArtist = slug => WORKS.filter(w => w.artist === slug);

  /* ------------------------------------------------------------------
     Bahasa
     ------------------------------------------------------------------ */
  const UI = {
    id: {
      skip: 'Langsung ke konten', mainNav: 'Navigasi utama',
      nav: { home: 'Rossa', biography: 'Biografi', collection: 'Koleksi', artists: 'Seniman' },
      menu: 'Buka menu', close: 'Tutup menu', language: 'Bahasa', contact: 'Kontak',
      aboutCollector: 'Tentang kolektor', enter: 'Lihat koleksi', readBio: 'Baca biografi',
      counts: (w, a) => w + ' karya dari ' + a + ' seniman',
      biography: 'Biografi', milestones: 'Tonggak perjalanan', collectionFact: 'Koleksi',
      walkCollection: 'Jelajahi koleksi', chapter: 'Koleksi',
      works: n => n + ' karya',
      hintScroll: 'Gulir untuk menjelajah', hintSwipe: 'Usap untuk menjelajah',
      endTitle: 'Akhir koleksi', endArtist: 'Akhir karya seniman ini',
      backToFirst: 'Kembali ke karya pertama', viewIndex: 'Lihat indeks',
      walk: 'Jelajah', index: 'Indeks', viewLabel: 'Tampilan koleksi',
      indexTitle: 'Koleksi', filterLabel: 'Saring berdasarkan kategori', all: 'Semua karya',
      artistCount: n => n + ' seniman', artist: 'Seniman', born: 'Lahir', based: 'Berkarya di',
      worksInCollection: 'Karya dalam koleksi', noWorksArtist: 'Karya seniman ini belum dimasukkan ke katalog.',
      nextArtist: 'Seniman berikutnya', allArtists: 'Semua seniman',
      year: 'Tahun', medium: 'Medium', size: 'Ukuran', category: 'Kategori', status: 'Status', code: 'Kode inventaris',
      back: 'Kembali ke koleksi', prev: 'Sebelumnya', next: 'Berikutnya', pagerLabel: 'Navigasi halaman',
      viewArtist: 'Lihat seniman', viewOnWall: 'Lihat di dinding koleksi',
      photoToFollow: 'Foto menyusul', enlarge: 'Perbesar foto', closeImage: 'Tutup foto',
      minimapLabel: 'Peta karya', goToWork: (n, title) => 'Ke karya ' + n + ', ' + title,
      walkLabel: 'Dinding koleksi', notFound: 'Halaman ini tidak ditemukan.', home: 'Kembali ke beranda',
      noWorks: 'Belum ada karya di katalog.',
      collectorNote: 'Catatan kolektor', details: 'Foto detail', credit: 'Dokumentasi'
    },
    en: {
      skip: 'Skip to content', mainNav: 'Main navigation',
      nav: { home: 'Rossa', biography: 'Biography', collection: 'Collection', artists: 'Artists' },
      menu: 'Open menu', close: 'Close menu', language: 'Language', contact: 'Contact',
      aboutCollector: 'About the collector', enter: 'View the collection', readBio: 'Read the biography',
      counts: (w, a) => w + (w === 1 ? ' work' : ' works') + ' by ' + a + (a === 1 ? ' artist' : ' artists'),
      biography: 'Biography', milestones: 'Milestones', collectionFact: 'Collection',
      walkCollection: 'Walk the collection', chapter: 'Collection',
      works: n => n + (n === 1 ? ' work' : ' works'),
      hintScroll: 'Scroll to walk the collection', hintSwipe: 'Swipe to walk the collection',
      endTitle: 'End of the collection', endArtist: "End of this artist's works",
      backToFirst: 'Back to the first work', viewIndex: 'See the index',
      walk: 'Walk', index: 'Index', viewLabel: 'Collection view',
      indexTitle: 'Collection', filterLabel: 'Filter by category', all: 'All works',
      artistCount: n => n + (n === 1 ? ' artist' : ' artists'), artist: 'Artist', born: 'Born', based: 'Based in',
      worksInCollection: 'Works in the collection', noWorksArtist: "This artist's works have not been added yet.",
      nextArtist: 'Next artist', allArtists: 'All artists',
      year: 'Year', medium: 'Medium', size: 'Dimensions', category: 'Category', status: 'Status', code: 'Inventory no.',
      back: 'Back to the collection', prev: 'Previous', next: 'Next', pagerLabel: 'Page navigation',
      viewArtist: 'View the artist', viewOnWall: 'See it on the wall',
      photoToFollow: 'Photo to follow', enlarge: 'Enlarge photo', closeImage: 'Close photo',
      minimapLabel: 'Map of works', goToWork: (n, title) => 'Go to work ' + n + ', ' + title,
      walkLabel: 'Collection wall', notFound: 'This page could not be found.', home: 'Back to home',
      noWorks: 'No works have been added yet.',
      collectorNote: "Collector's note", details: 'Detail photos', credit: 'Photography'
    }
  };
  const LANGS = (Array.isArray(settings.languages) && settings.languages.length ? settings.languages : ['id']).filter(l => UI[l]);
  if (!LANGS.length) LANGS.push('id');
  let lang = LANGS.indexOf(settings.defaultLanguage) >= 0 ? settings.defaultLanguage : LANGS[0];
  try { const saved = localStorage.getItem('rossa-lang'); if (saved && LANGS.indexOf(saved) >= 0) lang = saved; } catch (e) { /* penyimpanan tidak tersedia */ }
  const L = () => UI[lang];

  /* ------------------------------------------------------------------
     Pembantu
     ------------------------------------------------------------------ */
  function t(v) {
    if (v == null) return '';
    if (typeof v === 'string' || typeof v === 'number') return String(v);
    if (typeof v === 'object') {
      if (v[lang] != null && v[lang] !== '') return String(v[lang]);
      for (const k of LANGS) if (v[k]) return String(v[k]);
      const any = Object.keys(v).map(k => v[k]).find(x => typeof x === 'string' && x);
      return any || '';
    }
    return '';
  }
  const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  const esc = s => String(s).replace(/[&<>"']/g, c => ESC[c]);
  const tx = v => esc(t(v));
  const rich = v => esc(t(v)).replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
  const plain = v => t(v).replace(/\*([^*\n]+)\*/g, '$1');
  const pad = n => String(n).padStart(2, '0');
  const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
  const reduced = () => !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const enc = s => encodeURIComponent(s);
  function roman(n) {
    const map = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
    let out = '';
    for (const [v, s] of map) while (n >= v) { out += s; n -= v; }
    return out;
  }
  function num(n) {
    const x = Number(n);
    if (!isFinite(x)) return String(n);
    return x.toLocaleString(lang === 'id' ? 'id-ID' : 'en-GB', { maximumFractionDigits: 1 });
  }
  function sizeText(w) {
    const s = w.size;
    if (!s || typeof s !== 'object') return '';
    const unit = s.unit || 'cm';
    const NB = ' ';
    if (s.diameter) return 'Ø' + NB + num(s.diameter) + NB + unit;
    const parts = [s.h, s.w, s.d].filter(x => x !== undefined && x !== null && x !== '');
    return parts.length ? parts.map(num).join(NB + '×' + NB) + NB + unit : '';
  }
  // Tautan dari content.js: { label, href }. Hanya http(s).
  function linkHTML(l) {
    if (!l || !t(l.label)) return '';
    const href = String(l.href || '');
    return /^https?:\/\//.test(href) ? '<a class="link-u" href="' + esc(href) + '" target="_blank" rel="noopener">' + tx(l.label) + '</a>' : tx(l.label);
  }
  function creditHTML(c) {
    if (!c) return '';
    const lead = [rich(c.text), linkHTML(c.source)].filter(Boolean).join(' ');
    const parts = [lead, linkHTML(c.license)].filter(Boolean).join(', ');
    return parts ? parts + '.' + (t(c.note) ? ' ' + rich(c.note) : '') : '';
  }
  function photoHTML(ph, cls) {
    if (!ph || !ph.src) return '';
    const cap = creditHTML(ph.credit);
    return '<figure class="' + cls + '"><img src="' + esc(ph.src) + '"' +
      (ph.width ? ' width="' + Number(ph.width) + '" height="' + Number(ph.height) + '"' : '') +
      ' alt="' + tx(ph.alt) + '" loading="lazy" decoding="async">' +
      (cap ? '<figcaption>' + cap + '</figcaption>' : '') + '</figure>';
  }
  const lowerRest = list => list.map((s, i) => (i ? s.charAt(0).toLowerCase() + s.slice(1) : s)).join(', ');

  /* ------------------------------------------------------------------
     Bentuk dan ukuran karya
     ------------------------------------------------------------------ */
  const displayOf = w => w.display || catOf(w).display || 'hang';
  const ROOMS = { silk: '#FBF7F2', linen: '#F2E5DB', velvet: '#231B1B', stone: '#E6E3DE', olive: '#2E3027' };
  const roomOf = w => (ROOMS[catOf(w).room] ? catOf(w).room : 'linen');
  const ratioOverride = new Map();
  function dims(w) {
    const s = (w.size && typeof w.size === 'object') ? w.size : {};
    const disp = displayOf(w);
    const round = !!s.diameter || w.shape === 'round';
    let h = Number(s.h || s.diameter) || 0;
    let wd = Number(s.w || s.diameter) || 0;
    if (!h && !wd) { h = disp === 'hang' ? 100 : 110; wd = disp === 'hang' ? 80 : 68; }
    else if (!h) h = wd;
    else if (!wd) wd = h;
    let ratio = wd / h;
    if (!round && ratioOverride.has(w.slug)) ratio = ratioOverride.get(w.slug);
    return { hcm: h, wcm: wd, ratio, round, disp };
  }
  const TONES = {
    ochre: '#A98654', rosewood: '#8A4E47', sage: '#848D77', slate: '#5B6672', champagne: '#BFA277',
    teal: '#3E5A59', blush: '#C49688', bronze: '#77583A', teak: '#86603D', stone: '#8E8981',
    metal: '#A3A6A8', ink: '#3B302D'
  };
  const TONE_KEYS = Object.keys(TONES);
  function toneOf(w) {
    if (TONES[w.tone]) return TONES[w.tone];
    if (typeof w.tone === 'string' && /^#[0-9a-f]{3,8}$/i.test(w.tone)) return w.tone;
    return TONES[TONE_KEYS[Math.max(0, WORKS.indexOf(w)) % TONE_KEYS.length]];
  }
  function shapeOf(r) {
    if (r < 0.5) return '42% 42% 10% 10% / 20% 20% 5% 5%';
    if (r > 1.15) return '50% 50% 16% 16% / 64% 64% 14% 14%';
    return '46% 46% 12% 12% / 36% 36% 9% 9%';
  }
  function altOf(w) {
    const a = artistBySlug.get(w.artist);
    return plain(w.title) + (a ? ', ' + plain(a.name) : '');
  }
  function artHTML(w, extraClass, opts) {
    opts = opts || {};
    const d = dims(w);
    const kind = d.disp === 'hang' ? 'hang' : 'sculpt';
    const cls = ['art', kind];
    if (d.round && kind === 'hang') cls.push('round');
    if (w.image) cls.push('has-img');
    if (extraClass) cls.push(extraClass);
    const style = [];
    if (kind === 'sculpt') style.push('--shape:' + shapeOf(d.ratio));
    if (opts.style) style.push(opts.style);
    const inner = w.image
      ? '<img src="' + esc(w.image) + '" alt="' + esc(altOf(w)) + '" loading="' + (opts.eager ? 'eager' : 'lazy') + '" decoding="async" data-slug="' + esc(w.slug) + '">'
      : '<span class="ph" style="--tone:' + toneOf(w) + '"></span><span class="ph-label">' + tx(L().photoToFollow) + '</span>';
    const aria = w.image || opts.decorative ? '' : ' role="img" aria-label="' + esc(altOf(w)) + '"';
    return '<span class="' + cls.join(' ') + '"' + (style.length ? ' style="' + style.join(';') + '"' : '') + aria + '>' + inner + '</span>';
  }
  function setBox(el, l, tp, w, h) {
    if (!el) return;
    el.style.left = Math.round(l) + 'px'; el.style.top = Math.round(tp) + 'px';
    el.style.width = Math.round(w) + 'px'; el.style.height = Math.round(h) + 'px';
  }
  function glowBox(el, cx, cy, size) {
    if (!el) return;
    setBox(el, cx - size / 2, cy - size / 2, size, size);
  }

  const ICON = {
    right: '<svg class="arrow" width="22" height="12" viewBox="0 0 22 12" aria-hidden="true"><path d="M0 6h20.5M15.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.15"/></svg>',
    left: '<svg class="arrow" width="22" height="12" viewBox="0 0 22 12" aria-hidden="true"><path d="M22 6H1.5M6.5 1l-5 5 5 5" fill="none" stroke="currentColor" stroke-width="1.15"/></svg>',
    menu: '<svg width="20" height="10" viewBox="0 0 20 10" aria-hidden="true"><path d="M0 1h20M0 9h20" stroke="currentColor" stroke-width="1.15"/></svg>',
    close: '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M1 1l14 14M15 1L1 15" stroke="currentColor" stroke-width="1.15"/></svg>',
    bench: '<svg class="bench" width="268" height="62" viewBox="0 0 268 62" aria-hidden="true"><path d="M10 6.5h248a5.5 5.5 0 0 1 0 11H10a5.5 5.5 0 0 1 0-11z" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M24 17.5V61M244 17.5V61" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
  };

  /* ------------------------------------------------------------------
     Kerangka: kolom samping, menu ponsel, dok
     ------------------------------------------------------------------ */
  const side = document.getElementById('side');
  const menu = document.getElementById('menu');
  const dock = document.getElementById('dock');
  const peek = document.getElementById('peek');
  const skip = document.getElementById('skip');
  const PAGES = [
    { key: 'home', href: '#/' },
    { key: 'biography', href: '#/biography' },
    { key: 'collection', href: '#/collection' },
    { key: 'artists', href: '#/artists' }
  ];

  function setRoom(r) {
    if (!ROOMS[r]) r = 'linen';
    if (document.body.dataset.room !== r) document.body.dataset.room = r;
    const m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', ROOMS[r]);
  }
  function navHTML(currentKey) {
    return '<ol>' + PAGES.map((p, i) =>
      '<li><a href="' + p.href + '" data-fresh' + (p.key === currentKey ? ' aria-current="page"' : '') + '>' +
      '<span class="n">' + pad(i + 1) + '</span><span class="t">' + tx(L().nav[p.key]) + '</span></a></li>').join('') + '</ol>';
  }
  function langHTML() {
    if (LANGS.length < 2) return '';
    return '<div class="lang" role="group" aria-label="' + tx(L().language) + '">' + LANGS.map((l, i) =>
      (i ? '<span aria-hidden="true">/</span>' : '') +
      '<button type="button" data-lang="' + l + '" aria-pressed="' + (l === lang) + '">' + l.toUpperCase() + '</button>').join('') + '</div>';
  }
  const draftHTML = () => (settings.draftLabel ? '<span class="draft-tag">' + tx(settings.draftLabel) + '</span>' : '');
  const contactHTML = () => (settings.contactEmail ? '<a class="contact-link link-u" href="mailto:' + esc(settings.contactEmail) + '">' + tx(L().contact) + '</a>' : '');
  const brandHTML = (tag) =>
    '<' + tag + ' class="brand"' + (tag === 'a' ? ' href="#/" data-fresh' : '') + '>' +
    '<span class="brand-name">' + tx(settings.siteName || collector.name || 'Rossa') + '</span>' +
    '<span class="brand-rule" aria-hidden="true"></span>' +
    '<span class="brand-sub">' + tx(settings.siteSubtitle) + '</span></' + tag + '>';

  function renderShell(currentKey) {
    skip.textContent = L().skip;
    side.innerHTML =
      brandHTML('a') + draftHTML() +
      '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu" aria-label="' + tx(L().menu) + '">' + ICON.menu + '</button>' +
      '<div class="side-bottom"><nav class="side-nav" aria-label="' + tx(L().mainNav) + '">' + navHTML(currentKey) + '</nav>' +
      '<div class="side-foot">' + langHTML() + contactHTML() + draftHTML() + '</div></div>';
    menu.innerHTML =
      '<div class="menu-top">' + brandHTML('span') +
      '<button class="circle" type="button" data-close-menu aria-label="' + tx(L().close) + '">' + ICON.close + '</button></div>' +
      '<nav aria-label="' + tx(L().mainNav) + '">' + navHTML(currentKey) + '</nav>' +
      '<div class="menu-foot">' + langHTML() + draftHTML() + '</div>';
  }
  function openMenu() {
    menu.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    const b = side.querySelector('.menu-btn');
    if (b) b.setAttribute('aria-expanded', 'true');
    const first = menu.querySelector('nav a');
    if (first) first.focus();
  }
  function closeMenu(restoreFocus) {
    if (menu.hidden) return;
    menu.hidden = true;
    document.documentElement.style.overflow = '';
    const b = side.querySelector('.menu-btn');
    if (b) { b.setAttribute('aria-expanded', 'false'); if (restoreFocus) b.focus(); }
  }

  function pagerHTML(route) {
    let list, idx, hrefOf, nameOf;
    if (route.name === 'artist') {
      list = artists; idx = artists.findIndex(a => a.slug === route.slug);
      hrefOf = a => '#/artists/' + enc(a.slug); nameOf = a => plain(a.name);
    } else if (route.name === 'work') {
      list = WORKS; idx = WORKS.findIndex(w => w.slug === route.slug);
      hrefOf = w => '#/works/' + enc(w.slug); nameOf = w => plain(w.title);
    } else {
      list = PAGES; idx = PAGES.findIndex(p => p.key === route.page);
      hrefOf = p => p.href; nameOf = p => t(L().nav[p.key]);
    }
    if (idx < 0 || list.length < 2) return '';
    const prev = list[(idx - 1 + list.length) % list.length];
    const next = list[(idx + 1) % list.length];
    return '<nav class="pager" aria-label="' + tx(L().pagerLabel) + '">' +
      '<a class="circle" href="' + hrefOf(prev) + '" data-fresh aria-label="' + tx(L().prev) + ': ' + esc(nameOf(prev)) + '">' + ICON.left + '</a>' +
      '<span class="pager-label"><span class="cur">' + pad(idx + 1) + '</span> / ' + pad(list.length) +
      '<span class="name">' + esc(nameOf(list[idx])) + '</span></span>' +
      '<a class="circle" href="' + hrefOf(next) + '" data-fresh aria-label="' + tx(L().next) + ': ' + esc(nameOf(next)) + '">' + ICON.right + '</a></nav>';
  }
  function renderDock(route) {
    const walk = current.walk;
    dock.innerHTML = (walk ? walk.dockHTML() : '') + pagerHTML(route);
    dock.classList.toggle('solo', !walk);
    dock.classList.toggle('on-stage', route.name === 'work');
    dock.classList.remove('walk-off');
    if (walk) { walk.bindDock(dock); walk.update(true); }
  }

  /* ------------------------------------------------------------------
     Dinding galeri (jelajah horizontal)
     ------------------------------------------------------------------ */
  class Walk {
    constructor(host, items, opts) {
      this.host = host; this.items = items; this.opts = opts || {};
      this.workItems = items.filter(it => it.kind === 'work');
      this.workItems.forEach((it, n) => { it.n = n; });
      this.active = -1; this.room = null; this.raf = 0; this.p = 0; this.bars = null;
      this.assignRooms();
      this.section = document.createElement('section');
      this.section.className = 'walk';
      this.section.setAttribute('aria-label', t(L().walkLabel));
      this.section.innerHTML = '<div class="walk-sticky"><div class="walk-track"></div></div>';
      host.appendChild(this.section);
      this.sticky = this.section.firstElementChild;
      this.track = this.sticky.firstElementChild;
      this.items.forEach(it => { it.el = this.buildItem(it); this.track.appendChild(it.el); });
      this.layout();

      this.onScroll = () => {
        if (this.raf) return;
        this.raf = requestAnimationFrame(() => { this.raf = 0; this.update(); });
      };
      this.onKey = e => {
        if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || !menu.hidden) return;
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const r = this.section.getBoundingClientRect();
        if (r.top > this.M.vh * 0.5 || r.bottom < this.M.vh * 0.5) return;
        e.preventDefault();
        const targets = this.workItems.map((it, k) => this.targetFor(k));
        let k;
        if (e.key === 'ArrowRight') { k = targets.findIndex(x => x > this.p + 4); if (k < 0) k = targets.length - 1; }
        else { k = -1; targets.forEach((x, i) => { if (x < this.p - 4) k = i; }); if (k < 0) { this.scrollToP(0, true); return; } }
        this.scrollToWork(k, true);
      };
      this.onWheel = e => {
        if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || e.ctrlKey) return;
        const r = this.section.getBoundingClientRect();
        if (r.top > 2 || r.bottom < this.M.vh - 2) return;
        e.preventDefault();
        window.scrollBy(0, e.deltaX);
      };
      this.onFocus = e => {
        const a = e.target.closest('.wi-link');
        if (!a) return;
        const k = this.workItems.findIndex(it => it.el.contains(a));
        if (k >= 0) this.scrollToWork(k, false);
      };
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('wheel', this.onWheel, { passive: false });
      document.addEventListener('keydown', this.onKey);
      this.track.addEventListener('focusin', this.onFocus);
    }
    destroy() {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('wheel', this.onWheel);
      document.removeEventListener('keydown', this.onKey);
      if (this.raf) cancelAnimationFrame(this.raf);
    }
    assignRooms() {
      const items = this.items;
      items.forEach(it => {
        if (it.kind === 'work') it.room = roomOf(it.w);
        else if (it.kind === 'intro') it.room = ROOMS[it.cat.room] ? it.cat.room : 'linen';
      });
      items.forEach((it, i) => {
        if (it.room) return;
        const before = items.slice(0, i).reverse().find(x => x.room);
        const after = items.slice(i + 1).find(x => x.room);
        const src = it.kind === 'end' ? (before || after) : (after || before);
        it.room = src ? src.room : 'linen';
      });
    }
    modeOf(i) {
      const it = this.items[i];
      if (it.kind === 'work') return dims(it.w).disp;
      if (it.kind === 'intro') return it.cat.display || 'hang';
      const list = it.kind === 'end' ? this.items.slice(0, i).reverse() : this.items.slice(i + 1);
      const nb = list.find(x => x.kind === 'work' || x.kind === 'intro');
      return nb ? this.modeOf(this.items.indexOf(nb)) : 'hang';
    }
    buildItem(it) {
      const el = document.createElement('div');
      el.className = 'wi wi-' + it.kind;
      let html = '<span class="floor" hidden></span>';
      if (it.kind === 'work') {
        const w = it.w, a = artistBySlug.get(w.artist), d = dims(w);
        const meta = [t(w.year), t(w.medium)].filter(Boolean).join(', ');
        const size = sizeText(w);
        html += '<span class="glow"></span>';
        if (d.disp === 'hang') html += '<span class="wire"></span><span class="wire"></span>';
        else if (d.disp === 'plinth') html += '<span class="plinth"></span>';
        html += '<a class="wi-link" href="#/works/' + enc(w.slug) + '" data-fresh aria-label="' + esc(pad(it.n + 1) + '. ' + altOf(w)) + '">' +
          artHTML(w, '', { decorative: true }) +
          '<span class="cap" aria-hidden="true"><span class="cap-n">' + pad(it.n + 1) + '</span>' +
          '<span class="cap-t">' + rich(w.title) + '</span>' +
          (a ? '<span class="cap-a">' + tx(a.name) + '</span>' : '') +
          (meta ? '<span class="cap-m">' + esc(meta) + '</span>' : '') +
          (size ? '<span class="cap-m">' + esc(size) + '</span>' : '') +
          (w.status ? '<span class="cap-s">' + tx(w.status) + '</span>' : '') +
          '</span></a>';
      } else if (it.kind === 'intro') {
        const c = it.cat;
        html += '<div class="intro">' +
          '<span class="label">' + tx(L().chapter) + ' · ' + roman(it.ci + 1) + '</span>' +
          '<h2 class="intro-title">' + tx(c.name) + '</h2>' +
          (c.intro ? '<p class="intro-text">' + rich(c.intro) + '</p>' : '') +
          '<span class="label intro-count">' + esc(L().works(worksInCat(c).length)) + '</span>' +
          (it.ci === 0 ? '<span class="intro-hint" data-hint></span>' : '') +
          '</div>' + ICON.bench;
      } else if (it.kind === 'end') {
        if (it.mode === 'artist') {
          html += '<div class="intro end">' +
            (it.next
              ? '<span class="label">' + tx(L().nextArtist) + '</span><a class="end-title end-link" href="#/artists/' + enc(it.next.slug) + '" data-fresh>' + tx(it.next.name) + '</a>'
              : '<span class="label">' + tx(L().endArtist) + '</span>') +
            '<div class="intro-links"><a class="link-u" href="#/collection" data-walk-first>' + tx(L().backToFirst) + '</a>' +
            '<a class="link-u" href="#/artists" data-fresh>' + tx(L().allArtists) + '</a></div></div>';
        } else {
          html += '<div class="intro end"><span class="label">' + tx(L().endTitle) + '</span>' +
            '<p class="end-title">' + esc(L().works(this.workItems.length)) + '</p>' +
            '<div class="intro-links"><a class="link-u" href="#/collection" data-walk-first>' + tx(L().backToFirst) + '</a>' +
            '<a class="link-u" href="#/index" data-fresh>' + tx(L().viewIndex) + '</a></div></div>';
        }
      }
      el.innerHTML = html;
      return el;
    }
    metrics() {
      const vw = this.sticky.clientWidth || window.innerWidth;
      const mobile = window.innerWidth < 900;
      const vh = this.sticky.clientHeight || window.innerHeight;
      const sideW = mobile ? 0 : (side.getBoundingClientRect().width || 216);
      const topH = mobile ? 64 : 0;
      const dockH = mobile ? 150 : 96;
      const band = Math.max(300, vh - topH - dockH);
      return { vw, vh, mobile, sideW, topH, dockH, band, mainW: vw - sideW };
    }
    layout() {
      const M = this.M = this.metrics();
      let x = 0;
      this.items.forEach(it => {
        const width = Math.round(this['lay_' + it.kind](it, M));
        it.x = x; it.width = width;
        it.el.style.width = width + 'px';
        x += width;
      });
      if (x < M.vw && this.items.length) {
        const last = this.items[this.items.length - 1];
        last.width += M.vw - x;
        last.el.style.width = last.width + 'px';
        x = M.vw;
      }
      this.trackW = x;
      this.track.style.width = x + 'px';
      this.maxX = Math.max(0, x - M.vw);
      this.section.style.height = Math.round(this.maxX + M.vh) + 'px';
      let prevFloor = false;
      this.items.forEach((it, i) => {
        const f = it.el.querySelector('.floor');
        const mode = this.modeOf(i);
        const on = mode === 'plinth' || mode === 'floor';
        f.hidden = !on;
        if (on) {
          f.style.top = Math.round(M.mobile ? M.topH + M.band * 0.80 : M.topH + M.band * 0.93) + 'px';
          f.classList.toggle('fade-in', !prevFloor && i > 0);
        }
        prevFloor = on;
      });
      this.updateBars();
      this.update(true);
    }
    lay_spacer(it, M) { return M.mobile ? 0 : M.sideW + M.mainW * 0.05; }
    lay_intro(it, M) {
      const box = it.el.querySelector('.intro');
      const bench = it.el.querySelector('.bench');
      const hint = it.el.querySelector('[data-hint]');
      if (hint) hint.textContent = M.mobile ? L().hintSwipe : L().hintScroll;
      if (M.mobile) {
        box.style.cssText = 'left:22px;right:22px;top:' + Math.round(M.topH + 24) + 'px';
        const bw = Math.min(240, M.vw - 90);
        bench.style.cssText = 'left:' + Math.round((M.vw - bw) / 2) + 'px;top:' + Math.round(M.topH + M.band - 104) + 'px;width:' + bw + 'px;height:auto';
        return M.vw;
      }
      const W = clamp(M.mainW * 0.40, 440, 640);
      box.style.cssText = 'left:0;top:' + Math.round(M.topH + M.band * 0.09) + 'px;width:' + Math.round(W) + 'px';
      bench.style.cssText = 'left:' + Math.round(W * 0.1) + 'px;top:' + Math.round(M.topH + M.band * 0.985 - 62) + 'px';
      return W + clamp(M.mainW * 0.07, 70, 140);
    }
    lay_end(it, M) {
      const box = it.el.querySelector('.intro');
      if (M.mobile) {
        box.style.cssText = 'left:22px;right:22px;top:' + Math.round(M.topH + M.band * 0.26) + 'px';
        return M.vw;
      }
      const W = clamp(M.mainW * 0.36, 360, 520);
      box.style.cssText = 'left:' + Math.round(M.mainW * 0.04) + 'px;top:' + Math.round(M.topH + M.band * 0.30) + 'px;width:' + Math.round(W) + 'px';
      return W + M.mainW * 0.06;
    }
    lay_work(it, M) {
      const d = dims(it.w), el = it.el;
      const art = el.querySelector('.art'), cap = el.querySelector('.cap'), glow = el.querySelector('.glow');
      const capW = 230, gap = clamp(M.mainW * 0.085, 80, 150);
      let itemW, left;
      if (d.disp === 'hang') {
        const maxH = M.band * (M.mobile ? 0.46 : 0.58), minH = M.band * (M.mobile ? 0.18 : 0.16);
        const maxW = M.mobile ? M.vw * 0.80 : M.mainW * 0.55;
        const base = M.topH + M.band * (M.mobile ? 0.62 : 0.80);
        let h = clamp(maxH * Math.pow(d.hcm / 200, 0.75), minH, maxH), w = h * d.ratio;
        if (w > maxW) { w = maxW; h = w / d.ratio; }
        h = Math.round(h); w = Math.round(w);
        if (M.mobile) { itemW = Math.max(M.vw * 0.86, w + 56); left = Math.round((itemW - w) / 2); }
        else { left = 0; itemW = w + 28 + capW + gap; }
        const top = Math.round(base - h);
        setBox(art, left, top, w, h);
        art.classList.toggle('small', w < 120 || h < 110);
        const wires = el.querySelectorAll('.wire');
        if (wires.length === 2) {
          wires[0].style.cssText = 'left:' + Math.round(left + w * 0.22) + 'px;height:' + top + 'px';
          wires[1].style.cssText = 'left:' + Math.round(left + w * 0.78) + 'px;height:' + top + 'px';
        }
        glowBox(glow, left + w / 2, top + h / 2, Math.max(w, h) * 2.1);
        if (M.mobile) cap.style.cssText = 'left:' + left + 'px;top:' + Math.round(base + 16) + 'px;width:' + Math.round(Math.max(180, Math.min(300, itemW - left - 12))) + 'px';
        else cap.style.cssText = 'left:' + (left + w + 28) + 'px;top:' + Math.round(base) + 'px;width:' + capW + 'px;transform:translateY(-100%)';
        it.artH = h; it.center = left + w / 2;
        return itemW;
      }
      const onFloor = d.disp === 'floor';
      const floorY = M.topH + M.band * (M.mobile ? 0.80 : 0.93);
      const sMax = M.band * (M.mobile ? (onFloor ? 0.56 : 0.34) : (onFloor ? 0.72 : 0.44));
      const sMin = M.band * (M.mobile ? 0.14 : 0.15);
      const maxW = M.mobile ? M.vw * 0.7 : M.mainW * 0.45;
      let sh = clamp(sMax * Math.pow(d.hcm / 150, 0.75), sMin, sMax), sw = sh * d.ratio;
      if (sw > maxW) { sw = maxW; sh = sw / d.ratio; }
      sh = Math.round(sh); sw = Math.round(sw);
      let ph = 0, pw = sw;
      if (!onFloor) {
        ph = Math.round(M.mobile ? clamp(M.band * 0.56 - sh, M.band * 0.10, M.band * 0.22) : clamp(M.band * 0.70 - sh, M.band * 0.14, M.band * 0.34));
        pw = Math.round(clamp(sw * 1.28, 110, 420));
      }
      if (M.mobile) { itemW = Math.max(M.vw * 0.86, pw + 56); left = Math.round((itemW - pw) / 2); }
      else { left = 0; itemW = pw + 28 + capW + gap; }
      const plinth = el.querySelector('.plinth');
      if (plinth) setBox(plinth, left, floorY - ph, pw, ph + 2);
      const sTop = Math.round(floorY - ph - sh);
      setBox(art, left + (pw - sw) / 2, sTop, sw, sh);
      art.classList.toggle('small', sw < 90 || sh < 100);
      glowBox(glow, left + pw / 2, sTop + sh / 2, Math.max(sw, sh) * 2.3);
      if (M.mobile) cap.style.cssText = 'left:' + left + 'px;top:' + Math.round(floorY + 14) + 'px;width:' + Math.round(Math.max(180, Math.min(300, itemW - left - 12))) + 'px';
      else cap.style.cssText = 'left:' + (left + pw + 28) + 'px;top:' + Math.round(floorY - ph) + 'px;width:' + capW + 'px;transform:translateY(-100%)';
      it.artH = sh + ph * 0.35; it.center = left + pw / 2;
      return itemW;
    }
    focusX() { const M = this.M; return M.mobile ? M.vw / 2 : M.sideW + M.mainW * 0.45; }
    targetFor(k) { const it = this.workItems[k]; return clamp(it.x + it.center - this.focusX(), 0, this.maxX); }
    update(force) {
      const M = this.M;
      if (!M) return;
      const r = this.section.getBoundingClientRect();
      const p = clamp(-r.top, 0, this.maxX);
      this.p = p;
      this.track.style.transform = 'translate3d(' + (-p) + 'px,0,0)';
      const engaged = r.top <= M.vh * 0.3;
      if (engaged !== this.engaged || force) { this.engaged = engaged; dock.classList.toggle('walk-off', !engaged); }
      const fx = p + this.focusX();
      let best = -1, bd = Infinity;
      this.workItems.forEach((it, k) => { const dd = Math.abs(it.x + it.center - fx); if (dd < bd) { bd = dd; best = k; } });
      if (best !== this.active || force) { this.active = best; this.updateDock(); }
      let room;
      if (this.opts.context === 'artist' && r.top > M.vh * 0.4) room = this.opts.defaultRoom || 'silk';
      else {
        const rx = p + M.vw * 0.55;
        const it = this.items.find(x => rx >= x.x && rx < x.x + x.width) || this.items[this.items.length - 1];
        room = it.room;
      }
      if (room !== this.room || force) { this.room = room; setRoom(room); }
    }
    scrollToP(p, smooth) {
      const top = this.section.getBoundingClientRect().top + window.scrollY + p;
      window.scrollTo({ top: Math.round(top), behavior: smooth && !reduced() ? 'smooth' : 'auto' });
    }
    scrollToWork(k, smooth) { if (this.workItems[k]) this.scrollToP(this.targetFor(k), smooth); }
    scrollToChapter(id, smooth) {
      const intro = this.items.find(x => x.kind === 'intro' && x.cat.id === id);
      if (intro) {
        const lead = this.M.mobile ? 0 : this.items[0].width;
        this.scrollToP(clamp(intro.x - lead, 0, this.maxX), smooth);
        return true;
      }
      const k = this.workItems.findIndex(x => x.w.slug === id);
      if (k >= 0) { this.scrollToWork(k, smooth); return true; }
      return false;
    }
    dockHTML() {
      let bars = '', prevKey = null;
      this.workItems.forEach((it, k) => {
        const key = catOf(it.w).id;
        if (prevKey !== null && key !== prevKey) bars += '<span class="gap" aria-hidden="true"></span>';
        prevKey = key;
        bars += '<button type="button" class="bar" data-bar="' + k + '" aria-label="' + esc(L().goToWork(pad(k + 1), plain(it.w.title))) + '"></button>';
      });
      return '<div class="dock-walk"><div class="dock-count"><span class="ch"></span><span class="num"></span></div>' +
        '<div class="minimap' + (this.workItems.length > 44 ? ' dense' : '') + '" role="group" aria-label="' + tx(L().minimapLabel) + '">' + bars + '</div></div>';
    }
    bindDock(el) {
      this.bars = Array.prototype.slice.call(el.querySelectorAll('.bar'));
      this.countCh = el.querySelector('.dock-count .ch');
      this.countNum = el.querySelector('.dock-count .num');
      const mm = el.querySelector('.minimap');
      if (mm) mm.addEventListener('click', e => { const b = e.target.closest('[data-bar]'); if (b) this.scrollToWork(+b.dataset.bar, true); });
      this.updateBars(); this.updateDock();
    }
    updateBars() {
      if (!this.bars) return;
      const maxH = Math.max.apply(null, this.workItems.map(it => it.artH || 1));
      this.bars.forEach((b, k) => { b.style.height = Math.round(5 + 17 * ((this.workItems[k].artH || 1) / maxH)) + 'px'; });
    }
    updateDock() {
      if (!this.bars) return;
      const k = this.active;
      this.bars.forEach((b, i) => b.setAttribute('aria-current', i === k ? 'true' : 'false'));
      const it = this.workItems[k];
      if (!it) return;
      this.countCh.textContent = this.opts.context === 'artist' ? plain(this.opts.artist.name) : plain(catOf(it.w).name);
      this.countNum.textContent = pad(k + 1) + ' / ' + pad(this.workItems.length);
    }
  }

  /* ------------------------------------------------------------------
     Panggung karya (halaman detail)
     ------------------------------------------------------------------ */
  class Stage {
    constructor(host, w) {
      this.host = host; this.w = w;
      const d = dims(w);
      host.innerHTML =
        (d.disp !== 'hang' ? '<span class="floor"></span>' : '') +
        '<span class="glow"></span>' +
        (d.disp === 'hang' ? '<span class="wire"></span><span class="wire"></span>' : (d.disp === 'plinth' ? '<span class="plinth"></span>' : '')) +
        artHTML(w, w.image ? 'zoomable' : '', { eager: true });
      this.art = host.querySelector('.art');
      if (w.image) {
        this.art.setAttribute('tabindex', '0');
        this.art.setAttribute('role', 'button');
        this.art.setAttribute('aria-label', t(L().enlarge));
        this.art.addEventListener('click', () => openLightbox(w));
        this.art.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(w); } });
      }
      this.layout();
    }
    layout() {
      const host = this.host, d = dims(this.w);
      const W = host.clientWidth, H = host.clientHeight;
      const mobile = window.innerWidth < 900;
      const art = this.art, glow = host.querySelector('.glow');
      if (!W || !H) return;
      const info = host.parentElement ? host.parentElement.querySelector('.work-info') : null;
      const A = mobile ? W : Math.max(320, W - (info ? info.offsetWidth : 0));
      if (d.disp === 'hang') {
        const base = H * (mobile ? 0.88 : 0.74);
        const maxH = H * (mobile ? 0.64 : 0.56), minH = H * 0.24, maxW = A * (mobile ? 0.84 : 0.72);
        let h = clamp(maxH * Math.pow(d.hcm / 200, 0.55), minH, maxH), w = h * d.ratio;
        if (w > maxW) { w = maxW; h = w / d.ratio; }
        const left = (A - w) / 2, top = base - h;
        setBox(art, left, top, w, h);
        art.classList.toggle('small', w < 120 || h < 110);
        const wires = host.querySelectorAll('.wire');
        wires[0].style.cssText = 'left:' + Math.round(left + w * 0.22) + 'px;height:' + Math.round(top) + 'px';
        wires[1].style.cssText = 'left:' + Math.round(left + w * 0.78) + 'px;height:' + Math.round(top) + 'px';
        glowBox(glow, A / 2, top + h / 2, Math.max(w, h) * 2.1);
        return;
      }
      const onFloor = d.disp === 'floor';
      const floorY = H * (mobile ? 0.9 : 0.86);
      const sMax = H * (onFloor ? 0.72 : 0.5), sMin = H * 0.22, maxW = A * 0.6;
      let sh = clamp(sMax * Math.pow(d.hcm / 150, 0.6), sMin, sMax), sw = sh * d.ratio;
      if (sw > maxW) { sw = maxW; sh = sw / d.ratio; }
      let ph = 0, pw = sw;
      if (!onFloor) { ph = clamp(H * 0.66 - sh, H * 0.12, H * 0.3); pw = clamp(sw * 1.28, 120, 460); }
      const plinth = host.querySelector('.plinth');
      if (plinth) setBox(plinth, (A - pw) / 2, floorY - ph, pw, ph + 2);
      const floor = host.querySelector('.floor');
      if (floor) floor.style.top = Math.round(floorY) + 'px';
      const sTop = floorY - ph - sh;
      setBox(art, (A - sw) / 2, sTop, sw, sh);
      art.classList.toggle('small', sw < 90 || sh < 100);
      glowBox(glow, A / 2, sTop + sh / 2, Math.max(sw, sh) * 2.3);
    }
  }

  function openLightbox(w) {
    const lb = document.getElementById('lightbox');
    if (!lb || !w.image) return;
    lb.innerHTML = '<img src="' + esc(w.image) + '" alt="' + esc(altOf(w)) + '">' +
      '<button class="circle" type="button" aria-label="' + tx(L().closeImage) + '">' + ICON.close + '</button>';
    lb.hidden = false;
    lb.querySelector('button').focus();
    lb.onclick = () => closeLightbox();
  }
  function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (!lb || lb.hidden) return false;
    lb.hidden = true; lb.innerHTML = '';
    if (current.stage && current.stage.art) current.stage.art.focus();
    return true;
  }

  /* ------------------------------------------------------------------
     Halaman
     ------------------------------------------------------------------ */
  function renderHome() {
    const nW = WORKS.length, nA = new Set(WORKS.map(w => w.artist)).size;
    main.innerHTML =
      '<section class="home">' +
        '<div class="home-head">' +
          '<h1 class="home-title"><span class="l1">' + tx(collector.heroLine1 || collector.name) + '</span>' +
          (collector.heroLine2 ? '<span class="l2">' + tx(collector.heroLine2) + '</span>' : '') + '</h1>' +
          (collector.fullName ? '<span class="home-sub label">' + tx(collector.fullName) + '</span>' : '') +
        '</div>' +
        '<div class="home-body">' +
          '<div class="home-about"><span class="label">' + tx(L().aboutCollector) + '</span><p>' + rich(collector.intro) + '</p></div>' +
          '<div class="home-cta">' +
            '<a class="btn-pill" href="#/collection" data-fresh>' + tx(L().enter) + ICON.right + '</a>' +
            '<a class="link-u" href="#/biography" data-fresh>' + tx(L().readBio) + '</a>' +
          '</div>' +
          (nW ? '<span class="home-count">' + esc(L().counts(nW, nA)) + '</span>' : '') +
        '</div>' +
        (collector.portrait ? '<figure class="portrait"><img src="' + esc(collector.portrait) + '" alt="' + tx(collector.portraitAlt) + '" fetchpriority="high"></figure>' : '') +
      '</section>';
    return '';
  }

  function renderBiography() {
    const catNames = CHAPTERS.filter(c => c !== OTHER).map(c => t(c.name));
    const facts = (collector.facts || []).map(f => [t(f.label), t(f.value)]).filter(f => f[0] && f[1]);
    if (catNames.length) facts.push([L().collectionFact, lowerRest(catNames)]);
    const ms = collector.milestones || [];
    main.innerHTML =
      '<article class="page bio">' +
        '<header class="bio-head"><div>' +
          '<span class="label">' + tx(L().biography) + '</span>' +
          '<h1 class="bio-title' + (collector.bioTitle ? ' long' : '') + '">' + rich(collector.bioTitle || collector.name) + '</h1>' +
          (collector.fullName ? '<p class="bio-full">' + tx(collector.fullName) + '</p>' : '') +
          (collector.statement ? '<p class="bio-statement">' + rich(collector.statement) + '</p>' : '') +
        '</div>' +
        (collector.bioPortrait && collector.bioPortrait.src ? photoHTML(collector.bioPortrait, 'collector-portrait')
          : collector.portrait ? '<figure class="portrait"><img src="' + esc(collector.portrait) + '" alt="' + tx(collector.portraitAlt) + '"></figure>' : '') +
        '</header>' +
        '<div class="bio-body">' +
          (facts.length ? '<dl class="facts">' + facts.map(f => '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>').join('') + '</dl>' : '<div></div>') +
          '<div class="prose">' + (collector.biography || []).map(p => '<p>' + rich(p) + '</p>').join('') +
            storyHTML(collector.story) + coverageHTML(collector.coverage) + '</div>' +
        '</div>' +
        (ms.length ? '<section class="milestones"><span class="label">' + tx(L().milestones) + '</span>' +
          '<div class="ms-wrap"><ol class="ms-list">' +
          ms.map(m => '<li><span class="ms-year">' + tx(m.year) + '</span><span class="ms-text">' + rich(m.text) + '</span></li>').join('') +
          '</ol>' + photoHTML(collector.stagePhoto, 'stage-photo') + '</div></section>' : '') +
        '<div class="page-end"><a class="btn-pill" href="#/collection" data-fresh>' + tx(L().walkCollection) + ICON.right + '</a></div>' +
      '</article>';
    return t(L().biography);
  }

  // Cerita kolektor: hanya tampil setelah Rossa menyampaikannya sendiri.
  function storyHTML(st) {
    if (!st || !(st.paragraphs || []).some(p => t(p))) return '';
    const w = st.work ? workBySlug.get(st.work) : null;
    return '<section class="collector-story">' + (t(st.title) ? '<h2>' + rich(st.title) + '</h2>' : '') +
      st.paragraphs.filter(p => t(p)).map(p => '<p>' + rich(p) + '</p>').join('') +
      (w ? '<p><a class="link-u" href="#/works/' + enc(w.slug) + '" data-fresh>' + rich(w.title) + '</a></p>' : '') + '</section>';
  }
  function coverageHTML(cv) {
    if (!cv || !cv.link || !cv.link.href) return '';
    return '<section class="coverage">' + (t(cv.title) ? '<span class="label">' + tx(cv.title) + '</span>' : '') +
      (t(cv.text) ? '<p>' + rich(cv.text) + '</p>' : '') + '<p>' + linkHTML(cv.link) + '</p></section>';
  }

  function viewToggle(active) {
    return '<nav class="view-toggle" aria-label="' + tx(L().viewLabel) + '">' +
      '<a href="#/collection" data-fresh' + (active === 'walk' ? ' aria-current="page"' : '') + '>' + tx(L().walk) + '</a>' +
      '<a href="#/index" data-fresh' + (active === 'index' ? ' aria-current="page"' : '') + '>' + tx(L().index) + '</a></nav>';
  }

  function renderCollection() {
    if (!WORKS.length) {
      main.innerHTML = '<section class="page"><h1 class="page-title">' + tx(L().nav.collection) + '</h1><p class="empty">' + tx(L().noWorks) + '</p></section>';
      return t(L().nav.collection);
    }
    main.innerHTML = viewToggle('walk') + '<div class="walk-host"></div>';
    const items = [{ kind: 'spacer' }];
    CHAPTERS.forEach((c, ci) => {
      items.push({ kind: 'intro', cat: c, ci });
      worksInCat(c).forEach(w => items.push({ kind: 'work', w }));
    });
    items.push({ kind: 'end', mode: 'collection' });
    current.walk = new Walk(main.querySelector('.walk-host'), items, { context: 'collection' });
    return t(L().nav.collection);
  }

  function cardHTML(w) {
    const d = dims(w), i = WORKS.indexOf(w);
    const kind = d.disp === 'hang' ? 'hang' : 'sculpt';
    const a = artistBySlug.get(w.artist);
    const cls = ['card-art', kind];
    if (d.round && kind === 'hang') cls.push('round');
    if (w.image) cls.push('has-img');
    const inner = w.image
      ? '<img src="' + esc(w.image) + '" alt="' + esc(altOf(w)) + '" loading="lazy" decoding="async" data-slug="' + esc(w.slug) + '">'
      : '<span class="ph" style="--tone:' + toneOf(w) + '"></span>';
    const meta = t(w.year);
    return '<a class="card" href="#/works/' + enc(w.slug) + '" data-fresh>' +
      '<span class="card-plate"><span class="' + cls.join(' ') + '" style="--r:' + d.ratio.toFixed(4) + ';--shape:' + shapeOf(d.ratio) + '"' +
      (w.image ? '' : ' role="img" aria-label="' + esc(altOf(w)) + '"') + '>' + inner + '</span></span>' +
      '<span class="card-meta"><span class="n">' + pad(i + 1) + '</span>' +
      (a ? '<span class="a">' + tx(a.name) + '</span>' : '') + '<span class="t">' + rich(w.title) + '</span>' +
      (meta ? '<span class="m">' + esc(meta) + '</span>' : '') + '</span></a>';
  }

  function renderIndex(route) {
    const filt = route.filter && CHAPTERS.some(c => c.id === route.filter) ? route.filter : null;
    const list = filt ? WORKS.filter(w => catOf(w).id === filt) : WORKS;
    main.innerHTML = viewToggle('index') +
      '<section class="page">' +
        '<span class="label">' + esc(L().works(WORKS.length)) + '</span>' +
        '<h1 class="page-title">' + tx(L().indexTitle) + '</h1>' +
        '<nav class="filters" aria-label="' + tx(L().filterLabel) + '">' +
          '<a class="chip" href="#/index"' + (!filt ? ' aria-current="true"' : '') + '>' + tx(L().all) + ' <span class="c">' + WORKS.length + '</span></a>' +
          CHAPTERS.map(c => '<a class="chip" href="#/index/' + enc(c.id) + '"' + (filt === c.id ? ' aria-current="true"' : '') + '>' + tx(c.name) +
            ' <span class="c">' + worksInCat(c).length + '</span></a>').join('') +
        '</nav>' +
        (list.length ? '<div class="grid">' + list.map(cardHTML).join('') + '</div>' : '<p class="empty">' + tx(L().noWorks) + '</p>') +
      '</section>';
    return t(L().indexTitle);
  }

  function renderArtists() {
    main.innerHTML =
      '<section class="page">' +
        '<span class="label">' + esc(L().artistCount(artists.length)) + '</span>' +
        '<h1 class="page-title">' + tx(L().nav.artists) + '</h1>' +
        '<ol class="alist">' + artists.map((a, i) => {
          const ws = worksOfArtist(a.slug);
          const cats = lowerRest(Array.from(new Set(ws.map(w => t(catOf(w).name)))));
          return '<li><a href="#/artists/' + enc(a.slug) + '" data-fresh data-peek="' + esc(ws[0] ? ws[0].slug : '') + '">' +
            '<span class="n">' + pad(i + 1) + '</span><span class="nm">' + tx(a.name) + '</span>' +
            '<span class="meta">' + esc(L().works(ws.length)) + (cats ? '<br>' + esc(cats) : '') + '</span></a></li>';
        }).join('') + '</ol>' +
      '</section>';
    bindPeek();
    return t(L().nav.artists);
  }

  function bindPeek() {
    if (!(window.matchMedia && window.matchMedia('(hover: hover)').matches)) return;
    const list = main.querySelector('.alist');
    if (!list) return;
    let cur = null;
    const move = e => {
      const x = e.clientX + 230 > window.innerWidth ? e.clientX - 230 : e.clientX + 30;
      peek.style.transform = 'translate(' + Math.round(x) + 'px,' + Math.round(e.clientY - 110) + 'px)';
    };
    const over = e => {
      const a = e.target.closest('a[data-peek]');
      if (!a) return;
      const slug = a.dataset.peek;
      if (slug !== cur) {
        cur = slug;
        const w = workBySlug.get(slug);
        if (w) {
          const d = dims(w), box = 200;
          let h = box, ww = box * d.ratio;
          if (ww > box) { ww = box; h = box / d.ratio; }
          peek.innerHTML = artHTML(w, '', { eager: true, decorative: true, style: 'left:' + Math.round((box - ww) / 2) + 'px;top:' + Math.round(box - h) + 'px;width:' + Math.round(ww) + 'px;height:' + Math.round(h) + 'px' });
        } else peek.innerHTML = '';
      }
      peek.classList.toggle('on', !!peek.innerHTML);
    };
    const leave = () => { peek.classList.remove('on'); cur = null; };
    list.addEventListener('mousemove', move);
    list.addEventListener('mouseover', over);
    list.addEventListener('mouseleave', leave);
    current.cleanup.push(() => { list.removeEventListener('mousemove', move); list.removeEventListener('mouseover', over); list.removeEventListener('mouseleave', leave); leave(); });
  }

  function renderArtist(slug) {
    const a = artistBySlug.get(slug);
    if (!a) return renderNotFound();
    const idx = artists.indexOf(a);
    const ws = worksOfArtist(slug);
    const meta = [[L().born, a.born], [L().based, a.based]].filter(r => t(r[1]))
      .map(r => '<div><dt>' + esc(r[0]) + '</dt><dd>' + tx(r[1]) + '</dd></div>').join('');
    main.innerHTML =
      '<header class="artist-head"><div>' +
        '<span class="label">' + tx(L().artist) + ' · ' + pad(idx + 1) + ' / ' + pad(artists.length) + '</span>' +
        '<h1 class="artist-name">' + tx(a.name) + '</h1>' +
        (meta ? '<dl class="artist-meta">' + meta + '</dl>' : '') +
        (a.portrait ? '<img class="artist-portrait" src="' + esc(a.portrait) + '" alt="' + tx(a.name) + '" loading="lazy">' : '') +
      '</div><div class="prose">' + (a.bio || []).map(p => '<p>' + rich(p) + '</p>').join('') + '</div></header>' +
      (ws.length
        ? '<div class="section-label"><span class="label">' + tx(L().worksInCollection) + '</span><span class="muted">' + esc(L().works(ws.length)) + '</span></div><div class="walk-host"></div>'
        : '<p class="page empty">' + tx(L().noWorksArtist) + '</p>');
    if (ws.length) {
      const next = artists.length > 1 ? artists[(idx + 1) % artists.length] : null;
      const items = [{ kind: 'spacer' }].concat(ws.map(w => ({ kind: 'work', w }))).concat([{ kind: 'end', mode: 'artist', next }]);
      current.walk = new Walk(main.querySelector('.walk-host'), items, { context: 'artist', artist: a, defaultRoom: 'silk' });
    }
    return plain(a.name);
  }

  function renderWork(slug) {
    const w = workBySlug.get(slug);
    if (!w) return renderNotFound();
    const i = WORKS.indexOf(w), c = catOf(w), a = artistBySlug.get(w.artist);
    const rows = [
      [L().year, tx(w.year)],
      [L().medium, tx(w.medium)],
      [L().size, esc(sizeText(w))],
      [L().category, c !== OTHER ? '<a class="link-u" href="#/collection/' + enc(c.id) + '" data-fresh>' + tx(c.name) + '</a>' : tx(c.name)],
      [L().status, tx(w.status)],
      [L().code, tx(w.code)]
    ].filter(r => r[1]);
    main.innerHTML =
      '<article class="work">' +
        '<div class="stage" id="stage"></div>' +
        '<div class="work-info">' +
          '<button class="back" type="button" data-back>' + ICON.left + tx(L().back) + '</button>' +
          '<span class="label">' + tx(c.name) + ' · ' + pad(i + 1) + ' / ' + pad(WORKS.length) + '</span>' +
          '<h1 class="work-title">' + rich(w.title) + '</h1>' +
          (a ? '<p class="work-artist"><a class="link-u" href="#/artists/' + enc(a.slug) + '" data-fresh>' + tx(a.name) + '</a></p>' : '') +
          '<dl class="work-dl">' + rows.map(r => '<div><dt>' + esc(r[0]) + '</dt><dd>' + r[1] + '</dd></div>').join('') + '</dl>' +
          (t(w.note) ? '<p class="work-note">' + rich(w.note) + '</p>' : '') +
          (t(w.collectorNote) ? '<div class="work-cnote"><span class="label">' + tx(L().collectorNote) + '</span><p>' + rich(w.collectorNote) + '</p></div>' : '') +
          ((w.details || []).some(d => d && d.src) ? '<div class="work-details"><span class="label">' + tx(L().details) + '</span><div class="wd-row">' +
            w.details.filter(d => d && d.src).map(d => '<a href="' + esc(d.src) + '" target="_blank" rel="noopener"><img src="' + esc(d.src) + '" alt="' + tx(d.alt) + '" loading="lazy"></a>').join('') + '</div></div>' : '') +
          (t(w.credit) ? '<p class="work-credit">' + tx(L().credit) + ': ' + rich(w.credit) + '</p>' : '') +
          '<div class="work-more">' +
            '<a class="link-u" href="#/collection/' + enc(w.slug) + '" data-fresh>' + tx(L().viewOnWall) + '</a>' +
            (a ? '<a class="link-u" href="#/artists/' + enc(a.slug) + '" data-fresh>' + tx(L().viewArtist) + '</a>' : '') +
          '</div>' +
        '</div>' +
      '</article>' +
      '<div class="lightbox" id="lightbox" hidden></div>';
    setRoom(roomOf(w));
    current.stage = new Stage(main.querySelector('#stage'), w);
    return plain(w.title);
  }

  function renderNotFound() {
    main.innerHTML = '<section class="page notfound"><h1 class="page-title">' + tx(L().notFound) + '</h1>' +
      '<p><a class="btn-pill" href="#/" data-fresh>' + tx(L().home) + ICON.right + '</a></p></section>';
    return t(L().notFound);
  }

  /* ------------------------------------------------------------------
     Rute
     ------------------------------------------------------------------ */
  function parseRoute() {
    let raw = (location.hash || '').replace(/^#\/?/, '');
    try { raw = decodeURIComponent(raw); } catch (e) { /* biarkan apa adanya */ }
    const parts = raw.split('/').filter(Boolean);
    const a = parts[0], b = parts[1];
    if (!a) return { name: 'home', page: 'home', key: '/' };
    if (a === 'biography') return { name: 'biography', page: 'biography', key: '/biography' };
    if (a === 'collection') return { name: 'collection', page: 'collection', focus: b || null, key: '/collection' };
    if (a === 'index') return { name: 'index', page: 'collection', filter: b || null, key: '/index/' + (b || '') };
    if (a === 'artists') return b ? { name: 'artist', page: 'artists', slug: b, key: '/artists/' + b } : { name: 'artists', page: 'artists', key: '/artists' };
    if (a === 'works' && b) return { name: 'work', page: 'collection', slug: b, key: '/works/' + b };
    return { name: 'notfound', page: null, key: '/404' };
  }

  let current = { route: null, cleanup: [], walk: null, stage: null };
  let fresh = false;
  let navCount = 0;
  let lastKey = null;
  const scrollMem = new Map();
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  function render(opts) {
    opts = opts || {};
    const route = parseRoute();
    current.cleanup.forEach(fn => { try { fn(); } catch (e) { /* abaikan */ } });
    if (current.walk) current.walk.destroy();
    current = { route, cleanup: [], walk: null, stage: null };
    closeMenu(false);
    document.documentElement.lang = lang;
    renderShell(route.page);
    setRoom('silk');
    main.classList.remove('enter');
    void main.offsetWidth;
    main.classList.add('enter');
    let title;
    switch (route.name) {
      case 'home': title = renderHome(); break;
      case 'biography': title = renderBiography(); break;
      case 'collection': title = renderCollection(); break;
      case 'index': title = renderIndex(route); break;
      case 'artists': title = renderArtists(); break;
      case 'artist': title = renderArtist(route.slug); break;
      case 'work': title = renderWork(route.slug); break;
      default: title = renderNotFound();
    }
    renderDock(route);
    const site = plain(settings.siteName || collector.name || 'Rossa');
    document.title = title ? title + ' · ' + site : site + ' · ' + plain(settings.siteSubtitle);

    const restore = !fresh && scrollMem.has(route.key);
    const wantFocus = route.name === 'collection' && route.focus && !restore && opts.keepScroll == null;
    const y = opts.keepScroll != null ? opts.keepScroll : (restore ? scrollMem.get(route.key) : 0);
    fresh = false;
    window.scrollTo(0, y);
    requestAnimationFrame(() => {
      if (wantFocus && current.walk) current.walk.scrollToChapter(route.focus, false);
      else window.scrollTo(0, y);
      if (current.walk) current.walk.update(true);
    });
    lastKey = route.key;
  }

  window.addEventListener('hashchange', () => {
    const h = location.hash;
    if (h && h.length > 1 && h.charAt(1) !== '/') return;
    if (lastKey) scrollMem.set(lastKey, window.scrollY);
    navCount++;
    render();
  });

  function setLang(l) {
    if (l === lang || LANGS.indexOf(l) < 0) return;
    lang = l;
    try { localStorage.setItem('rossa-lang', l); } catch (e) { /* abaikan */ }
    render({ keepScroll: window.scrollY });
  }

  document.addEventListener('click', e => {
    const tgt = e.target;
    if (!(tgt instanceof Element)) return;
    const langBtn = tgt.closest('[data-lang]');
    if (langBtn) { setLang(langBtn.dataset.lang); return; }
    if (tgt.closest('.menu-btn')) { openMenu(); return; }
    if (tgt.closest('[data-close-menu]')) { closeMenu(true); return; }
    if (tgt.closest('[data-back]')) {
      if (navCount > 0) history.back(); else location.hash = '#/collection';
      return;
    }
    const first = tgt.closest('[data-walk-first]');
    if (first && current.walk) { e.preventDefault(); current.walk.scrollToWork(0, true); return; }
    const a = tgt.closest('a[href^="#"]');
    if (a) {
      if (a.hasAttribute('data-fresh')) fresh = true;
      const href = a.getAttribute('href');
      const same = href === location.hash || (href === '#/' && (location.hash === '' || location.hash === '#' || location.hash === '#/'));
      if (same) {
        e.preventDefault();
        closeMenu(false);
        fresh = false;
        const r = parseRoute();
        if (r.name === 'collection' && r.focus && current.walk) current.walk.scrollToChapter(r.focus, true);
        else window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' });
      }
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (closeLightbox()) return;
    closeMenu(true);
  });

  skip.addEventListener('click', () => { main.focus(); });

  document.addEventListener('load', e => {
    const img = e.target;
    if (!img || img.tagName !== 'IMG' || !img.dataset || !img.dataset.slug) return;
    const w = workBySlug.get(img.dataset.slug);
    if (!w) return;
    const d = dims(w);
    if (d.round) return;
    const nr = img.naturalWidth / img.naturalHeight;
    if (!nr || !isFinite(nr)) return;
    if (Math.abs(nr - d.ratio) / d.ratio > 0.03) { ratioOverride.set(w.slug, nr); scheduleRelayout(); }
  }, true);

  let relT = 0;
  function scheduleRelayout() {
    clearTimeout(relT);
    relT = setTimeout(() => {
      if (current.walk) current.walk.layout();
      if (current.stage) current.stage.layout();
      main.querySelectorAll('.card').forEach(card => {
        const w = workBySlug.get(decodeURIComponent((card.getAttribute('href') || '').split('/').pop()));
        const box = card.querySelector('.card-art');
        if (w && box) box.style.setProperty('--r', dims(w).ratio.toFixed(4));
      });
    }, 150);
  }

  let rsT = 0, lastW = window.innerWidth, lastH = window.innerHeight;
  window.addEventListener('resize', () => {
    clearTimeout(rsT);
    rsT = setTimeout(() => {
      const w = window.innerWidth, h = window.innerHeight;
      if (w === lastW && Math.abs(h - lastH) < 90) return;
      lastW = w; lastH = h;
      if (current.walk) {
        const wk = current.walk, k = wk.active, moved = wk.p > 4;
        wk.layout();
        if (moved && k >= 0) wk.scrollToWork(k, false);
      }
      if (current.stage) current.stage.layout();
    }, 120);
  });

  render();
})();
