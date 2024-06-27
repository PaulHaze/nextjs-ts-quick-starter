import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/?(*.)(test).[jt]s?(x)'], // ['**/*.{test,spec}.?(c|m)[jt]s?(x)'] <- default vite settings

    // all tests in with .tsx extenstion will run in jsdom
    environmentMatchGlobs: [['**/*.test.tsx', 'jsdom']],
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
});
