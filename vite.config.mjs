import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import fs from 'node:fs';
import path from 'node:path';

const copyTargets = [];
const includePhp = process.env.INCLUDE_PHP === 'true';

if (fs.existsSync(path.resolve('app-ads.txt'))) {
  copyTargets.push({ src: 'app-ads.txt', dest: '.' });
}

// Copy PHP only when explicitly requested so normal frontend deploys
// do not overwrite production-side mailer changes.
if (includePhp) {
  copyTargets.unshift({ src: 'php/**/*', dest: 'php' });
}

export default defineConfig({
  plugins: [
    {
      name: 'remove-stale-php-output',
      buildStart() {
        if (!includePhp) {
          fs.rmSync(path.resolve('dist/php'), { recursive: true, force: true });
        }
      }
    },
    viteStaticCopy({
      targets: copyTargets
    })
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
