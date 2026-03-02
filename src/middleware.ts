import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * LOKASI: src/middleware.ts
 * Middleware untuk memproteksi Admin Dashboard (Auth Requirement).
 * Hanya pengguna dengan role 'admin' yang bisa mengakses rute /admin.
 */
export function middleware(request: NextRequest) {
  const token = request.cookies.get('revo_token')?.value;
  const role = request.cookies.get('revo_role')?.value;
  const { pathname } = request.nextUrl;

  const isAdminRoute = pathname.startsWith('/admin');

  // Proteksi: Jika mencoba akses admin tapi tidak punya token atau role bukan admin
  if (isAdminRoute && (!token || role !== 'admin')) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    // Beritahu user kenapa mereka diarahkan ke login
    url.searchParams.set('error', 'unauthorized');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};