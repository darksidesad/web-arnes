import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  server: {
    host: '0.0.0.0'
  },
  vite: {
    preview: {
      allowedHosts: ['paginas-web-web-ejemplo.vh9sw0.easypanel.host', 'all']
    }
  }
});