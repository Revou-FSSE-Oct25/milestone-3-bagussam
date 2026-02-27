'use client';

import Link from 'next/link';
import { ShoppingCart, LayoutDashboard, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const [mounted, setMounted] = useState(false);

  // Menghindari Hydration Mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-indigo-600 p-2 rounded-lg mr-2">
              <ShoppingBag className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-gray-900">RevoShop</span>
          </Link>

          {/* Menu */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-indigo-600 font-medium text-sm">
              Katalog
            </Link>
            <Link href="/admin" className="text-gray-600 hover:text-indigo-600 font-medium text-sm flex items-center">
              <LayoutDashboard className="w-4 h-4 mr-1" /> Admin
            </Link>
            
            {/* Tombol Keranjang */}
            <Link href="/cart" className="relative p-2 text-gray-600 hover:text-indigo-600 transition">
              <ShoppingCart className="w-6 h-6" />
              {mounted && cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}