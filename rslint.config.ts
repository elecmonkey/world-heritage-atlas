import {
  defineConfig,
  js,
  reactHooksPlugin,
  reactPlugin,
  ts,
} from '@rslint/core'

export default defineConfig([
  {
    ignores: ['dist/**', 'slide/dist/**', 'node_modules/**'],
  },
  {
    files: ['src/**/*.{ts,tsx}', 'rsbuild.config.ts'],
    ...js.configs.recommended,
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
      },
    },
  },
  {
    files: ['src/**/*.{ts,tsx}', 'rsbuild.config.ts'],
    ...ts.configs.recommended,
  },
  {
    files: ['src/**/*.{tsx}'],
    ...reactPlugin.configs.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['src/**/*.{tsx}'],
    ...reactHooksPlugin.configs.recommended,
  },
])
