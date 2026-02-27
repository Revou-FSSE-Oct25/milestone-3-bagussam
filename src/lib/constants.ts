/**
 * Tempat menyimpan data statis seperti teks promo atau kategori.
 * Membantu memenuhi syarat SSG (Static Site Generation) untuk konten statis.
 */
export const SITE_CONFIG = {
  name: 'RevoShop',
  description: 'The best place to find your daily needs.',
  contact: 'support@revoshop.com',
};

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Admin', href: '/admin' },
];