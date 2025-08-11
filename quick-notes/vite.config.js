import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/QuickNotes-Project/',
  build: {
    outDir: 'dist'
  }
})