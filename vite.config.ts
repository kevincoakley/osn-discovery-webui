/// <reference types="vite/client" />
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  // const env = loadEnv(mode, process.cwd())
  return {
    plugins: [react()],
    server: {
      // proxy: {
      //   "/api": {
      //     target: "https://osn-explorer.sdsc.edu/api/v2.0",
      //     changeOrigin: true,
      //     secure: false,
      //     rewrite: (path) => path.replace(/^\/api/, ""),
      //   }
      // },
      watch: {
        usePolling: true,
      },
      host: true, // Needed for Docker Container port mapping to work
      strictPort: true,
      port: 6142,
    }
  }
})
