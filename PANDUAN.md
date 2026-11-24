# Panduan Situs E-Katalog Koleksi Rossa

Versi: Draft v1

## 1. Isi folder

```
rossa-collection/
  index.html        halaman utama, buka file ini untuk melihat situs
  content.js        SEMUA teks dan data: profil kolektor, seniman, karya, kategori
  images/
    rossa/          foto Rossa
    works/          foto karya
    artists/        foto seniman (opsional)
  assets/           tampilan dan mesin situs, tidak perlu diubah
    vendor/         pustaka animasi GSAP (lihat bagian 10)
```

Yang perlu disentuh hanya `content.js` dan folder `images/`.

## 2. Cara membuka

Klik dua kali `index.html`. Situs langsung jalan di browser, tanpa internet dan tanpa instalasi.

Alamat halaman:

| Halaman | Alamat |
|---|---|
| Rossa (pembuka + profil kolektor) | `index.html#/` |
| Langsung ke profil kolektor | `index.html#/biography` (alamat lama, tetap berlaku) |
| Koleksi (jelajah dinding) | `index.html#/collection` |
| Indeks koleksi (grid) | `index.html#/index` |
| Daftar seniman | `index.html#/artists` |
| Satu seniman | `index.html#/artists/slug-seniman` |
| Satu karya | `index.html#/works/slug-karya` |

## 3. Mengubah konten

Buka `content.js` dengan editor teks (VS Code, Sublime, atau Notepad). Jangan pakai Word.

Aturan penulisan:

- Teks dua bahasa: `{ id: "Teks Indonesia", en: "English text" }`
- Teks satu bahasa: `"Teks"`
- Huruf miring: apit dengan bintang, contoh `*Tegar*`
- Teks selalu di dalam tanda kutip `" "`, dan setiap baris data diakhiri koma
- Baris yang diawali `//` adalah catatan, tidak tampil di situs

Kalau setelah diedit situs menampilkan pesan "Konten tidak terbaca", berarti ada koma atau tanda kutip yang hilang di bagian yang terakhir diubah.

### Menambah karya

Salin satu blok karya di bagian 5 `content.js`, tempel di bawahnya, lalu ganti isinya:

```js
{
  slug: "judul-karya-baru", code: "RC-013",
  title: { id: "Judul Karya", en: "Artwork Title" },
  artist: "slug-seniman", category: "lukisan",
  year: "2025",
  medium: { id: "Cat minyak di atas kanvas", en: "Oil on canvas" },
  size: { h: 120, w: 90 },
  image: "images/works/judul-karya-baru.jpg", tone: "ochre",
  note: { id: "Catatan karya.", en: "Note on the work." }
},
```

- `slug` harus unik, huruf kecil, tanpa spasi (pakai tanda hubung).
- `size` dalam cm. Lukisan `{ h, w }`, patung `{ h, w, d }`, karya bundar `{ diameter: 90 }`. Ukuran ini menentukan skala karya di dinding, jadi isi seakurat mungkin.
- `status` (opsional) untuk keterangan seperti "Komisi, dalam proses".
- Urutan karya di dalam setiap bab mengikuti urutan di file.

### Menambah seniman

Salin satu blok seniman di bagian 4. `slug` seniman harus sama persis dengan isian `artist` di karya-karyanya. Seniman otomatis muncul di halaman Seniman, lengkap dengan dinding karyanya.

### Menambah kategori karya baru

Di bagian 3 sudah ada contoh kategori "Karya di Atas Kertas" yang dinonaktifkan. Hapus tanda `//` untuk mengaktifkan, lalu sesuaikan.

- `display`: `"hang"` digantung di dinding, `"plinth"` di atas pedestal, `"floor"` langsung di lantai
- `room`: warna ruang bab, pilih `linen`, `velvet`, `stone`, `olive`, atau `silk`

Kategori tanpa karya tidak tampil, jadi aman ditambahkan lebih dulu.

## 4. Foto

| Jenis | Format | Ukuran disarankan |
|---|---|---|
| Lukisan dan karya dinding | JPG, dipotong pas di tepi kanvas, tanpa latar | sisi terpanjang 2000 px, 300 sampai 600 KB |
| Patung | PNG berlatar transparan (paling bagus) atau JPG berlatar polos | sisi terpanjang 2000 px |
| Foto Rossa dan seniman | JPG | sisi terpanjang 1600 px |

- Nama file: huruf kecil, tanpa spasi, contoh `tanpa-judul-1.jpg`.
- Selama `image` dikosongkan (`""`), situs menampilkan bidang warna dengan tulisan "Foto menyusul". Warnanya diatur lewat `tone`.
- Kalau proporsi foto berbeda dari ukuran yang tertulis, situs menyesuaikan ke proporsi foto.

## 5. Bahasa dan label draf

Di bagian 1 `content.js`:

- `defaultLanguage`: bahasa saat situs pertama dibuka (`"id"` atau `"en"`)
- `languages`: hapus salah satu bila situs cukup satu bahasa
- `draftLabel`: label "Draft v1" di pojok. Kosongkan (`""`) saat situs siap tayang.

## 6. Status isi saat ini

Ditandai di `content.js`:

