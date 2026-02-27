const API_BASE_URL = 'https://fakestoreapi.com/products';

/**
 * Centralized fetch logic untuk mengambil data dari FakeStoreAPI.
 * Digunakan agar pemanggilan API di file page.tsx atau components lebih rapi.
 */
export async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  
  return response.json();
}

// Helper untuk mengambil semua produk
export const getProducts = () => fetcher('/products', { next: { revalidate: 3600 } });

// Helper untuk mengambil detail produk berdasarkan ID
export const getProductById = (id: string) => fetcher(`/products/${id}`, { cache: 'no-store' });