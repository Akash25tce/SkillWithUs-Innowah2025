import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Get the branch name from the AWS Amplify environment variable
const branchName = process.env.AWS_BRANCH;
// Construct the base URL dynamically.
// The structure will be /<branch-name>/<path-to-frontend>/
const BASE_URL = `/${branchName}/frontend/`;

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: BASE_URL,
});