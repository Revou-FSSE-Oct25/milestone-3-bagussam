import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Daftarkan domain API agar next/image diizinkan memproses gambar tersebut
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;