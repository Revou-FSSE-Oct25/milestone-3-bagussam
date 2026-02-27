'use client';

import React, { useEffect, useState, use } from 'react';
import { ShoppingCart, ArrowLeft, CheckCircle2, Loader2, Star, ShoppingBag } from 'lucide-react';

/**
 * Catatan untuk Pengguna:
 * Karena keterbatasan lingkungan pratinjau, saya menyertakan logika API dan Store 
 * langsung di dalam file ini agar Anda bisa melihat hasilnya tanpa error.
 * * Di proyek asli Anda, Anda tetap bisa memisahkan ini ke folder /lib dan /store.
 */

// --- MOCK API LOGIC (Biasanya di src/lib/api.ts) ---
const getProductById = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) return null;
  return res.json();
};

// --- MOCK STORE LOGIC (Biasanya di src/store/useCartStore.ts) ---
// Simulasi sederhana Zustand store untuk keperluan pratinjau
const useCartStoreMock = () => {
  const [cart, setCart] = useState<any[]>([]);
  
  const addToCart = (product: any) => {
    console.log("Produk ditambahkan ke keranjang:", product);
    setCart([...cart, product]);
  };

  return { cart, addToCart };
};

// --- MOCK LINK COMPONENT (Pengganti next/link untuk pratinjau) ---
const Link = ({ href, children, className }: any) => (
  <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = href; }} className={className}>
    {children}
  </a>
);

export default function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Mengambil params (Next.js 15)
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  
  // Menggunakan mock store agar pratinjau tidak error
  const { addToCart } = useCartStoreMock();

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Gagal mengambil data produk:", error);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setIsAdding(true);
      setTimeout(() => setIsAdding(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh] gap-4 bg-white">
        <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
        <p className="text-gray-500 font-medium animate-pulse text-lg">Memuat detail produk...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-[60vh] px-4 text-center bg-white">
        <div className="bg-red-50 p-6 rounded-full mb-6">
          <ShoppingBag className="w-12 h-12 text-red-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Produk Tidak Ditemukan</h2>
        <p className="text-gray-500 mt-2 max-w-sm">Maaf, produk yang Anda cari mungkin sudah dihapus atau link yang digunakan salah.</p>
        <Link href="/" className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg active:scale-95">
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Navigasi Kembali */}
        <Link href="/" className="inline-flex items-center text-indigo-600 font-semibold mb-8 hover:text-indigo-800 transition-colors group">
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" /> 
          Kembali ke Katalog
        </Link>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50">
          {/* Kontainer Gambar Produk */}
          <div className="flex justify-center items-center bg-gray-50/50 rounded-2xl p-8 md:p-12 min-h-[350px] md:min-h-[500px] relative group border border-gray-50">
            <img 
              src={product.image} 
              alt={product.title} 
              className="max-h-[350px] md:max-h-[450px] w-auto object-contain mix-blend-multiply transition-all duration-700 group-hover:scale-105" 
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              ID: {product.id}
            </div>
          </div>

          {/* Informasi Produk */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex justify-between items-center">
              <span className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] bg-indigo-50 px-4 py-1.5 rounded-lg border border-indigo-100 shadow-sm shadow-indigo-50">
                {product.category}
              </span>
              <div className="flex items-center text-yellow-500 font-bold bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                <Star className="w-4 h-4 fill-current mr-1" />
                {product.rating?.rate} <span className="text-gray-400 font-normal ml-1">({product.rating?.count})</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              {product.title}
            </h1>
            
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-black text-indigo-600">
                ${product.price}
              </span>
              <span className="text-gray-400 line-through text-lg font-medium">
                ${(product.price * 1.2).toFixed(2)}
              </span>
            </div>
            
            <div className="bg-gray-50/80 rounded-2xl p-6 mb-10 border border-gray-100">
              <h3 className="text-xs font-bold text-gray-400 uppercase mb-3 tracking-[0.15em] flex items-center">
                <span className="w-8 h-[1px] bg-gray-300 mr-2"></span>
                Deskripsi Produk
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {product.description}
              </p>
            </div>

            {/* Aksi Keranjang */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button 
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`flex-[2] py-5 rounded-2xl font-black text-lg flex items-center justify-center transition-all duration-300 shadow-xl active:scale-95 ${
                  isAdding 
                  ? 'bg-green-500 text-white shadow-green-200 cursor-default' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200'
                }`}
              >
                {isAdding ? (
                  <>
                    <CheckCircle2 className="w-6 h-6 mr-3 animate-bounce" />
                    Berhasil Ditambahkan!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-6 h-6 mr-3" /> 
                    Tambah ke Keranjang
                  </>
                )}
              </button>
            </div>
            
            <div className="flex items-center gap-6 mt-8 text-xs text-gray-400 font-semibold tracking-wide">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Transaksi Aman
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Produk Original
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}