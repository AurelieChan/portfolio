// vite.config.js
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'php/**/*', // Copy all files and subdirectories in the php directory
          dest: 'php'      // This will place the copied content in the dist/php directory
        }
      ]
    })
  ],
  build: {
    rollupOptions: {
      // Add any additional rollup configuration here
    }
  }
});

