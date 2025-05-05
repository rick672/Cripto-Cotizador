import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// Tailwind CSS
import tailwindcss from '@tailwindcss/vite'
// PWA Plugin
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    VitePWA(
        { 
            registerType: 'autoUpdate',
            devOptions: { enabled: true },
            manifest: {
                name: 'Crypto Cotizador',
                short_name: 'Crypto',
                description: 'Aplicación para obtener cotizaciones de criptomonedas',
                theme_color: '#ffffff',
                display: 'standalone',
                start_url: '/',
                icons: [
                    {
                        src: '/apple-touch-icon-57x57.png',
                        sizes: '57x57',
                        type: 'image/png',
                    },
                    {
                        src: '/apple-touch-icon-72x72.png',
                        sizes: '72x72',
                        type: 'image/png',
                    },
                    {
                        src: '/apple-touch-icon-76x76.png',
                        sizes: '76x76',
                        type: 'image/png',
                    },
                    {
                        src: '/apple-touch-icon-114x114.png',
                        sizes: '114x114',
                        type: 'image/png',
                    },
                    {
                        src: '/apple-touch-icon-120x120.png',
                        sizes: '120x120',
                        type: 'image/png',
                    },
                    {
                        src: '/apple-touch-icon-144x144.png',
                        sizes: '144x144',
                        type: 'image/png',
                    },
                    {
                        src: '/apple-touch-icon-152x152.png',
                        sizes: '152x152',
                        type: 'image/png',
                    },
                    {
                        src: '/apple-touch-icon-180x180.png',
                        sizes: '180x180',
                        type: 'image/png',
                    },
                ],
            },
        },
    )
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
