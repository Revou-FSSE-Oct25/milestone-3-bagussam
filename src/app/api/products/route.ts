import { NextResponse } from 'next/server';

// Simulasi GET: Mengambil data dari FakeStoreAPI
export async function GET() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: "Gagal mengambil data" }, { status: 500 });
  }
}

// Simulasi POST: Menambah produk baru
export async function POST(request: Request) {
  const body = await request.json();
  
  // Di sini biasanya ada logika simpan ke Database (Prisma/MongoDB)
  // Untuk tugas ini, kita cukup mengembalikan response sukses
  return NextResponse.json({
    message: "Produk berhasil ditambahkan (Simulasi)",
    data: body
  }, { status: 201 });
}