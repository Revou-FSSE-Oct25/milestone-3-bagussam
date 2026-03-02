import React from 'react';
import { ShoppingBag, Target, Users, ShieldCheck } from 'lucide-react';

/**
 * Halaman About Us (Static Site Generation - SSG)
 * Memenuhi syarat Milestone 3 poin 1.
 */
export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-indigo-600 py-24 text-center text-white">
        <h1 className="text-5xl font-black mb-6 tracking-tight">Tentang RevoShop</h1>
        <p className="text-indigo-100 max-w-2xl mx-auto px-6 text-lg leading-relaxed">
          Kami hadir untuk mendefinisikan ulang cara Anda berbelanja dengan kurasi produk berkualitas global dan layanan tanpa batas.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Misi */}
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
            <div className="bg-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100">
              <Target className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Visi & Misi</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Menjadi platform e-commerce nomor satu yang menjembatani produk lokal dan internasional dengan harga kompetitif.
            </p>
          </div>

          {/* Tim */}
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
            <div className="bg-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100">
              <Users className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tim Berdedikasi</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Dikelola oleh para ahli teknologi dan kurator produk untuk memastikan setiap barang yang sampai ke tangan Anda adalah yang terbaik.
            </p>
          </div>

          {/* Keamanan */}
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
            <div className="bg-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100">
              <ShieldCheck className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Keamanan Berlapis</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Transaksi Anda aman bersama kami. Kami menggunakan enkripsi SSL terbaru untuk melindungi data pribadi dan finansial Anda.
            </p>
          </div>
        </div>

        {/* Info Tambahan */}
        <div className="mt-24 p-12 bg-indigo-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-6 italic">Kenapa RevoShop?</h2>
            <p className="text-indigo-200 text-lg">
              Kami percaya bahwa belanja bukan hanya soal transaksi, tapi soal pengalaman. 
              Di RevoShop, kami memastikan setiap pengiriman dilakukan dengan hati dan ketepatan waktu.
            </p>
          </div>
          <div className="flex-none bg-indigo-800 p-8 rounded-2xl border border-indigo-700">
             <div className="flex items-center gap-4 mb-4">
                <ShoppingBag className="w-10 h-10 text-indigo-400" />
                <span className="text-2xl font-bold">15,000+</span>
             </div>
             <p className="text-indigo-300 text-sm uppercase font-bold tracking-widest">Produk Terkirim</p>
          </div>
        </div>
      </div>
    </div>
  );
}