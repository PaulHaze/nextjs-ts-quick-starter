import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
    environmentMatchGlobs: [['**/*.test.tsx', 'jsdom']],
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
});
