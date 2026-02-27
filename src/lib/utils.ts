import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Fungsi untuk menggabungkan class Tailwind secara dinamis.
 * Sangat berguna untuk komponen UI yang menerima props class tambahan.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}