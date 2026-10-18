# Minimalist Monochromatic Portfolio Template ⚡

Template website portofolio modern dengan palet warna monokrom (hitam, putih, abu-abu / zinc) yang elegan, tipografi tegas (*editorial tech aesthetic*), dan beragam fitur UI yang sangat interaktif.

---

## ✨ Fitur Interaktif Unggulan

1. **Monochrome Clean Aesthetics**:
   - Skema warna minimalis bebas dari distraksi warna berlebih.
   - Dilengkapi **Dark Mode & Light Mode** dengan tombol toggle dan penyimpanan otomatis (`localStorage`).
   - Efek **Mouse Spotlight & Ambient Grid** (pantulan cahaya halus yang mengikuti pergerakan kursor mouse).

2. **Command Palette (`Ctrl + K` / `Cmd + K`)**:
   - Dialog pencarian cepat ala Linear / MacOS Spotlight untuk berpindah section, mengganti tema, menyalin email, dan mengunjungi link sosial.

3. **Project Showcase Interaktif**:
   - **Filter Kategori** dinamis (Semua, Web App, Dev Tools, UI/UX, Mobile).
   - Efek **Hover Tilt & Card Spotlight**.
   - **Quick View Modal**: Klik kartu project untuk membuka detail lengkap, arsitektur/highlight, tech stack, dan link demo/GitHub.

4. **Interactive Developer Terminal (CLI Playground)**:
   - Terminal interaktif di mana pengunjung/recruiter dapat mengetik perintah seperti:
     - `help`: Melihat daftar perintah
     - `about`: Ringkasan filosofi & bio
     - `skills`: Keahlian teknis
     - `projects`: Daftar proyek unggulan
     - `contact`: Menampilkan dan langsung menyalin email
     - `clear`: Membersihkan layar terminal
     - `date`: Menampilkan waktu sistem

5. **Live Time & Dynamic Greeting**:
   - Widget jam real-time lokal dan sapaan dinamis (*Good Morning*, *Good Afternoon*, *Good Evening*).
   - Indikator status ketersediaan kerja (*Available for freelance & full-time*).

6. **Experience & Education Switcher**:
   - Tab navigasi interaktif untuk beralih antara Pengalaman Kerja (*Work Experience*) dan Riwayat Pendidikan (*Education*).

7. **One-Click Copy Email & Toast Notification**:
   - Salin email langsung ke clipboard dengan 1 klik disertai animasi toast notifikasi.

8. **Interactive Contact Form**:
   - Form kontak dengan validasi langsung dan simulasi status pengiriman.

---

## 📁 Struktur File

```text
Portofolio/
├── index.html        # Struktur HTML utama & konten semantik
├── css/
│   └── style.css     # Styling monokrom, variabel CSS, animasi & responsivitas
├── js/
│   └── main.js       # Logika interaktif: spotlight, filter, modal, terminal, command palette
└── README.md         # Panduan penggunaan & kustomisasi
```

---

## 🚀 Cara Menjalankan Website

Anda tidak memerlukan build tool (seperti webpack atau vite). Cukup buka langsung:

### Cara 1: Langsung Buka di Browser
- Dobel klik file [`index.html`](file:///d:/VS%20CODE/Portofolio/index.html) di file explorer untuk membukanya di browser favorit Anda (Chrome, Edge, Firefox, Brave, dll).

### Cara 2: Menggunakan Live Server di VS Code
- Buka folder ini di VS Code.
- Pasang ekstensi **Live Server** (jika belum ada).
- Klik kanan file `index.html` lalu pilih **"Open with Live Server"**.

### Cara 3: Menggunakan Terminal
Jalankan salah satu perintah berikut:
```bash
# Menggunakan Python:
python -m http.server 3000

# Atau menggunakan npx serve:
npx serve
```
Lalu buka browser di `http://localhost:3000`.

---

## 🛠️ Panduan Kustomisasi

### 1. Mengubah Nama, Bio, dan Kontak
Buka file [`index.html`](file:///d:/VS%20CODE/Portofolio/index.html):
- Cari teks `Your Name` dan ubah menjadi nama Anda.
- Ubah deskripsi di tag `<h1 class="hero-title">` dan `<p class="hero-bio">`.
- Ganti alamat email `hello@yourname.dev` dengan email asli Anda.
- Ganti link media sosial (GitHub, LinkedIn, Twitter/X, Discord) di bagian `#contact`.

### 2. Mengubah / Menambah Proyek (*Projects*)
Buka file [`js/main.js`](file:///d:/VS%20CODE/Portofolio/js/main.js):
- Di bagian paling atas terdapat array `PROJECTS_DATA`:
```javascript
const PROJECTS_DATA = [
  {
    id: 'proj-1',
    number: '01',
    title: 'Nama Proyek Anda',
    category: 'webapp', // pilihan: webapp | tools | uiux | mobile
    categoryName: 'Web App',
    shortDesc: 'Ringkasan singkat proyek...',
    fullDesc: 'Penjelasan lengkap untuk ditampilkan di modal...',
    tags: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/username/repo',
    demo: 'https://demo-anda.com',
    highlights: [
      'Poin pencapaian atau keunggulan arsitektur 1',
      'Poin pencapaian 2'
    ]
  },
  // Tambahkan proyek berikutnya di sini...
];
```

### 3. Mengubah Pengalaman & Pendidikan
Buka file [`js/main.js`](file:///d:/VS%20CODE/Portofolio/js/main.js):
- Cari objek `TIMELINE_DATA`:
```javascript
const TIMELINE_DATA = {
  experience: [
    {
      role: 'Posisi / Pekerjaan',
      company: 'Nama Perusahaan',
      period: '2023 - Present',
      desc: 'Deskripsi tanggung jawab...',
      points: [
        'Pencapaian utama 1',
        'Pencapaian utama 2'
      ]
    }
  ],
  education: [
    {
      role: 'Gelar / Jurusan',
      company: 'Universitas / Sekolah',
      period: '2019 - 2023',
      desc: 'Fokus bidang studi...',
      points: [
        'Prestasi atau kegiatan kampus'
      ]
    }
  ]
};
```

### 4. Mengubah Daftar Skills
Buka file [`index.html`](file:///d:/VS%20CODE/Portofolio/index.html) pada bagian `<section id="skills">`:
- Tambah atau kurangi tag `<span class="skill-pill">Nama Skill</span>` sesuai kemampuan Anda.

---

## 🎨 Palet Warna Minimalis (Monochrome)

Jika ingin memodifikasi warna dasar, Anda dapat mengubah CSS Variables di [`css/style.css`](file:///d:/VS%20CODE/Portofolio/css/style.css):

```css
:root {
  --bg-body: #09090b;       /* Latar utama hitam arang */
  --bg-surface: #111114;    /* Permukaan kontainer */
  --bg-card: #16161a;       /* Kartu komponen */
  --text-primary: #fafafa;  /* Teks utama putih bersih */
  --text-secondary: #a1a1aa;/* Teks sekunder abu-abu netral */
  --accent-solid: #ffffff;  /* Aksen monokrom kontras */
}
```
Semua elemen diatur agar memiliki kontras tinggi dan mudah dibaca (*WCAG compliant*).
