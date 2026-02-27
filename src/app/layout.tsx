import React from 'react';

/**
 * PANDUAN PERBAIKAN:
 * 1. HAPUS FILE: src/app/api/products/[id]/page.tsx (Penyebab konflik rute).
 * 2. GUNAKAN FILE: src/app/product/[id]/page.tsx untuk tampilan detail.
 * 3. Jika file Navbar atau CSS belum ada secara fisik di folder, 
 * Next.js akan menampilkan error 'Could not resolve'.
 */

// Komponen Navbar Mock (Gunakan ini jika file fisik belum dibuat untuk menghindari error kompilasi)
const NavbarFallback = () => (
  <nav style={{ 
    padding: '1rem', 
    borderBottom: '1px solid #e5e7eb', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 50
  }}>
    <div style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#4f46e5' }}>RevoShop</div>
    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem' }}>
      <a href="/" style={{ textDecoration: 'none', color: '#4b5563' }}>Katalog</a>
      <a href="/admin" style={{ textDecoration: 'none', color: '#4b5563' }}>Admin</a>
    </div>
  </nav>
);

export const metadata = {
  title: "RevoShop | Milestone 3",
  description: "Platform e-commerce modern yang dibangun dengan Next.js 15",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <style>{`
          /* Fallback untuk globals.css jika belum terdeteksi */
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #f9fafb;
            color: #111827;
          }
          .antialiased {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          main {
            min-height: calc(100vh - 160px);
          }
        `}</style>
      </head>
      <body className="antialiased">
        {/* Navbar Fallback untuk memastikan pratinjau tidak error */}
        <NavbarFallback />
        
        <main>
          {children}
        </main>

        <footer style={{ 
          backgroundColor: 'white', 
          borderTop: '1px solid #e5e7eb', 
          padding: '3rem 1rem', 
          marginTop: 'auto',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ height: '0.25rem', width: '2rem', backgroundColor: '#4f46e5', borderRadius: '9999px' }}></div>
              <span style={{ fontWeight: 'bold', fontSize: '1.125rem', fontStyle: 'italic' }}>RevoShop</span>
              <div style={{ height: '0.25rem', width: '2rem', backgroundColor: '#4f46e5', borderRadius: '9999px' }}></div>
            </div>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              &copy; {new Date().getFullYear()} RevoShop Catalog. Seluruh hak cipta dilindungi.
            </p>
            <p style={{ color: '#9ca3af', fontSize: '0.75rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
              Milestone 3 Project - Bagus Sam
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}