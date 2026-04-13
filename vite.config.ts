import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  optimizeDeps: {
    exclude: ['lucide-react'],
  },

  // ❗ IMPORTANT FIX (this was causing white screen)
  base: '/',   // ✅ CHANGE THIS (NOT /voyex/)
});