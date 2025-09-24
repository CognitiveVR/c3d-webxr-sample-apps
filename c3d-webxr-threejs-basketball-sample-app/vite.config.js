import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: true
  },
  resolve: {
    alias: {
      'three': resolve(__dirname, 'node_modules/three')
    }
  }
});