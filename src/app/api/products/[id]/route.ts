import { NextResponse } from 'next/server';

// Simulasi PUT: Update produk berdasarkan ID
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  const id = params.id;

  return NextResponse.json({
    message: `Produk ID ${id} berhasil diperbarui (Simulasi)`,
    data: body
  });
}

// Simulasi DELETE: Hapus produk berdasarkan ID
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  return NextResponse.json({
    message: `Produk ID ${id} berhasil dihapus (Simulasi)`
  });
}