import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

/**
 * Middleware untuk proteksi rute (Auth Simulation)
 * Berfungsi untuk mengamankan halaman Admin dan Checkout agar tidak bisa 
 * diakses tanpa "token" simulasi.
 */
export function middleware(request: NextRequest) {
  // 1. Ambil token dari cookie (simulasi autentikasi)
  const token = request.cookies.get('revo_token')?.value;

  // 2. Tentukan rute-rute yang memerlukan proteksi
  const { pathname } = request.nextUrl;
  const isAdminPage = pathname.startsWith('/admin');
  const isCheckoutPage = pathname.startsWith('/cart/checkout');
  const isLoginPage = pathname.startsWith('/login');

  // Logika Proteksi:
  // Jika mencoba masuk ke Admin/Checkout tapi tidak punya token, lempar ke login
  if ((isAdminPage || isCheckoutPage) && !token) {
    const loginUrl = new URL('/login', request.url);
    // Simpan halaman tujuan sebelumnya agar bisa kembali setelah login
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Jika sudah login tapi mencoba ke halaman login lagi, lempar ke home/admin
  if (isLoginPage && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Lanjutkan permintaan jika valid
  return NextResponse.next();
}

/**
 * Matcher menentukan halaman mana saja yang akan diawasi oleh middleware ini.
 * Menggunakan regex untuk mencakup semua sub-halaman di /admin dan /cart.
 */
export const config = {
  matcher: [
    '/admin/:path*', 
    '/cart/checkout',
    '/login'
  ],
};