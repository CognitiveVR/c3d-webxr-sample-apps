import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      // Enable the service worker for local development (localhost:5173)
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Cog3D WebXR - ThreeJS VR Project with PWA support',
        short_name: 'ThreeJS VR',
        start_url: '/index.html',
        display: 'standalone',
        background_color: '#505050',
        theme_color: '#505050',
        orientation: 'landscape-primary',
        icons: [
          {
            src: '/icons/Eye-Transparent.png',
            sizes: '250x250',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      'three': path.resolve(__dirname, 'node_modules/three'),
    }
  }
});