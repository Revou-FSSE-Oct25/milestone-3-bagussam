'use client';

import { useState, useEffect } from 'react';
import { Trash2, Edit, Plus, LayoutDashboard } from 'lucide-react';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ambil data dari API Route internal yang kita buat tadi
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm("Hapus produk ini?")) {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      if (res.ok) {
        alert("Produk berhasil dihapus (Simulasi)");
        setProducts(products.filter((p: any) => p.id !== id));
      }
    }
  };

  if (loading) return <div className="p-10 text-center">Memuat Dashboard...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold flex items-center">
          <LayoutDashboard className="mr-3" /> Admin Dashboard
        </h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700">
          <Plus className="w-4 h-4 mr-2" /> Tambah Produk
        </button>
      </div>

      <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 font-semibold text-gray-700">Produk</th>
              <th className="px-6 py-4 font-semibold text-gray-700">Kategori</th>
              <th className="px-6 py-4 font-semibold text-gray-700">Harga</th>
              <th className="px-6 py-4 font-semibold text-gray-700 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((product: any) => (
              <tr key={product.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 flex items-center">
                  <img src={product.image} className="w-10 h-10 object-contain mr-4" alt="" />
                  <span className="font-medium truncate max-w-xs">{product.title}</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{product.category}</td>
                <td className="px-6 py-4 font-bold">${product.price}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-md">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
