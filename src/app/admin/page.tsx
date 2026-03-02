'use client';

import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Package, Search, ExternalLink, Loader2 } from 'lucide-react';

/**
 * Komponen Admin Dashboard
 * Mengelola daftar produk: Menampilkan (Read), Menghapus (Delete), 
 * dan menyediakan akses ke Tambah (Create) serta Ubah (Update).
 */
export default function AdminDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Mengambil data produk dari API saat komponen dimuat
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Gagal mengambil data produk:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk simulasi penghapusan produk
  const handleDelete = async (id: number) => {
    const isConfirmed = window.confirm('Apakah Anda yakin ingin menghapus produk ini?');
    if (isConfirmed) {
      // Simulasi penghapusan di sisi klien (Optimistic UI)
      setProducts(products.filter(p => p.id !== id));
      // Di proyek asli, panggil: await fetch(`.../api/products/${id}`, { method: 'DELETE' })
      console.log(`Produk dengan ID ${id} berhasil dihapus.`);
    }
  };

  // Filter produk berdasarkan input pencarian
  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
      {/* Bagian Header Dashboard */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Dashboard Admin</h1>
          <p className="text-gray-500 mt-1">Kelola inventaris dan daftar produk RevoShop secara real-time.</p>
        </div>
        
        {/* Menggunakan tag <a> standar untuk kompatibilitas pratinjau internal */}
        <a 
          href="/admin/add" 
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold flex items-center hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 active:scale-95"
        >
          <Plus className="w-5 h-5 mr-2" /> Tambah Produk Baru
        </a>
      </div>

      {/* Ringkasan Statistik Sederhana */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="bg-indigo-50 p-4 rounded-xl text-indigo-600">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Total Produk</p>
            <p className="text-2xl font-black text-gray-900">{products.length}</p>
          </div>
        </div>
      </div>

      {/* Kontainer Utama Tabel */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden">
        {/* Bilah Pencarian di dalam Tabel */}
        <div className="p-6 border-b flex items-center bg-gray-50/50">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Cari berdasarkan nama produk..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Tabel Data Produk */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-400 text-xs uppercase font-black tracking-widest">
              <tr>
                <th className="px-6 py-4">Informasi Produk</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">Harga</th>
                <th className="px-6 py-4 text-center">Aksi Manajemen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={4} className="text-center py-20">
                    <div className="flex flex-col items-center gap-3">
                      <Loader2 className="animate-spin text-indigo-600 w-8 h-8" />
                      <p className="text-gray-400 text-sm font-medium">Memuat data inventaris...</p>
                    </div>
                  </td>
                </tr>
              ) : filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-20 text-gray-400 italic">
                    Tidak ada produk yang ditemukan.
                  </td>
                </tr>
              ) : filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-indigo-50/30 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg p-1 border border-gray-100 flex-shrink-0">
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                      <div className="max-w-xs">
                        <p className="font-bold text-gray-900 truncate" title={p.title}>{p.title}</p>
                        <p className="text-[10px] font-mono text-gray-400 bg-gray-100 inline-block px-1.5 py-0.5 rounded">ID: #{p.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] font-black px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-600 uppercase">
                      {p.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-black text-indigo-600">
                    ${p.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center items-center gap-3">
                      {/* Tombol Edit */}
                      <a 
                        href={`/admin/edit/${p.id}`} 
                        className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                        title="Edit Produk"
                      >
                        <Edit className="w-5 h-5" />
                      </a>
                      
                      {/* Tombol Delete */}
                      <button 
                        onClick={() => handleDelete(p.id)} 
                        className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors"
                        title="Hapus Produk"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>

                      {/* Link Lihat Detail di Toko */}
                      <a 
                        href={`/product/${p.id}`} 
                        className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Lihat di Toko"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}