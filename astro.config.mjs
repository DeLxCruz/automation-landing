import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    plugins: [tsconfigPaths()],
    build: {
      sourcemap: true,
    },
  },
});
