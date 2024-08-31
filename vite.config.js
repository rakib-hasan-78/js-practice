// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  // You can add configurations here, such as plugins, server options, etc.
  server: {
    port: 3000, // Default port is 3000
    open: true, // Automatically opens the app in the browser
    strictPort: true, // Fails if the port is already in use
    hmr: false,
  },
  build: {
    sourcemap: true, // Generates source maps for easier debugging
  },
  // Additional configurations can be added as needed
})
