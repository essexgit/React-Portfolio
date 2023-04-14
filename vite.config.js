import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // start sever automatically
  server: {
    open: '/',
    watch: {
      usePolling: true
    }
  },
  base: '/react-portfolio/',

  plugins: [react()],
});
