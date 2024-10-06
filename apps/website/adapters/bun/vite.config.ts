import { bunServerAdapter } from '@builder.io/qwik-city/adapters/bun-server/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import { _TextEncoderStream_polyfill } from '@builder.io/qwik-city/middleware/request-handler';

import baseConfig from '../../vite.config';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
globalThis.TextEncoderStream ||= _TextEncoderStream_polyfill;

// @ts-ignore
export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ['src/entry.bun.ts', '@qwik-city-plan'],
      },
      minify: false,
    },
    plugins: [
      bunServerAdapter({
        ssg: {
          include: ['/*'],
          origin: 'https://visomi.dev',
          maxWorkers: 1, // Limit Workers to 1, otherwise SSG will hang when compiling Qwik City app with `bun run --bun build`.
        },
      }),
    ],
  };
});
