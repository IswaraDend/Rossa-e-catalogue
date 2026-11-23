/* =====================================================================
   KONTEN SITUS : KOLEKSI ROSSA
   ---------------------------------------------------------------------
   Semua teks, data seniman, dan data karya ada di file ini.
   File lain (index.html, assets/) tidak perlu disentuh.

   ATURAN SINGKAT
   1. Teks dua bahasa ditulis begini:  { id: "Teks Indonesia", en: "English text" }
      Kalau cukup satu bahasa, tulis teks biasa:  "Teks"
   2. Tanda bintang membuat huruf miring:  *Tegar*  tampil sebagai  Tegar (miring)
   3. Setiap baris data diakhiri koma. Teks selalu di dalam tanda kutip " ".
   4. Foto: taruh file di folder images/, lalu tulis path-nya,
      contoh  image: "images/works/tanpa-judul-1.jpg"
      Kosongkan ( "" ) bila foto belum ada; situs menampilkan bidang pengganti.
   5. Baris yang diawali  //  adalah catatan, tidak tampil di situs.

   Tanda  [DUMMY]  = isi contoh, wajib diganti data asli sebelum tayang.
   Tanda  [CEK]    = sudah berdasarkan sumber/data, tetap minta konfirmasi tim Rossa.
   ===================================================================== */

