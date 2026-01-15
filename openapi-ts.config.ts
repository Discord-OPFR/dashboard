import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: './api-specs/openapi.json',
  output: {
    path: 'src/api/generated',
    postProcess: ['prettier'],
  },
  plugins: [
    '@hey-api/typescript',
    {
      name: '@hey-api/sdk',
      responseStyle: 'data',
      operations: {
        strategy: 'byTags',
        nesting: 'operationId',
      },
    },
    {
      name: '@hey-api/client-fetch',
      responseStyle: 'data',
      throwOnError: true,
    },
  ],
});
