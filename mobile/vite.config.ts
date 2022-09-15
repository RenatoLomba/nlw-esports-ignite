import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      useCredentials: true,
      manifest: {
        name: 'NLW eSports | Encontre seu duo',
        short_name: 'NLW eSports',
        display: 'fullscreen',
        background_color: '#121214',
        theme_color: '#8B5CF6',
        description:
          'Encontre seu parceiro de jogatina neste incrível app desenvolvido na 8ª edição da NLW da Rocketseat',
        icons: [
          {
            src: '/logo-nlw-esports-xs.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: '/logo-nlw-esports-sm.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: '/logo-nlw-esports-md.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/logo-nlw-esports-lg.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
