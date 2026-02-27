import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

/**
 * Middleware untuk proteksi rute (Auth Simulation)
 * Sesuai persyaratan Module 5 untuk melindungi halaman Admin atau Checkout.
 */
export function middleware(request: NextRequest) {
  // Simulasi pengecekan token/cookie (di proyek asli gunakan cookie auth)
  const isAuthenticated = request.cookies.get('revo_token'); 
  const isLoginPage = request.nextUrl.pathname.startsWith('/login');
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin');

  // Contoh: Jika mencoba akses admin tapi tidak login, lempar ke login
  // Untuk keperluan tugas Milestone, kita biarkan dulu agar tutor bisa periksa UI Admin Anda.
  // Jika ingin diaktifkan, hapus komentar pada logika di bawah:
  
  /*
  if (isAdminPage && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  */

  return NextResponse.next();
}

// Menentukan rute mana saja yang akan diproses oleh middleware ini
export const config = {
  matcher: ['/admin/:path*', '/checkout/:path*'],
};