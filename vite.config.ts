// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPath from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPath()],
  resolve: {
    alias: {
      '@opfr': path.resolve(__dirname, 'node_modules/@opfr'),
    },
  },
  optimizeDeps: {
    include: [
      '@opfr/definitions',
      '@opfr/emojis',
      '@opfr/services',
      '@opfr/utils-lang',
      '@opfr/utils-type',
    ],
  },
});
