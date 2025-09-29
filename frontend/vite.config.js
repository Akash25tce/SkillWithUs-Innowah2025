import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "5e581373-ab91-4b91-b49f-0b5dbb2e6f59-00-1zh61zhqp0g8s.pike.replit.dev"
    ],
    host: true,  // makes it accessible from external hosts
    port: 5173   // optional: you can set a port if needed
  }
})
