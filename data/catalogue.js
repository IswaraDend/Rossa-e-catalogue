/*
 * Data publik katalog. Hanya karya yang sudah disetujui untuk tayang masuk ke sini.
 * Entri riset berstatus draf disimpan di research/drafts.json dan TIDAK dimuat situs.
 *
 * Kategori bisa ditambah: beri id, label, dan sumbu dimensi yang ditampilkan
 * (urutan sumbu menentukan urutan tampil, misalnya tinggi × lebar × dalam).
 * Filter di halaman koleksi hanya memunculkan kategori yang punya karya tayang.
 *
 * Contoh bentuk satu karya (jangan dipakai sebagai karya contoh di situs):
 * {
 *   id: "nama-seniman-judul-karya",        // dipakai di URL: karya.html?id=...
 *   artist: "Nama Seniman",
 *   title: "Judul Karya",
 *   year: 2022,
 *   category: "patung",                     // id dari daftar categories
 *   medium: "Keramik",
 *   dimensions: { height: 40, width: 30, depth: 25, unit: "cm" },
 *   image: { src: "assets/works/....jpg", width: 1600, height: 2000, alt: "..." },
 *   details: [ { src: "...", width: 1600, height: 1200, alt: "...", caption: "..." } ],
 *   collectorNote: "",                      // catatan kolektor, jika tersedia
 *   credit: "Foto: ..."                     // kredit dokumentasi
 * }
 * Kolom yang kosong atau tidak diisi otomatis disembunyikan.
 */
window.CATALOGUE = {
  categories: [
    { id: "lukisan", label: "Lukisan", dimensionAxes: ["height", "width"] },
    { id: "patung", label: "Patung", dimensionAxes: ["height", "width", "depth"] }
  ],

  works: [],

  site: {
    // Foto utama beranda. Biarkan null sampai ada wide shot yang disetujui
    // (satu karya terlihat utuh; judul tetap di luar gambar).
    // Bentuk: { src, width, height, alt, credit }
    heroImage: null,

    coverage: {
      label: "Di rumah Rossa",
      text: "Dalam episode <em>My Home My Style</em>, Rossa memperlihatkan sejumlah karya favorit di kediamannya.",
      linkText: "Tonton liputan ELLE Indonesia",
      href: "https://elle.co.id/elle-tv/rossa-unjuk-koleksi-seni-yang-menghidupkan-karakter-rumahnya-my-home-my-style"
    },

    // Ruang untuk cerita akuisisi pertama atau alasan memilih satu karya,
    // diisi hanya setelah Rossa menyampaikannya sendiri.
    // Bentuk: { heading: "...", paragraphs: ["..."], workId: "opsional, id karya terkait" }
    collectorStory: null
  }
};
