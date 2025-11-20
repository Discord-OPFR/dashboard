// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import type { Config } from '@react-router/dev/config';
import { vercelPreset } from '@vercel/react-router/vite';

export default {
  appDirectory: 'src',
  ssr: true,
  prerender: ['/'],
  presets: [vercelPreset()],
} satisfies Config;
