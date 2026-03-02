'use client';

import React, { useState } from 'react';
import { ArrowLeft, Save, Loader2, PackagePlus } from 'lucide-react';

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: 'electronics'
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulasi POST ke API
      const res = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        alert('Produk berhasil ditambahkan (Simulasi API)');
        window.location.href = '/admin';
      }
    } catch (err) {
      alert('Gagal menambah produk.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans">
      <a href="/admin" className="inline-flex items-center text-indigo-600 font-bold mb-8 hover:underline group">
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> Kembali ke Panel Admin
      </a>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl p-10">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-indigo-600 p-4 rounded-2xl text-white shadow-lg">
            <PackagePlus className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Tambah Inventaris Baru</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="md:col-span-2">
              <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">Nama Produk</label>
              <input 
                required
                type="text" 
                className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-indigo-500 rounded-2xl outline-none transition-all"
                placeholder="Masukkan nama produk..."
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">Harga ($)</label>
              <input 
                required
                type="number" 
                className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-indigo-500 rounded-2xl outline-none transition-all"
                placeholder="0.00"
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">Kategori</label>
              <select 
                className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-indigo-500 rounded-2xl outline-none transition-all"
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
            <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">URL Gambar Produk</label>
            <input 
              required
              type="text" 
              className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-indigo-500 rounded-2xl outline-none transition-all font-mono text-sm text-indigo-600"
              placeholder="https://example.com/image.jpg"
              onChange={(e) => setFormData({...formData, image: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">Deskripsi Inventaris</label>
            <textarea 
              required
              rows={4}
              className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-indigo-500 rounded-2xl outline-none transition-all"
              placeholder="Jelaskan detail produk secara lengkap..."
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center hover:bg-indigo-700 transition shadow-xl shadow-indigo-100 disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin mr-3" /> : <Save className="mr-3" />}
            Simpan ke Katalog
          </button>
        </form>
      </div>
    </div>
  );
}