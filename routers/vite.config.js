import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This will allow access from other devices in your network
    port: 5173,        // Keep the default port, or change it if needed
  }
})

