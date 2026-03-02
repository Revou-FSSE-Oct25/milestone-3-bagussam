import React from 'react';
import { ShieldCheck, Zap, Heart } from 'lucide-react';

/**
 * Halaman About Us (Static Site Generation - SSG)
 * Karena tidak ada data dinamis, Next.js akan merendernya secara statis saat build.
 */
export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="bg-indigo-600 py-24 text-center">
        <h1 className="text-5xl font-black text-white mb-6">Tentang RevoShop</h1>
        <p className="text-indigo-100 max-w-2xl mx-auto px-6 text-lg">
          Platform e-commerce masa depan yang mengutamakan kecepatan, keamanan, dan kepuasan pelanggan di setiap transaksi.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="bg-indigo-50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Zap className="text-indigo-600 w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Pengiriman Kilat</h3>
            <p className="text-gray-500 leading-relaxed">
              Kami bekerja sama dengan kurir terbaik untuk memastikan paket Anda tiba dalam waktu kurang dari 24 jam.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-pink-50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Heart className="text-pink-600 w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Pelayanan Hati</h3>
            <p className="text-gray-500 leading-relaxed">
              Tim dukungan kami siap membantu Anda kapan saja untuk menjawab pertanyaan seputar produk dan pesanan.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-green-50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="text-green-600 w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Keamanan Berlapis</h3>
            <p className="text-gray-500 leading-relaxed">
              Setiap transaksi dilindungi oleh enkripsi SSL terbaru untuk menjaga privasi dan keamanan data finansial Anda.
            </p>
          </div>
        </div>

        <div className="mt-24 p-12 bg-gray-50 rounded-[3rem] border border-gray-100 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-black text-gray-900 mb-6 italic tracking-tight">Visi Kami</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Menjadi destinasi belanja nomor satu di Indonesia yang tidak hanya menjual barang, tetapi juga membangun kepercayaan melalui transparansi harga dan kualitas barang yang terkurasi.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <p className="text-3xl font-black text-indigo-600">10k+</p>
              <p className="text-gray-400 text-sm font-bold uppercase">Produk</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <p className="text-3xl font-black text-indigo-600">5k+</p>
              <p className="text-gray-400 text-sm font-bold uppercase">Pelanggan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}