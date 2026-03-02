'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Loader2, PackagePlus } from 'lucide-react';
import Link from 'next/link';

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: 'electronics'
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        alert('Produk berhasil ditambahkan ke sistem!');
        router.push('/admin');
      }
    } catch (err) {
      alert('Gagal menambah produk.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/admin" className="inline-flex items-center text-indigo-600 font-bold mb-8 hover:underline group">
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> Kembali ke Dashboard
      </Link>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl p-8 md:p-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-indigo-600 p-3 rounded-2xl text-white shadow-lg shadow-indigo-100">
            <PackagePlus />
          </div>
          <h1 className="text-3xl font-black text-gray-900">Tambah Produk</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Nama Produk</label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                placeholder="Contoh: Apple MacBook Air M2"
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Harga ($)</label>
              <input 
                required
                type="number" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                placeholder="999.99"
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Kategori</label>
              <select 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">URL Gambar</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition font-mono text-xs text-blue-600"
              placeholder="https://images.com/product.jpg"
              onChange={(e) => setFormData({...formData, image: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Deskripsi Lengkap</label>
            <textarea 
              required
              rows={4}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
              placeholder="Tuliskan spesifikasi produk di sini..."
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-black text-lg flex items-center justify-center hover:bg-indigo-700 transition shadow-xl shadow-indigo-100 active:scale-95 disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin mr-2" /> : <Save className="mr-2" />}
            Simpan Produk Baru
          </button>
        </form>
      </div>
    </div>
  );
}