import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate', 
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
            src: '/icons/cog3d_icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/icons/cog3d_icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      srcDir: 'public', 
      filename: 'service-worker.js', 
      strategies: 'injectManifest', 
    })
  ],
});