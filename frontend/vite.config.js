import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Add the base path for deployment
  base: '/SkillWithUs-Innowah2025-f76f6144ba955bd01b6eb4ce11c2115646b03ba1/frontend/'
})