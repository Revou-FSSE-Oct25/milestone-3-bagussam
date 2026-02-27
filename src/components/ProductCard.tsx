import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, title, price, image }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md transition">
      {/* Penggunaan next/image untuk optimasi performa (LCP) */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          priority={id <= 4} // Berikan prioritas untuk 4 gambar pertama (optimasi LCP)
        />
      </div>
      
      <h3 className="text-sm font-semibold line-clamp-1">{title}</h3>
      <p className="text-indigo-600 font-bold mt-2">${price}</p>
      
      <Link 
        href={`/product/${id}`}
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded text-sm w-full text-center"
      >
        Lihat Detail
      </Link>
    </div>
  );
}