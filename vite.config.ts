// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPath from 'vite-tsconfig-paths';
import { vercelPreset } from '@vercel/react-router/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPath()],
  resolve: {
    alias: {
      '@opfr': path.resolve(__dirname, 'node_modules/@opfr'),
    },
  },
  optimizeDeps: {
    include: ['@opfr'],
  },
  server: {
    fs: {
      allow: ['../../Gatewatcher/skin', '..'],
    },
  },
});
