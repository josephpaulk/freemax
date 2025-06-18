import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api-wordpress': {
        target: 'https://hub.maxsys.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-wordpress/, '/wp-json'),
        secure: true
      },
      '/api-laravel': {
        target: 'https://hrm.maxsys.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-laravel/, '/api'),
        secure: true
      }
    }
  }
});