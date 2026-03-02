'use client';

import React, { useState } from 'react';
import { Lock, Mail, Loader2, AlertCircle, ShoppingBag } from 'lucide-react';

/**
 * Halaman Login (Autentikasi Admin & User)
 * Memenuhi syarat Milestone 3 poin 2.
 */
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulasi Autentikasi
    setTimeout(() => {
      if (email === 'admin@revoshop.com' && password === 'admin123') {
        document.cookie = "revo_role=admin; path=/; max-age=3600";
        document.cookie = "revo_token=mock_admin_token; path=/; max-age=3600";
        window.location.href = '/admin';
      } else if (email === 'user@revoshop.com' && password === 'user123') {
        document.cookie = "revo_role=user; path=/; max-age=3600";
        document.cookie = "revo_token=mock_user_token; path=/; max-age=3600";
        window.location.href = '/';
      } else {
        setError('Kredensial salah. Gunakan: admin@revoshop.com / admin123');
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100">
        <div className="text-center mb-10">
          <div className="mx-auto h-16 w-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-100 mb-6">
            <ShoppingBag className="text-white w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black text-gray-900">Sign In</h2>
          <p className="text-gray-500 mt-2">Masuk ke RevoShop untuk melanjutkan.</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 flex items-center gap-2 text-sm border border-red-100">
            <AlertCircle className="w-4 h-4" /> {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                placeholder="admin@revoshop.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="password" required value={password} onChange={e => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit" disabled={loading}
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition active:scale-95 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-6 h-6 animate-spin mx-auto" /> : 'Sign In Now'}
          </button>
        </form>

        <div className="mt-8 p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-center">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Demo Account</p>
          <p className="text-xs text-gray-500">Admin: admin@revoshop.com (admin123)</p>
        </div>
      </div>
    </div>
  );
}