import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: specify a port for the dev server
    open: true, // Optional: auto-open the browser when starting
  },
  resolve: {
    alias: {
      // Optional: set up path aliases if needed
      '@': '/src',
    },
  },
})