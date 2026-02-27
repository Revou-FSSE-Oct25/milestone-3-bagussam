import { ShoppingCart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

// Fungsi untuk mengambil detail produk (Simulasi SSR)
async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: 'no-store', // Memastikan SSR (selalu ambil data baru)
  });
  
  if (!res.ok) return null;
  return res.json() as Promise<Product>;
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    return <div className="text-center py-20 font-bold">Produk tidak ditemukan.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center text-indigo-600 font-medium mb-8 hover:underline">
        <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Katalog
      </Link>

      <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl border">
        <div className="flex justify-center items-center bg-gray-50 rounded-xl p-10">
          <img src={product.image} alt={product.title} className="max-h-[450px] mix-blend-multiply" />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-sm font-bold text-indigo-500 uppercase tracking-widest">{product.category}</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{product.title}</h1>
          <p className="text-2xl font-black text-gray-900 mb-6">${product.price}</p>
          
          <div className="border-t border-b py-6 mb-8">
            <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Deskripsi</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold flex items-center justify-center hover:bg-indigo-700 transition">
            <ShoppingCart className="w-5 h-5 mr-2" /> Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}