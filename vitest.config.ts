import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    environmentMatchGlobs: [['**/*.test.tsx', 'jsdom']],
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
});
