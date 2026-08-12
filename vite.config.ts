import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'
import { fileURLToPath } from 'node:url'
import * as path from 'path'
import { resolve } from 'path'
/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import pkg from './package.json' with { type: 'json' }
const { dependencies, devDependencies } = pkg

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: resolve(dirname, 'src/index.ts'),
      name: 'ui-kit-lumos',
      formats: ['es'],
      fileName: 'index',
    },

    rolldownOptions: {
      // former rollupOptions
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
    },
    sourcemap: true,
    target: 'esnext',
  },

  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(dirname, 'src'),
      },
    ],
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
        },
      },
    ],
  },
})
