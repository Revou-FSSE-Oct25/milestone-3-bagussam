'use client';

import React, { useEffect, useState } from 'react';
import { ShoppingCart, LayoutDashboard, ShoppingBag, User } from 'lucide-react';
// Menggunakan path relatif untuk menghindari error resolusi alias path (@/)
import { useCartStore } from '../store/useCartStore';

/**
 * Komponen Navbar Utama
 * Menyediakan navigasi global dan indikator jumlah item di keranjang belanja.
 * Menggunakan tag <a> standar untuk memastikan kompatibilitas pratinjau.
 */
export default function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const [mounted, setMounted] = useState(false);

  // Memastikan komponen sudah dimuat di sisi klien sebelum mengakses state Zustand
  useEffect(() => {
    setMounted(true);
  }, []);

  // Menghitung total item unik di dalam keranjang
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Bagian Logo */}
          <a href="/" className="flex items-center group no-underline">
            <div className="bg-indigo-600 p-2 rounded-lg mr-2 group-hover:rotate-12 transition-transform duration-300">
              <ShoppingBag className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-black text-gray-900 tracking-tighter">RevoShop</span>
          </a>

          {/* Bagian Menu Navigasi */}
          <div className="flex items-center space-x-6">
            <a 
              href="/" 
              className="text-gray-600 hover:text-indigo-600 font-bold text-sm transition-colors no-underline"
            >
              Katalog
            </a>
            <a 
              href="/about" 
              className="text-gray-600 hover:text-indigo-600 font-bold text-sm transition-colors no-underline"
            >
              Tentang Kami
            </a>
            <a 
              href="/admin" 
              className="text-gray-600 hover:text-indigo-600 font-bold text-sm flex items-center transition-colors no-underline"
            >
              <LayoutDashboard className="w-4 h-4 mr-1.5" /> Dashboard
            </a>
            
            {/* Tautan Login - Bagian dari persyaratan Autentikasi */}
            <a 
              href="/login" 
              className="text-gray-400 hover:text-indigo-600 transition-colors p-1"
              title="Masuk"
            >
              <User className="w-5 h-5" />
            </a>

            {/* Tombol Keranjang Belanja */}
            <a 
              href="/cart" 
              className="relative p-2 text-gray-700 hover:text-indigo-600 transition-all no-underline"
            >
              <ShoppingCart className="w-6 h-6" />
              {mounted && cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white animate-in zoom-in fade-in">
                  {cartCount}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}