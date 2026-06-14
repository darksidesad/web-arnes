// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: ['paginas-web-web-ejemplo.vh9sw0.easypanel.host', 'all']
    }
  },
  server: {
    host: '0.0.0.0'
  }
});