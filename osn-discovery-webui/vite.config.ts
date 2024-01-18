/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/web',
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // Needed for Docker Container port mapping to work
    strictPort: true,
    port: 6142,
    proxy: {
      '/api': {
        target: import.meta.env.VITE_API_BASE_URL,
        changeOrigin: true
      }
    },
    hmr: {
      clientPort: 6142
    },
  }
})
