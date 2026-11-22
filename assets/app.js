(function () {
  "use strict";
  var data = window.CATALOGUE || { categories: [], works: [], site: {} };
  var site = data.site || {};

  function isFilled(v) {
    if (v === null || v === undefined) return false;
    if (typeof v === "string") return v.trim() !== "";
    if (Array.isArray(v)) return v.length > 0;
    return true;
  }
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (attrs[k] === null || attrs[k] === undefined) return;
      if (k === "text") node.textContent = attrs[k];
      else if (k === "className") node.className = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }
  function img(image, extra) {
    var a = { src: image.src, alt: image.alt || "", loading: "lazy", decoding: "async" };
    if (image.width) a.width = image.width;
    if (image.height) a.height = image.height;
    return el("img", Object.assign(a, extra || {}));
  }
  function categoryById(id) {
    return (data.categories || []).filter(function (c) { return c.id === id; })[0];
  }

  // Lukisan: tinggi × lebar; patung: tinggi × lebar × dalam, sesuai dimensionAxes kategori.
  var num = new Intl.NumberFormat("id-ID", { maximumFractionDigits: 2 });
  function formatDimensions(work) {
    var d = work.dimensions;
    if (!d) return "";
    var cat = categoryById(work.category);
    var axes = (cat && cat.dimensionAxes) || ["height", "width", "depth"];
    var values = axes.map(function (a) { return d[a]; });
    if (!values.every(isFilled)) return "";
    return values.map(function (v) { return num.format(v); }).join(" × ") + " " + (d.unit || "cm");
  }

  /* Beranda */
  function renderHome() {
    var slot = document.getElementById("hero");
    var h = site.heroImage;
    if (!slot || !h || !h.src) return;
    var fig = el("figure", { className: "hero-figure" }, [img(h, { loading: "eager" })]);
    if (isFilled(h.credit)) fig.appendChild(el("figcaption", { text: h.credit }));
    slot.appendChild(fig);
  }

  /* Profil */
  function renderProfile() {
    var cov = site.coverage, slot = document.getElementById("coverage");
    if (slot && cov && cov.href) {
      var p = el("p"); p.innerHTML = cov.text; // teks editorial dari data situs
      slot.appendChild(el("section", { className: "coverage", "aria-labelledby": "coverage-h" }, [
        el("h2", { id: "coverage-h", text: cov.label }),
        p,
        el("p", {}, [el("a", { href: cov.href, rel: "noopener", target: "_blank", text: cov.linkText })])
      ]));
    }
    var story = site.collectorStory, sslot = document.getElementById("collector-story");
    if (sslot && story && isFilled(story.paragraphs)) {
      var sec = el("section", { className: "collector-story" });
      if (isFilled(story.heading)) sec.appendChild(el("h2", { text: story.heading }));
      story.paragraphs.forEach(function (t) { sec.appendChild(el("p", { text: t })); });
      if (isFilled(story.workId) && workById(story.workId)) {
        sec.appendChild(el("p", {}, [el("a", { href: "karya.html?id=" + encodeURIComponent(story.workId), text: "Lihat karya" })]));
      }
      sslot.appendChild(sec);
    }
  }

  /* Koleksi */
  function card(work) {
    var thumb = el("span", { className: "thumb" }, [work.image && work.image.src ? img(work.image) : null]);
    var meta = el("span", { className: "meta" }, [
      isFilled(work.artist) ? el("span", { className: "artist", text: work.artist }) : null,
      isFilled(work.title) ? el("span", { className: "title", text: work.title }) : null,
      isFilled(work.year) ? el("span", { className: "year", text: String(work.year) }) : null
    ]);
    return el("li", { className: "card" }, [
      el("a", { href: "karya.html?id=" + encodeURIComponent(work.id) }, [thumb, meta])
    ]);
  }
  function renderCollection() {
    var grid = document.getElementById("grid"), filters = document.getElementById("filters");
    var works = data.works || [];
    if (!grid) return;
    if (!works.length) {
      grid.replaceWith(el("p", { className: "empty", text: "Karya dari koleksi akan segera ditampilkan di sini." }));
      filters.remove();
      return;
    }
    var used = (data.categories || []).filter(function (c) {
      return works.some(function (w) { return w.category === c.id; });
    });
    var current = new URLSearchParams(location.search).get("kategori");
    if (!used.some(function (c) { return c.id === current; })) current = null;

    function draw() {
      grid.innerHTML = "";
      works.filter(function (w) { return !current || w.category === current; })
           .forEach(function (w) { grid.appendChild(card(w)); });
      Array.prototype.forEach.call(filters.querySelectorAll("button"), function (b) {
        b.setAttribute("aria-pressed", String((b.dataset.cat || null) === current));
      });
    }
    if (used.length > 1) {
      [{ id: "", label: "Semua karya" }].concat(used).forEach(function (c) {
        var b = el("button", { type: "button", "data-cat": c.id, text: c.label });
        b.addEventListener("click", function () {
          current = c.id || null;
          var url = new URL(location.href);
          if (current) url.searchParams.set("kategori", current); else url.searchParams.delete("kategori");
          history.replaceState(null, "", url);
          draw();
        });
        filters.appendChild(el("li", {}, [b]));
      });
    } else {
      filters.remove();
    }
    draw();
  }

  /* Detail karya */
  function workById(id) {
    return (data.works || []).filter(function (w) { return w.id === id; })[0];
  }
  function renderWork() {
    var root = document.getElementById("work");
    if (!root) return;
    var work = workById(new URLSearchParams(location.search).get("id"));
    if (!work) {
      root.appendChild(el("p", { className: "empty", text: "Karya tidak ditemukan." }));
      return;
    }
    document.title = [work.title, work.artist].filter(isFilled).join(" — ") + " · Koleksi Rossa";

    var figure = work.image && work.image.src
      ? el("figure", { className: "work-figure" }, [img(work.image, { loading: "eager" })]) : null;

    var specs = el("dl", { className: "specs" });
    var cat = categoryById(work.category);
    [["Tahun", isFilled(work.year) ? String(work.year) : ""],
     ["Kategori", cat ? cat.label : ""],
     ["Medium", work.medium],
     ["Dimensi", formatDimensions(work)]].forEach(function (row) {
      if (!isFilled(row[1])) return;
      specs.appendChild(el("dt", { text: row[0] }));
      specs.appendChild(el("dd", { text: row[1] }));
    });

    var info = el("div", { className: "work-info" }, [
      isFilled(work.artist) ? el("p", { className: "artist", text: work.artist }) : null,
      isFilled(work.title) ? el("h1", { text: work.title }) : null,
      specs.children.length ? specs : null,
      isFilled(work.collectorNote) ? el("div", { className: "note" }, [
        el("h2", { text: "Catatan kolektor" }), el("p", { text: work.collectorNote })
      ]) : null,
      isFilled(work.credit) ? el("p", { className: "credit", text: work.credit }) : null
    ]);
    root.appendChild(el("div", { className: "work" }, [figure, info]));

    if (isFilled(work.details)) {
      var details = el("div", { className: "details" });
      work.details.forEach(function (d) {
        if (!d || !d.src) return;
        details.appendChild(el("figure", {}, [img(d),
          isFilled(d.caption) ? el("figcaption", { className: "credit", text: d.caption }) : null]));
      });
      if (details.children.length) root.appendChild(details);
    }
  }

  var page = document.body.dataset.page;
  ({ home: renderHome, profile: renderProfile, collection: renderCollection, work: renderWork }[page] || function () {})();
})();
