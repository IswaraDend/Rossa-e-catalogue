# Panduan Situs E-Katalog Koleksi Rossa

Versi: Draft v1

## 1. Isi folder

```
rossa-collection/
  index.html        halaman utama, buka file ini untuk melihat situs
  content.js        SEMUA teks dan data: biografi, seniman, karya, kategori
  images/
    rossa/          foto Rossa
    works/          foto karya
    artists/        foto seniman (opsional)
  assets/           tampilan dan mesin situs, tidak perlu diubah
```

Yang perlu disentuh hanya `content.js` dan folder `images/`.

## 2. Cara membuka

Klik dua kali `index.html`. Situs langsung jalan di browser, tanpa internet dan tanpa instalasi.

Alamat halaman:

| Halaman | Alamat |
|---|---|
| Beranda | `index.html#/` |
| Biografi | `index.html#/biography` |
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
  - Paragraf ke-3 biografi (sisi Rossa sebagai kolektor)
  - Pengantar bab Lukisan dan Patung
  - Seniman "Nama Pelukis", "Nama Perupa", "Nama Pematung" beserta biografinya
  - Karya "Tanpa Judul I" sampai "Tanpa Judul XI" beserta tahun, medium, ukuran, dan kode inventaris
- **[CEK]**: sudah berdasarkan sumber atau data proyek, tetap perlu konfirmasi tim Rossa.
  - Paragraf 1, 2, dan 4 biografi, kolom data, dan tonggak perjalanan (sumber publik, lihat bagian 8)
  - Biografi Aditya Sena Hadikusumo dan entri TEGAR (ukuran, material, dan tahun dikosongkan karena belum final)

## 7. Tayang online dan QR di samping karya

Folder ini bisa langsung diunggah ke hosting statis apa pun (Netlify, Vercel, GitHub Pages, atau hosting cPanel biasa) tanpa pengaturan tambahan.

Setiap karya punya alamat tetap, contoh:

```
https://domain-situs.com/#/works/tegar
```

Alamat inilah yang dipakai untuk QR atau barcode di label karya. Karena itu `slug` karya jangan diubah setelah label dicetak.

## 8. Sumber data biografi

- Wikipedia, Rossa (singer): https://en.wikipedia.org/wiki/Rossa_(singer)
- rossaofficial.com, About Rossa: https://rossaofficial.com/?p=1253
- Apple Music, profil Rossa: https://music.apple.com/ca/artist/rossa/121494410
- Viva, profil Rossa: https://www.viva.co.id/siapa/read/323-rossa-roslaina-sri-handayani
- Popbela, usaha Rossa: https://www.popbela.com/career/inspiration/firly-fenti/ditaksir-punya-harta-lebih-dari-30-miliar-ini-5-sumber-kekayaan-rossa
- Kosmo, sapaan Teh Oca: https://www.kosmo.com.my/?p=157526

Data koleksi seni Rossa tidak ditemukan di sumber publik, jadi seluruh daftar karya dan seniman (selain TEGAR) masih contoh.

## 9. Huruf

Situs memakai Cormorant Garamond (SIL Open Font License, lisensi ada di `assets/fonts/`). File huruf sudah disertakan, jadi tampilan tetap sama walau dibuka tanpa internet.
