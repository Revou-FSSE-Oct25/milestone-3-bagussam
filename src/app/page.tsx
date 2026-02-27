import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

// Fungsi Fetching Data (Server Component)
async function getProducts() {
  // next: { revalidate: 3600 } membuat ini menjadi ISR (refresh tiap 1 jam)
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error('Gagal mengambil data produk');
  return res.json() as Promise<Product[]>;
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">RevoShop Catalog</h1>
        <p className="text-gray-600">Temukan produk terbaik dengan harga terjangkau.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link 
            href={`/product/${product.id}`} 
            key={product.id}
            className="group bg-white border rounded-xl overflow-hidden hover:shadow-lg transition shadow-sm"
          >
            <div className="h-64 relative p-6 bg-gray-50 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-h-full object-contain group-hover:scale-105 transition duration-300" 
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-bold text-indigo-600 uppercase mb-1">{product.category}</p>
              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-3 h-10">
                {product.title}
              </h3>
              <p className="text-lg font-bold text-gray-900">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}