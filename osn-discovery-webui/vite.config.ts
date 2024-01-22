/// <reference types="vite/client" />
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}
  return {
    plugins: [react()],
    base: './',
    server: {
      watch: {
        usePolling: true,
      },
      host: true, // Needed for Docker Container port mapping to work
      strictPort: true,
      port: 6142,
      proxy: {
        '/api': {
          target: process.env.VITE_API_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      },
      hmr: {
        clientPort: 6142
      },
    }
  }
})
