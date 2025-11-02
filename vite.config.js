import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Changed from '/365-poklona/' for custom domain (pavelvolitaru.com)
});