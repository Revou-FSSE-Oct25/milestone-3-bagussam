'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Loader2, Edit3 } from 'lucide-react';
import Link from 'next/link';

/**
 * Halaman Edit Produk (Update)
 * Memenuhi syarat Full CRUD di Dashboard Admin.
 */
export default function EditProductPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Ambil data produk lama saat halaman dimuat
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setFormData({
          title: data.title,
          price: data.price.toString(),
          description: data.description,
          image: data.image,
          category: data.category
        });
      } catch (err) {
        console.error("Gagal mengambil data produk");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        alert('Produk berhasil diperbarui (Simulasi API)');
        router.push('/admin');
      }
    } catch (err) {
      alert('Gagal memperbarui produk.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader2 className="animate-spin text-indigo-600 w-10 h-10" />
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/admin" className="inline-flex items-center text-indigo-600 font-bold mb-8 hover:underline group">
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> Kembali ke Dashboard
      </Link>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl p-8 md:p-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-blue-600 p-3 rounded-2xl text-white shadow-lg shadow-blue-100">
            <Edit3 />
          </div>
          <h1 className="text-3xl font-black text-gray-900">Edit Produk #{id}</h1>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Nama Produk</label>
              <input 
                required
                type="text" 
                value={formData.title}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Harga ($)</label>
              <input 
                required
                type="number" 
                value={formData.price}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Kategori</label>
              <select 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                value={formData.category}
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
              value={formData.image}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition font-mono text-xs text-blue-600"
              onChange={(e) => setFormData({...formData, image: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Deskripsi Produk</label>
            <textarea 
              required
              rows={4}
              value={formData.description}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={saving}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-black text-lg flex items-center justify-center hover:bg-blue-700 transition shadow-xl shadow-blue-100 active:scale-95 disabled:opacity-50"
          >
            {saving ? <Loader2 className="animate-spin mr-2" /> : <Save className="mr-2" />}
            Perbarui Produk
          </button>
        </form>
      </div>
    </div>
  );
}