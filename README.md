🛒 RevoShop - Milestone 3 E-Commerce Platform

RevoShop adalah platform e-commerce modern yang dibangun menggunakan Next.js 15. Proyek ini merupakan bagian dari Milestone 3 yang mencakup implementasi sistem pengambilan data (Fetching), State Management, Autentikasi Admin, dan fitur CRUD lengkap.

🌟 Fitur Utama

1. Katalog Produk (ISR & SSR)

Menampilkan daftar produk dari FakeStore API menggunakan kombinasi Incremental Static Regeneration (ISR) dan Server-Side Rendering (SSR) untuk performa optimal dan data yang selalu diperbarui.

2. State Management (Zustand)

Sistem keranjang belanja (Cart) yang persisten menggunakan Zustand. Pengguna dapat menambah, mengurangi, dan menghapus produk dari keranjang secara real-time.

3. Autentikasi & Middleware

Halaman Login: Membedakan akses antara admin dan user.

Proteksi Rute: Menggunakan Middleware untuk mengamankan folder /admin agar hanya bisa diakses oleh akun dengan role admin.

Akun Demo:

Admin: admin@revoshop.com | Password: admin123

User: user@revoshop.com | Password: user123

4. Admin Dashboard (Full CRUD)

Create: Menambah produk baru melalui formulir di /admin/add.

Read: Melihat daftar inventaris lengkap dalam bentuk tabel di /admin.

Update: Mengubah detail produk melalui halaman /admin/edit/[id].

Delete: Menghapus produk dari daftar (simulasi API).

5. Halaman Statis (SSG)

About Us: Implementasi Static Site Generation (SSG) untuk halaman informasi perusahaan yang cepat dan ramah SEO.

6. Unit Testing

Pengujian fungsionalitas logika keranjang belanja menggunakan Jest untuk memastikan integritas data.

🛠️ Teknologi yang Digunakan

Framework: Next.js 15 (App Router)

Styling: Tailwind CSS

Icons: Lucide-React

State Management: Zustand

Data Source: FakeStore API

Testing: Jest & React Testing Library

🚀 Cara Menjalankan Proyek

Clone Repositori:

git clone [https://github.com/Revou-FSSE-Oct25/milestone-3-bagussam.git](https://github.com/Revou-FSSE-Oct25/milestone-3-bagussam.git)
cd revoshop


Instalasi Dependensi:

npm install


Jalankan Server Development:

npm run dev


Buka http://localhost:3000 di browser Anda.

Menjalankan Test:

npm test


📂 Struktur Folder Utama

📦 src
 ┣ 📂 app
 ┃ ┣ 📂 about
 ┃ ┣ 📂 admin
 ┃ ┣ 📂 login
 ┃ ┣ 📂 product
 ┃ ┗ 📜 layout.tsx
 ┣ 📂 components
 ┣ 📂 lib
 ┣ 📂 store
 ┣ 📜 middleware.ts
 ┗ 📂 tests