- **[DUMMY]**: isi contoh, wajib diganti data asli.
  - Ruang paragraf, data, dan tonggak tambahan di profil kolektor (masih berupa catatan, belum tampil)
  - Pengantar bab Lukisan dan Patung
  - Seniman "Nama Pelukis", "Nama Perupa", "Nama Pematung" beserta biografinya
  - Karya "Tanpa Judul I" sampai "Tanpa Judul XI" beserta tahun, medium, ukuran, dan kode inventaris
- **[CEK]**: sudah berdasarkan sumber atau data proyek, tetap perlu konfirmasi tim Rossa.
  - Paragraf profil kolektor, kolom data (Minat, Cara mengoleksi, Karya komisi), dan perjalanan koleksi (sumber: liputan ELLE Indonesia 2022 dan data proyek)
  - Biografi Aditya Sena Hadikusumo dan entri TEGAR (ukuran, material, dan tahun dikosongkan karena belum final)

## 6a. Tambahan dari brief (Draft v1 + brief)

- **Karya contoh**: semua karya dan seniman [DUMMY] kini bertanda `sample: true`. Selama `settings.showSamples: true`, contoh tetap tampil untuk melihat tata letak. **Ubah ke `false` sebelum tayang**; halaman publik tidak boleh memuat karya contoh.
- **Entri riset berstatus draf** (Sekar Puti, *It’s About Time*) disimpan di `research/drafts.json`, di luar data publik. Situs tidak memuat file itu.
- **Profil kolektor** (dulu halaman Biografi): kini satu halaman dengan Rossa, tampil di bawah bagian pembuka. Isinya hanya tentang Rossa sebagai kolektor seni, tanpa karier musik: judul "Rossa, sang kolektor" (`bioTitle`), paragraf profil (`biography`), kolom data (`facts`), label liputan ELLE (`coverage`), dan perjalanan koleksi (`milestones`). Potret wawancara dan foto konser tidak dipakai lagi. Tautan "Tentang Rossa" di bagian pembuka menggulir ke profil ini.
- **Cerita kolektor** (`collector.story`): ruang untuk cerita akuisisi pertama atau alasan memilih satu karya. Isi hanya setelah Rossa menyampaikannya sendiri; selama kosong, bagian ini tidak tampil.
- **Field karya baru**: `collectorNote` (catatan kolektor), `details` (foto detail), `credit` (kredit dokumentasi). Semua opsional dan disembunyikan bila kosong.
- Foto utama beranda masih potret `images/rossa/rossa-portrait.jpg`. Pastikan sumber dan izin publikasinya sebelum tayang. Foto pemotretan ELLE (Gavriela Go, Desember 2022) hanya dipakai bila ada master dan izin dari pemegang hak.

## 7. Tayang online dan QR di samping karya

Folder ini bisa langsung diunggah ke hosting statis apa pun (Netlify, Vercel, GitHub Pages, atau hosting cPanel biasa) tanpa pengaturan tambahan.

Setiap karya punya alamat tetap, contoh:

```
https://domain-situs.com/#/works/tegar
```

Alamat inilah yang dipakai untuk QR atau barcode di label karya. Karena itu `slug` karya jangan diubah setelah label dicetak.

## 8. Sumber data profil

Sumber profil kolektor:

- ELLE Indonesia, *My Home My Style*: https://elle.co.id/elle-tv/rossa-unjuk-koleksi-seni-yang-menghidupkan-karakter-rumahnya-my-home-my-style

Sumber data umum Rossa (dipakai di versi sebelumnya, kini tidak tampil di situs):


- Wikipedia, Rossa (singer): https://en.wikipedia.org/wiki/Rossa_(singer)
- rossaofficial.com, About Rossa: https://rossaofficial.com/?p=1253
- Apple Music, profil Rossa: https://music.apple.com/ca/artist/rossa/121494410
- Viva, profil Rossa: https://www.viva.co.id/siapa/read/323-rossa-roslaina-sri-handayani
- Popbela, usaha Rossa: https://www.popbela.com/career/inspiration/firly-fenti/ditaksir-punya-harta-lebih-dari-30-miliar-ini-5-sumber-kekayaan-rossa
- Kosmo, sapaan Teh Oca: https://www.kosmo.com.my/?p=157526

Data koleksi seni Rossa tidak ditemukan di sumber publik, jadi seluruh daftar karya dan seniman (selain TEGAR) masih contoh.

## 9. Huruf

Situs memakai Cormorant Garamond (SIL Open Font License, lisensi ada di `assets/fonts/`). File huruf sudah disertakan, jadi tampilan tetap sama walau dibuka tanpa internet.

## 10. Animasi (GSAP)

Gerak tambahan memakai [GSAP](https://gsap.com) 3.15.1, gratis untuk situs ini di bawah GSAP Standard License. File-nya sudah disertakan di `assets/vendor/` (`gsap.min.js` dan `SplitText.min.js`), jadi situs tetap jalan tanpa internet.

Yang sudah memakai GSAP:

- **Judul beranda**: dipecah per huruf (SplitText), tiap huruf naik dari balik garis judul. Baris kedua menyusul dengan sedikit kemiringan.

Catatan:

- Bila pengunjung memilih "kurangi gerak" di perangkatnya, atau file GSAP tidak terbaca, judul memakai animasi masuk biasa.
- Pembaca layar tetap membaca judul utuh ("Koleksi Rossa"), bukan per huruf.
- Saat memperbarui GSAP, ganti kedua file di `assets/vendor/` dengan versi yang sama dari paket npm `gsap` (folder `dist/`).

