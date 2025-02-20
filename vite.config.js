import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Dadosgerador',
        short_name: 'dados',
        description: 'rolador de dados d6 e d8',
        theme_color: 'rgb(217, 245, 201)',
        icons: [
          {
            src: 'dado2.svg',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'dado1.svg',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});