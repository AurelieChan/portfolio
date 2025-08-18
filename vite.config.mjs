import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({ targets: [{ src: 'php/**/*', dest: 'php' }] })
  ],
  server: {
    host: true,     // 0.0.0.0 => reachable from your phone via http://<LAN-IP>:5173
    https: false,
    port: 5173,
    strictPort: true,
    hmr: { host: '0.0.0.0' }
  },
  preview: {
    host: true,
    https: false,
    port: 4173
  }
});

