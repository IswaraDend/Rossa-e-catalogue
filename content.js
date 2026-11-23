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

    // Karya dan seniman bertanda  sample: true  adalah contoh tata letak.
    // WAJIB diubah ke false sebelum tayang: halaman publik tidak boleh memuat karya contoh.
    showSamples: true,
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
      id: "Lukisan dan patung dari koleksi pribadi Rossa.",
      en: "Paintings and sculpture from Rossa's private collection."
    },

    // Judul halaman Biografi. Bagian di antara bintang tampil miring di baris kedua.
    bioTitle: { id: "Rossa, *sang kolektor*", en: "Rossa, *the collector*" },

    // Potret di halaman Biografi: panel kecil di sebelah teks, crop 4:5, monokrom.
    // Still wawancara Medcom ID, 19 Mei 2023 (file sumber 541 × 768 px).
    bioPortrait: {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Rossa_at_Ngobras_Special_Medcom_ID.png",
      width: 541, height: 768,
      alt: { id: "Rossa tertawa sambil memegang mikrofon dalam wawancara Medcom ID.",
             en: "Rossa laughing as she holds a microphone during a Medcom ID interview." },
      credit: {
        text: { id: "Rossa dalam wawancara, 2023. Still oleh", en: "Rossa in an interview, 2023. Still by" },
        source: { label: "Medcom ID", href: "https://commons.wikimedia.org/wiki/File:Rossa_at_Ngobras_Special_Medcom_ID.png" },
        license: { label: "CC BY 3.0", href: "https://creativecommons.org/licenses/by/3.0/" },
        note: { id: "Crop dan konversi monokrom untuk katalog.", en: "Cropped and converted to monochrome for the catalogue." }
      }
    },

    // Kalimat besar di halaman Biografi
    statement: {
      id: "Lukisan, patung, dan apa pun yang datang berikutnya.",
      en: "Painting, sculpture, and whatever comes next."
    },

    // Paragraf biografi, tampil berurutan. Paragraf 1 dan 2 dari copy website.
    biography: [
      {
        id: "Di rumah Rossa, lukisan berukuran besar mendapat tempat di ruang yang diterangi cahaya jendela. Saat berbincang dengan ELLE Indonesia pada 2022, ia bercerita tentang perubahan seleranya dalam menata rumah. Ia mulai menghadirkan karya kontemporer dengan warna yang lebih berani. Baginya, melihat karya-karya itu di rumah membawa kegembiraan tersendiri.",
        // [CEK] terjemahan Inggris
        en: "In Rossa's home, large paintings are given space in rooms lit by the windows. Speaking with ELLE Indonesia in 2022, she described how her taste in furnishing her home had changed. She began bringing in contemporary works in bolder colours. For her, seeing those works at home brings a joy of its own."
      },
      {
        id: "Publik mengenal Rossa lewat lagu seperti *Tegar*, ciptaan Melly Goeslaw yang ia bawakan pada 1999. Di katalog ini, ia hadir sebagai kolektor. Melalui pilihan lukisan dan patung dari koleksi pribadinya, pengunjung diajak melihat karya-karya yang selama ini ia nikmati dari dekat.",
        // [CEK] terjemahan Inggris
        en: "The public knows Rossa through songs such as *Tegar*, written by Melly Goeslaw and recorded by her in 1999. In this catalogue she appears as a collector. Through a selection of paintings and sculptures from her private collection, visitors are invited to see up close the works she has long enjoyed."
      },
      // [CEK] Komisi TEGAR.
      {
        id: "Rossa juga mengoleksi lewat komisi. *TEGAR*, patung yang berangkat dari lagunya tahun 1999, saat ini sedang diciptakan untuknya oleh Aditya Sena Hadikusumo.",
        en: "Rossa also collects through commission. *TEGAR*, a sculpture drawn from her 1999 song, is currently being created for her by Aditya Sena Hadikusumo."
      }
    ],

    // Cerita akuisisi pertama atau alasan memilih satu karya.
    // Isi HANYA setelah Rossa menyampaikannya sendiri. Selama paragraphs kosong, bagian ini tidak tampil.
    // work (opsional) = slug karya yang diceritakan.
    story: {
      title: "",
      paragraphs: [],
      work: ""
    },

    // Label liputan, tampil di bawah biografi.
    coverage: {
      title: { id: "Di rumah Rossa", en: "At Rossa's home" },
      text: { id: "Dalam episode *My Home My Style*, Rossa memperlihatkan sejumlah karya favorit di kediamannya.",
              en: "In an episode of *My Home My Style*, Rossa shows a number of her favourite works at home." },
      link: { label: { id: "Tonton liputan ELLE Indonesia", en: "Watch the ELLE Indonesia feature" },
              href: "https://elle.co.id/elle-tv/rossa-unjuk-koleksi-seni-yang-menghidupkan-karakter-rumahnya-my-home-my-style" }
    },

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

    // Foto arsip karier di samping tonggak perjalanan. Berwarna, rasio asli.
    stagePhoto: {
      src: "https://upload.wikimedia.org/wikipedia/commons/1/14/ROSSA_THE_JOURNEY_OF_21_DAZZLING_YEARS_%282017%29.jpg",
      width: 1291, height: 1614,
      alt: { id: "Rossa di atas panggung konser The Journey of 21 Dazzling Years, 2017.",
             en: "Rossa on stage at The Journey of 21 Dazzling Years concert, 2017." },
      credit: {
        text: { id: "Konser *The Journey of 21 Dazzling Years*, 2017. Foto:", en: "*The Journey of 21 Dazzling Years* concert, 2017. Photo:" },
        source: { label: "Nash Rassudin", href: "https://commons.wikimedia.org/wiki/File:ROSSA_THE_JOURNEY_OF_21_DAZZLING_YEARS_(2017).jpg" },
        license: { label: "CC BY-SA 4.0", href: "https://creativecommons.org/licenses/by-sa/4.0/" }
      }
    },

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
      slug: "nama-pelukis", sample: true,
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
      slug: "nama-perupa", sample: true,
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
      slug: "nama-pematung", sample: true,
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
     collectorNote = catatan Rossa tentang karya (opsional, tampil bila diisi)
     details  = foto detail (opsional): [ { src: "images/works/x-detail-1.jpg", alt: "..." } ]
     credit   = kredit dokumentasi foto (opsional), contoh "Foto: Nama Fotografer"
     sample   = true untuk karya contoh; disembunyikan saat settings.showSamples = false
     tone     = warna bidang pengganti saat foto belum ada:
                ochre, rosewood, sage, slate, champagne, teal, blush,
                bronze, teak, stone, metal, ink
     Urutan di sini = urutan di dalam setiap bab.
     ------------------------------------------------------------------- */
  works: [
    // [DUMMY] karya 1 sampai 11: data contoh, ganti dengan karya asli.
    {
      slug: "tanpa-judul-1", sample: true, code: "RC-001",
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
      slug: "tanpa-judul-2", sample: true, code: "RC-002",
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
      slug: "tanpa-judul-3", sample: true, code: "RC-003",
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
      slug: "tanpa-judul-4", sample: true, code: "RC-004",
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
      slug: "tanpa-judul-5", sample: true, code: "RC-005",
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
      slug: "tanpa-judul-6", sample: true, code: "RC-006",
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
      slug: "tanpa-judul-7", sample: true, code: "RC-007",
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
      slug: "tanpa-judul-8", sample: true, code: "RC-008",
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
      slug: "tanpa-judul-9", sample: true, code: "RC-009",
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
      slug: "tanpa-judul-10", sample: true, code: "RC-010",
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
      slug: "tanpa-judul-11", sample: true, code: "RC-011",
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
