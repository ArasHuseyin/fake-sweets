import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative Pfade, damit der Build auch aus einem Unterordner ausgeliefert werden kann
export default defineConfig({
  plugins: [react()],
  base: './',
})
