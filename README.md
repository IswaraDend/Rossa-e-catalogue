# Koleksi Rossa

Katalog statis (HTML, CSS, JavaScript tanpa build). Buka `index.html` langsung di browser, atau host di layanan statis apa pun (misalnya GitHub Pages).

| Halaman | File |
|---|---|
| Beranda | `index.html` |
| Koleksi (grid + filter) | `koleksi.html` |
| Detail karya | `karya.html?id=<id-karya>` |
| Profil kolektor | `profil.html` |

## Data

- **`data/catalogue.js`**: data publik: kategori, karya yang sudah tayang, foto utama beranda, label liputan, dan cerita kolektor. Format setiap karya dijelaskan di komentar file.
- **`research/drafts.json`**: entri riset berstatus draf. Situs **tidak** memuat file ini. Pindahkan entri ke data publik hanya setelah status koleksi, dimensi, foto reproduksi, dan persetujuan penayangan dikonfirmasi tim Rossa.

Aturan tampilan:
- Filter dibentuk dari kategori yang punya karya tayang. Bila hanya ada satu kategori, filter disembunyikan.
- Kolom metadata yang kosong otomatis disembunyikan.
- Dimensi mengikuti `dimensionAxes` kategori: lukisan tinggi × lebar, patung tinggi × lebar × dalam, dengan satuan.
- Foto utuh karya tampil dengan rasio asli. Isi `width` dan `height` sesuai file.
- Foto utama beranda (`site.heroImage`) dan cerita kolektor (`site.collectorStory`) baru muncul setelah diisi.

Jangan menambahkan karya contoh ke data publik.
