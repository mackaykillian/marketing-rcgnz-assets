/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // Served from https://mackaykillian.github.io/marketing-rcgnz-assets/ on GitHub Pages.
  base: '/marketing-rcgnz-assets/',
  plugins: [react(), tailwindcss()],
  test: {
    // Pure schedule-logic unit tests run in a fast Node environment.
    environment: 'node',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
});