window.SITE = {

  /* -------------------------------------------------------------------
     1. PENGATURAN UMUM
     ------------------------------------------------------------------- */
  settings: {
    siteName: "Rossa",
    siteSubtitle: { id: "Koleksi Seni Rupa", en: "Art Collection" },

    defaultLanguage: "id",          // bahasa saat situs pertama dibuka: "id" atau "en"
    languages: ["id", "en"],        // hapus salah satu untuk situs satu bahasa

    draftLabel: "Draft v1",         // label kecil penanda draf. Kosongkan ("") saat situs siap tayang.
    contactEmail: ""                // isi bila ingin tautan kontak tampil, contoh "hello@domain.com"
  },


  /* -------------------------------------------------------------------
     2. KOLEKTOR (Beranda dan halaman Biografi)
     ------------------------------------------------------------------- */
  collector: {
    name: "Rossa",
    fullName: "Sri Rossa Roslaina Handiyani",
    portrait: "images/rossa/rossa-portrait.jpg",
    portraitAlt: { id: "Potret Rossa", en: "Portrait of Rossa" },

    // Judul besar di beranda. Baris kedua tampil miring.
    heroLine1: { id: "Koleksi", en: "The Rossa" },
    heroLine2: { id: "Rossa", en: "Collection" },

    // Paragraf pendek di beranda
    intro: {
      id: "Dikenal lewat suaranya di Indonesia dan negeri-negeri berbahasa Melayu, Rossa juga seorang kolektor seni rupa. Katalog ini menghimpun koleksinya: lukisan, patung, dan para seniman di baliknya.",
      en: "Known for her voice across Indonesia and the Malay-speaking world, Rossa is also a collector of art. This catalogue brings her collection together: painting, sculpture, and the artists behind them."
    },

    // Kalimat besar di halaman Biografi
    statement: {
      id: "Lukisan, patung, dan apa pun yang datang berikutnya.",
      en: "Painting, sculpture, and whatever comes next."
    },

    // Paragraf biografi, tampil berurutan
    biography: [
      // [CEK] Paragraf 1 dan 2 berdasarkan sumber publik (Wikipedia, rossaofficial.com, Apple Music).
      {
        id: "Sri Rossa Roslaina Handiyani lahir di Sumedang, Jawa Barat, pada 9 Oktober 1978. Ibunya, Eni Kusmiani, adalah penembang Cianjuran, seni vokal klasik Sunda, dan dari sisi ibunya Rossa pertama kali mengenal musik. Album pertamanya, *Gadis Ingusan*, dirilis pada 1988 saat ia masih kanak-kanak.",
        en: "Sri Rossa Roslaina Handiyani was born in Sumedang, West Java, on 9 October 1978. Her mother, Eni Kusmiani, is a singer of tembang Cianjuran, the classical Sundanese vocal art, and it was at her side that Rossa first came to music. Her first album, *Gadis Ingusan*, was released in 1988, when she was still a child."
      },
      {
        id: "Namanya melambung lewat *Nada-Nada Cinta* pada 1996. Album *Tegar* menyusul pada 1999 dan meraih sertifikasi multi-platinum. Sejak itu Rossa menjadi salah satu penyanyi dengan penjualan album terbesar di Indonesia, dikenal luas di Indonesia dan negeri-negeri berbahasa Melayu, dan di Malaysia disapa Dato' Sri Rossa. Di luar musik, ia membangun usaha di bidang kecantikan dan wewangian.",
        en: "Her breakthrough came with *Nada-Nada Cinta* in 1996. The album *Tegar* followed in 1999 and earned multiple platinum certifications. She has since become one of Indonesia's best-selling recording artists, widely known across Indonesia and the Malay-speaking world, and in Malaysia as Dato' Sri Rossa. Beyond music, she has built businesses in beauty and fragrance."
      },
      // [DUMMY] Paragraf 3: sisi Rossa sebagai kolektor. Ganti dengan cerita asli dari tim Rossa.
      {
        id: "Di luar panggung, Rossa hidup berdampingan dengan karya seni. Koleksinya mencakup lukisan dan patung, dan tetap terbuka bagi medium lain. Ia memilih karya yang ingin ia tinggali bersama, bukan sekadar pengisi dinding.",
        en: "Away from the stage, Rossa lives alongside art. Her collection spans painting and sculpture, and it stays open to other media. She chooses works she wants to live with, not works to fill a wall."
      },
      // [CEK] Paragraf 4: komisi TEGAR.
      {
        id: "Rossa juga mengoleksi lewat komisi. *TEGAR*, patung yang berangkat dari lagunya tahun 1999, saat ini sedang diciptakan untuknya oleh Aditya Sena Hadikusumo.",
        en: "Rossa also collects through commission. *TEGAR*, a sculpture drawn from her 1999 song, is currently being created for her by Aditya Sena Hadikusumo."
      },
      {
        id: "Katalog ini menghimpun koleksi tersebut di satu tempat: karya-karyanya, para senimannya, dan cerita di balik setiap karya.",
        en: "This catalogue gathers the collection in one place: the works, the artists, and the story behind each piece."
      }
    ],

    // Kolom data singkat di halaman Biografi. Baris "Koleksi" dibuat otomatis dari daftar kategori.
    facts: [
      { label: { id: "Lahir", en: "Born" },
        value: { id: "Sumedang, Jawa Barat, 9 Oktober 1978", en: "Sumedang, West Java, 9 October 1978" } },
      { label: { id: "Dikenal sebagai", en: "Known as" },
        value: { id: "Rossa, Teh Oca; di Malaysia, Dato' Sri Rossa", en: "Rossa, Teh Oca; in Malaysia, Dato' Sri Rossa" } },
      { label: { id: "Pendidikan", en: "Education" },
        value: { id: "FISIP Universitas Indonesia, lulus 2002", en: "Faculty of Social and Political Sciences, Universitas Indonesia, 2002" } }
      // [DUMMY] contoh baris tambahan:
      // { label: { id: "Mulai mengoleksi", en: "Collecting since" }, value: "20XX" },
    ],

    // Tonggak perjalanan. [CEK] semua tahun berdasarkan sumber publik.
    milestones: [
      { year: "1988", text: { id: "Album pertama, *Gadis Ingusan*.", en: "First album, *Gadis Ingusan*." } },
      { year: "1996", text: { id: "*Nada-Nada Cinta* melambungkan namanya.", en: "*Nada-Nada Cinta* brings her to national attention." } },
      { year: "1999", text: { id: "Album *Tegar*, bersertifikat multi-platinum.", en: "The album *Tegar*, certified multi-platinum." } },
      { year: "2002", text: { id: "Lulus dari FISIP Universitas Indonesia.", en: "Graduates from Universitas Indonesia." } },
      { year: "2010", text: { id: "Konser *Melodi Cinta* di Stadium Putra Bukit Jalil, Malaysia, di hadapan lebih dari 12.000 penonton.", en: "*Melodi Cinta* concert at Stadium Putra Bukit Jalil, Malaysia, for more than 12,000 people." } },
      { year: "2023", text: { id: "Album *Another Journey: The Beginning*.", en: "Releases *Another Journey: The Beginning*." } },
      { year: { id: "Kini", en: "Now" }, text: { id: "Patung komisi *TEGAR* dalam proses penciptaan bersama Aditya Sena Hadikusumo.", en: "The commissioned sculpture *TEGAR* is in progress with Aditya Sena Hadikusumo." } }
    ]
  },


  /* -------------------------------------------------------------------
     3. KATEGORI KARYA
     Urutan di sini = urutan bab saat menjelajah koleksi.
     display : "hang"   = digantung di dinding (lukisan, karya kertas, foto)
               "plinth" = berdiri di atas pedestal (patung kecil-sedang)
               "floor"  = berdiri langsung di lantai (patung besar, instalasi)
     room    : warna ruang bab ini: "linen", "velvet", "stone", "olive", "silk"
     Kategori tanpa karya tidak ditampilkan, jadi aman ditambah lebih dulu.
     ------------------------------------------------------------------- */
  categories: [
    {
      id: "lukisan",
      name: { id: "Lukisan", en: "Painting" },
      // [DUMMY]
      intro: {
        id: "Karya dua dimensi di atas kanvas, linen, dan papan, dari bidang kecil yang akrab dipandang dari dekat hingga kanvas yang menguasai satu dinding.",
        en: "Two-dimensional works on canvas, linen and board, from small panels meant to be seen up close to canvases that hold an entire wall."
      },
      display: "hang",
      room: "linen"
    },
    {
      id: "patung",
      name: { id: "Patung", en: "Sculpture" },
      // [DUMMY]
      intro: {
        id: "Karya tiga dimensi dalam perunggu, kayu, batu, dan resin, termasuk karya yang sedang diciptakan khusus untuk koleksi ini.",
        en: "Three-dimensional works in bronze, wood, stone and resin, including a work being made especially for this collection."
      },
      display: "plinth",
      room: "velvet"
    }

    // Contoh kategori baru. Hapus tanda // di depan baris-barisnya untuk mengaktifkan,
    // dan jangan lupa tambahkan koma setelah kurung kurawal kategori di atasnya.
    // {
    //   id: "karya-kertas",
    //   name: { id: "Karya di Atas Kertas", en: "Works on Paper" },
    //   intro: { id: "Tulisan pengantar bab.", en: "Chapter introduction." },
    //   display: "hang",
    //   room: "stone"
    // }
  ],


  /* -------------------------------------------------------------------
     4. SENIMAN
     slug  = ID unik, huruf kecil tanpa spasi. Dipakai di alamat halaman
             dan untuk menghubungkan karya ke senimannya. Jangan diubah setelah tayang.
     Urutan di sini = urutan di halaman Seniman.
     ------------------------------------------------------------------- */
  artists: [
    {
      // [CEK] Draf biografi, mohon ditinjau.
      slug: "aditya-sena-hadikusumo",
      name: "Aditya Sena Hadikusumo",
      born: "",                    // contoh: "Jakarta, 1998"
      based: "",                   // contoh: "Jakarta"
      portrait: "",                // opsional, contoh: "images/artists/aditya.jpg"
      bio: [
        {
          id: "Aditya Sena Hadikusumo menempuh pendidikan seni rupa di Universitas Negeri Jakarta. Karya tugas akhirnya, *Keterasingan* (2023), mengadaptasi konsep keterasingan dalam filsafat eksistensialisme: manusia yang dijauhkan, atau menjauhkan diri, dari sesama, alam, budaya, Tuhan, dan dirinya sendiri.",
          en: "Aditya Sena Hadikusumo studied fine art at Universitas Negeri Jakarta. His final project, *Keterasingan* (Alienation, 2023), adapts the existentialist idea of alienation: a person estranged, or estranging themselves, from others, from nature, from culture, from God, and from the self."
        },
        {
          id: "Dari karya itu lahir bahasa visual yang menjadi acuan karyanya: tubuh yang dibangun dari lapisan mendatar sama tebal dengan celah gelap di antaranya, dipotong cermin yang pantulannya melengkapi bentuk, dengan tepi lapisan multipleks yang dibiarkan terlihat. Bahasa visual ini juga menjadi titik berangkat *TEGAR*, patung komisinya untuk Rossa.",
          en: "That work set the visual language his practice refers back to: a body built of horizontal layers of equal thickness with dark gaps between them, cut by a mirror whose reflection completes the form, the plywood layer edges left visible. It is also the starting point for *TEGAR*, his commission for Rossa."
        }
      ]
    },
    {
      // [DUMMY] seluruh isi seniman ini
      slug: "nama-pelukis",
      name: { id: "Nama Pelukis", en: "Painter's Name" },
      born: { id: "Kota, tahun", en: "City, year" },
      based: { id: "Kota", en: "City" },
      portrait: "",
      bio: [
        { id: "Paragraf pertama berisi biografi singkat: tempat dan tahun lahir, kota tempat ia berkarya, dan latar pendidikannya.",
          en: "The first paragraph is a short biography: place and year of birth, the city where the artist works, and their training." },
        { id: "Paragraf kedua menjelaskan bahasa visual dan medium yang ia pakai. Bila Rossa berkenan, tambahkan bagaimana karya-karya ini masuk ke koleksinya.",
          en: "The second paragraph describes their visual language and medium. If Rossa wishes, add how these works came into her collection." }
      ]
    },
    {
      // [DUMMY] seluruh isi seniman ini
      slug: "nama-perupa",
      name: { id: "Nama Perupa", en: "Artist's Name" },
      born: { id: "Kota, tahun", en: "City, year" },
      based: { id: "Kota", en: "City" },
      portrait: "",
      bio: [
        { id: "Untuk perupa yang bekerja lintas medium, tuliskan bagaimana lukisan dan patungnya saling terhubung.",
          en: "For an artist who works across media, describe how their painting and sculpture connect." },
        { id: "Sebutkan dua atau tiga pameran atau koleksi publik yang penting, cukup untuk menempatkan karyanya tanpa membuat halaman sesak.",
          en: "Name two or three significant exhibitions or public collections, enough to place the work without crowding the page." }
      ]
    },
    {
      // [DUMMY] seluruh isi seniman ini
      slug: "nama-pematung",
      name: { id: "Nama Pematung", en: "Sculptor's Name" },
      born: { id: "Kota, tahun", en: "City, year" },
      based: { id: "Kota", en: "City" },
      portrait: "",
      bio: [
        { id: "Biografi pematung sebaiknya menyebut material dan proses kerjanya: cor perunggu, pahat kayu, atau batu.",
          en: "A sculptor's biography should name their materials and process: bronze casting, wood carving, or stone." },
        { id: "Satu kalimat tentang skala dan cara karya dipajang, di atas pedestal atau langsung di lantai, membantu pembaca membayangkan karyanya di dalam ruang.",
          en: "A line on scale and how the work is shown, on a plinth or directly on the floor, helps readers picture it in a room." }
      ]
    }
  ],


  /* -------------------------------------------------------------------
     5. KARYA
     slug     = ID unik karya, dipakai di alamat halaman karya
                (contoh: domain.com/#/works/tegar). Alamat ini yang nanti
                dipakai untuk QR/barcode di samping karya, jadi jangan diubah setelah tayang.
     code     = kode inventaris (opsional)
     artist   = slug seniman (lihat bagian 4)
     category = id kategori (lihat bagian 3)
     size     = ukuran dalam cm. Lukisan: { h: tinggi, w: lebar }
                Patung: { h: tinggi, w: lebar, d: dalam }
                Karya bundar: { diameter: 90 }
                Ukuran dipakai untuk skala tampilan, jadi isi seakurat mungkin.
     image    = path foto. Lukisan: foto lurus, dipotong pas di tepi kanvas.
                Patung: paling bagus PNG berlatar transparan.
     tone     = warna bidang pengganti saat foto belum ada:
                ochre, rosewood, sage, slate, champagne, teal, blush,
                bronze, teak, stone, metal, ink
     Urutan di sini = urutan di dalam setiap bab.
     ------------------------------------------------------------------- */
  works: [
    // [DUMMY] karya 1 sampai 11: data contoh, ganti dengan karya asli.
    {
      slug: "tanpa-judul-1", code: "RC-001",
      title: { id: "Tanpa Judul I", en: "Untitled I" },
      artist: "nama-pelukis", category: "lukisan",
      year: "2019",
      medium: { id: "Cat minyak di atas kanvas", en: "Oil on canvas" },
      size: { h: 150, w: 200 },
      image: "", tone: "ochre",
      note: { id: "Catatan singkat tentang karya: subjeknya, tekniknya, atau cerita bagaimana karya ini masuk ke koleksi.",
              en: "A short note on the work: its subject, its technique, or how it came into the collection." }
    },
    {
      slug: "tanpa-judul-2", code: "RC-002",
      title: { id: "Tanpa Judul II", en: "Untitled II" },
      artist: "nama-pelukis", category: "lukisan",
      year: "2021",
      medium: { id: "Cat minyak di atas kanvas", en: "Oil on canvas" },
      size: { h: 120, w: 90 },
      image: "", tone: "rosewood",
      note: { id: "Catatan singkat tentang karya: subjeknya, tekniknya, atau cerita bagaimana karya ini masuk ke koleksi.",
              en: "A short note on the work: its subject, its technique, or how it came into the collection." }
    },
    {
      slug: "tanpa-judul-3", code: "RC-003",
      title: { id: "Tanpa Judul III", en: "Untitled III" },
      artist: "nama-pelukis", category: "lukisan",
      year: "2022",
      medium: { id: "Akrilik di atas kanvas", en: "Acrylic on canvas" },
      size: { h: 100, w: 100 },
      image: "", tone: "sage",
      note: { id: "Catatan singkat tentang karya: subjeknya, tekniknya, atau cerita bagaimana karya ini masuk ke koleksi.",
              en: "A short note on the work: its subject, its technique, or how it came into the collection." }
    },
    {
      slug: "tanpa-judul-4", code: "RC-004",
      title: { id: "Tanpa Judul IV", en: "Untitled IV" },
      artist: "nama-pelukis", category: "lukisan",
      year: "2023",
      medium: { id: "Cat minyak di atas linen", en: "Oil on linen" },
      size: { h: 40, w: 30 },
      image: "", tone: "slate",
      note: { id: "Catatan singkat tentang karya: subjeknya, tekniknya, atau cerita bagaimana karya ini masuk ke koleksi.",
              en: "A short note on the work: its subject, its technique, or how it came into the collection." }
    },
    {
      slug: "tanpa-judul-5", code: "RC-005",
      title: { id: "Tanpa Judul V", en: "Untitled V" },
      artist: "nama-perupa", category: "lukisan",
      year: "2018",
      medium: { id: "Akrilik di atas kanvas", en: "Acrylic on canvas" },
      size: { diameter: 90 },
      image: "", tone: "champagne",
      note: { id: "Catatan singkat tentang karya: subjeknya, tekniknya, atau cerita bagaimana karya ini masuk ke koleksi.",
              en: "A short note on the work: its subject, its technique, or how it came into the collection." }
    },
    {
      slug: "tanpa-judul-6", code: "RC-006",
      title: { id: "Tanpa Judul VI", en: "Untitled VI" },
      artist: "nama-perupa", category: "lukisan",
      year: "2020",
      medium: { id: "Media campuran di atas kanvas", en: "Mixed media on canvas" },
      size: { h: 140, w: 110 },
      image: "", tone: "teal",
      note: { id: "Catatan singkat tentang karya: subjeknya, tekniknya, atau cerita bagaimana karya ini masuk ke koleksi.",
              en: "A short note on the work: its subject, its technique, or how it came into the collection." }
    },
    {
      slug: "tanpa-judul-7", code: "RC-007",
      title: { id: "Tanpa Judul VII", en: "Untitled VII" },
      artist: "nama-perupa", category: "lukisan",
      year: "2024",
      medium: { id: "Media campuran di atas papan", en: "Mixed media on board" },
      size: { h: 60, w: 160 },
      image: "", tone: "blush",
      note: { id: "Catatan singkat tentang karya: subjeknya, tekniknya, atau cerita bagaimana karya ini masuk ke koleksi.",
              en: "A short note on the work: its subject, its technique, or how it came into the collection." }
    },
    {
      slug: "tanpa-judul-8", code: "RC-008",
      title: { id: "Tanpa Judul VIII", en: "Untitled VIII" },
      artist: "nama-perupa", category: "patung",
      year: "2023",
      medium: { id: "Resin dan cat otomotif", en: "Resin and automotive paint" },
      size: { h: 70, w: 45, d: 45 },
      image: "", tone: "rosewood",
      note: { id: "Catatan singkat tentang karya: subjeknya, tekniknya, atau cerita bagaimana karya ini masuk ke koleksi.",
              en: "A short note on the work: its subject, its technique, or how it came into the collection." }
    },
    {
      slug: "tanpa-judul-9", code: "RC-009",
      title: { id: "Tanpa Judul IX", en: "Untitled IX" },
      artist: "nama-pematung", category: "patung",
      year: "2017",
      medium: { id: "Perunggu", en: "Bronze" },
      size: { h: 55, w: 30, d: 25 },
      image: "", tone: "bronze",
      note: { id: "Catatan singkat tentang karya: subjeknya, tekniknya, atau cerita bagaimana karya ini masuk ke koleksi.",
              en: "A short note on the work: its subject, its technique, or how it came into the collection." }
    },
    {
      slug: "tanpa-judul-10", code: "RC-010",
      title: { id: "Tanpa Judul X", en: "Untitled X" },
      artist: "nama-pematung", category: "patung",
      year: "2019",
      medium: { id: "Kayu jati", en: "Teak" },
      size: { h: 120, w: 40, d: 40 },
      image: "", tone: "teak",
      note: { id: "Catatan singkat tentang karya: subjeknya, tekniknya, atau cerita bagaimana karya ini masuk ke koleksi.",
              en: "A short note on the work: its subject, its technique, or how it came into the collection." }
    },
    {
      slug: "tanpa-judul-11", code: "RC-011",
      title: { id: "Tanpa Judul XI", en: "Untitled XI" },
      artist: "nama-pematung", category: "patung",
      year: "2022",
      medium: { id: "Batu andesit", en: "Andesite" },
      size: { h: 38, w: 50, d: 30 },
      image: "", tone: "stone",
      note: { id: "Catatan singkat tentang karya: subjeknya, tekniknya, atau cerita bagaimana karya ini masuk ke koleksi.",
              en: "A short note on the work: its subject, its technique, or how it came into the collection." }
    },

    // [CEK] TEGAR: ukuran dan material belum final, jadi dikosongkan.
    {
      slug: "tegar", code: "RC-012",
      title: "TEGAR",
      artist: "aditya-sena-hadikusumo", category: "patung",
      year: "",                    // isi tahun saat karya selesai
      medium: "",
      size: null,
      status: { id: "Komisi, dalam proses penciptaan", en: "Commission, in progress" },
      image: "", tone: "metal",
      note: { id: "Patung komisi yang berangkat dari lagu Rossa, *Tegar* (1999). Bentuk, skala, dan materialnya sedang dikembangkan.",
              en: "A commissioned sculpture drawn from Rossa's song *Tegar* (1999). Its form, scale and material are in development." }
    }
  ]
};
