import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/workday_oct2025/',
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})

