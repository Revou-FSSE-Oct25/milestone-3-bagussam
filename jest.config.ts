import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Berikan path ke aplikasi Next.js Anda untuk memuat next.config.js dan file .env di lingkungan pengujian Anda
  dir: './',
});

// Tambahkan konfigurasi Jest kustom untuk dikirim ke Next.js
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Tambahkan lebih banyak opsi setup jika diperlukan
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig diekspor dengan cara ini untuk memastikan bahwa next/jest dapat memuat konfigurasi Next.js yang bersifat asinkron
export default createJestConfig(config);