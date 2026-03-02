🛒 RevoShop
Modern E-Commerce Platform — Next.js 15

RevoShop adalah platform e-commerce modern berbasis Next.js 15 (App Router) yang mengimplementasikan hybrid rendering (SSG, SSR, ISR), role-based authentication, middleware protection, state management dengan Zustand, serta admin dashboard dengan fitur CRUD lengkap.

Project ini dikembangkan sebagai bagian dari RevoU FSSE – Milestone 3.

✨ Features
🛍️ Product Catalog (ISR + SSR)

Product list menggunakan Incremental Static Regeneration (ISR)

Product detail menggunakan Server-Side Rendering (SSR)

Data diambil dari FakeStore API

Optimized for performance & SEO

🛒 Cart System (Zustand + Persist)

Add to cart

Increase quantity

Decrease quantity

Remove item

Persistent cart (tidak hilang saat refresh)

Real-time update

🔐 Authentication & Role-Based Access
Login Role:

Admin

User

Route Protection:

Folder /admin diproteksi menggunakan Next.js Middleware

Hanya role admin yang dapat mengakses dashboard.

🔑 Demo Accounts
| Role  | Email                                           | Password |
| ----- | ----------------------------------------------- | -------- |
| Admin | [admin@revoshop.com](mailto:admin@revoshop.com) | admin123 |
| User  | [user@revoshop.com](mailto:user@revoshop.com)   | user123  |
🛠️ Admin Dashboard (Full CRUD)
| Action | Route                    |
| ------ | ------------------------ |
| Create | `/admin/add`             |
| Read   | `/admin`                 |
| Update | `/admin/edit/[id]`       |
| Delete | `/admin` (Simulated API) |
Fitur:

Add new product

Edit product

Delete product

Table-based inventory display

📄 Static Page (SSG)

Halaman About Us menggunakan Static Site Generation (SSG) untuk performa optimal dan SEO-friendly.

🧪 Unit Testing

Menggunakan:

Jest

React Testing Library

Testing mencakup:

Cart logic

Add item

Remove item

Decrease quantity

State integrity

🧠 Tech Stack
| Category         | Technology                   |
| ---------------- | ---------------------------- |
| Framework        | Next.js 15 (App Router)      |
| Styling          | Tailwind CSS                 |
| Icons            | Lucide React                 |
| State Management | Zustand                      |
| Data Source      | FakeStore API                |
| Testing          | Jest + React Testing Library |
📂 Project Structure
📦 src
 ┣ 📂 app
 ┃ ┣ 📂 about          # SSG page
 ┃ ┣ 📂 admin          # Protected CRUD dashboard
 ┃ ┣ 📂 login          # Authentication
 ┃ ┣ 📂 product        # SSR product detail
 ┃ ┗ 📜 layout.tsx     # Root layout
 ┣ 📂 components       # Reusable UI components
 ┣ 📂 lib              # API & utilities
 ┣ 📂 store            # Zustand state management
 ┣ 📜 middleware.ts    # Route protection logic
 ┗ 📂 tests            # Unit testing
 ⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/Revou-FSSE-Oct25/milestone-3-bagussam.git
cd milestone-3-bagussam
2️⃣ Install Dependencies
npm install
3️⃣ Run Development Server
npm run dev

Buka browser:

http://localhost:3000
🧪 Run Unit Tests
npm test
🏗️ Architecture Highlights

Hybrid Rendering Strategy (SSG + SSR + ISR)

Middleware-based Route Protection

Role-Based Authentication

Persistent Global State with Zustand

Modular & Scalable Folder Structure

Clean App Router Architecture

📈 What This Project Demonstrates

Modern Next.js App Router usage

Advanced rendering patterns

Client & Server separation

Secure route protection

Production-ready state management

Clean component architecture

Unit testing best practices