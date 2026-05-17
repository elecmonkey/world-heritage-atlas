import { defineConfig } from '@rsbuild/core'
import { type BabelTransformOptions, pluginBabel } from '@rsbuild/plugin-babel'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  server: {
    port: 7010,
  },
  source: {
    entry: {
      index: './src/main.tsx',
    },
  },
  html: {
    template: './index.html',
  },
  plugins: [
    pluginReact(),
    pluginBabel({
      include: /\.[jt]sx?$/,
      exclude: [/[\\/]node_modules[\\/]/],
      babelLoaderOptions(options: BabelTransformOptions) {
        options.plugins ??= []
        options.plugins.unshift('babel-plugin-react-compiler')
      },
    }),
  ],
})
