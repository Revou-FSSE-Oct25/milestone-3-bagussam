import { useCartStore } from '../store/useCartStore';

// Mock produk untuk pengujian
const mockProduct = {
  id: 1,
  title: 'Kaos RevoU',
  price: 100,
  description: 'Kaos keren',
  category: 'fashion',
  image: 'https://via.placeholder.com/150',
};

describe('Logic Keranjang Belanja (Zustand)', () => {
  beforeEach(() => {
    // Reset keranjang sebelum setiap tes
    useCartStore.getState().clearCart();
  });

  it('harus menambah barang ke keranjang', () => {
    const { addToCart } = useCartStore.getState();
    
    addToCart(mockProduct);
    
    const { cart } = useCartStore.getState();
    expect(cart.length).toBe(1);
    expect(cart[0].title).toBe('Kaos RevoU');
  });

  it('harus menambah kuantitas jika barang yang sama ditambah lagi', () => {
    const { addToCart } = useCartStore.getState();
    
    addToCart(mockProduct);
    addToCart(mockProduct);
    
    const { cart } = useCartStore.getState();
    expect(cart.length).toBe(1);
    expect(cart[0].quantity).toBe(2);
  });

  it('harus menghitung total harga dengan benar', () => {
    const { addToCart, getTotalPrice } = useCartStore.getState();
    
    addToCart(mockProduct); // $100
    addToCart(mockProduct); // $100
    
    expect(getTotalPrice()).toBe(200);
  });
});