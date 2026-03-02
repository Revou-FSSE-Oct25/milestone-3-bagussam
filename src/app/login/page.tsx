'use client';

import React, { useState } from 'react';
// Import useRouter dari next/navigation biasanya digunakan di Next.js
// Namun, untuk memastikan kode ini dapat dikompilasi di berbagai lingkungan, 
// kita akan menambahkan penanganan error sederhana atau mock jika modul tidak ditemukan.
import { Lock, Mail, Loader2, AlertCircle, ShoppingBag } from 'lucide-react';

/**
 * Halaman Login untuk Admin & User
 * Role 'admin' bisa akses dashboard, role 'user' hanya akses katalog.
 */
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Simulasi navigasi untuk lingkungan yang tidak mendukung next/navigation
  const handleNavigation = (path: string) => {
    console.log(`Navigasi ke: ${path}`);
    window.location.href = path;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulasi Autentikasi
    // Admin Credential: admin@revoshop.com / admin123
    // User Credential: user@revoshop.com / user123
    setTimeout(() => {
      if (email === 'admin@revoshop.com' && password === 'admin123') {
        // Simpan Role di Cookie (Simulasi)
        document.cookie = "revo_role=admin; path=/; max-age=3600";
        document.cookie = "revo_token=mock_token_admin; path=/; max-age=3600";
        handleNavigation('/admin');
      } else if (email === 'user@revoshop.com' && password === 'user123') {
        document.cookie = "revo_role=user; path=/; max-age=3600";
        document.cookie = "revo_token=mock_token_user; path=/; max-age=3600";
        handleNavigation('/');
      } else {
        setError('Email atau password salah. Coba: admin@revoshop.com / admin123');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 font-sans">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 mb-6">
            <ShoppingBag className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Selamat Datang</h2>
          <p className="mt-2 text-sm text-gray-500">
            Masuk untuk melanjutkan belanja atau mengelola toko
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl flex items-center text-sm gap-2">
            <AlertCircle className="w-4 h-4" /> {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                  placeholder="admin@revoshop.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold flex items-center justify-center hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 active:scale-95 disabled:opacity-70"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Memproses...</span>
              </div>
            ) : (
              'Masuk Sekarang'
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-400 bg-gray-50 p-4 rounded-xl border border-dashed border-gray-200">
          <p className="font-bold text-gray-500 mb-1">Akun Demo:</p>
          <p>Admin: admin@revoshop.com (admin123)</p>
          <p>User: user@revoshop.com (user123)</p>
        </div>
      </div>
    </div>
  );
}