const webpackBaseConfig = require('../config/webpack.base.config')

module.exports = ({ config }) => ({
  ...config,
  mode: 'development',
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      ...webpackBaseConfig.module.rules,
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: '@storybook/source-loader',
            options: {
              injectParameters: true,
              inspectLocalDependencies: false,
              inspectDependencies: false,
            },
          },
        ],
        exclude: /node_modules/,
        enforce: 'pre',
      },
    ],
  },
  performance: {
    hints: false,
  },
  plugins: [...config.plugins],
  resolve: {
    ...config.resolve,
    modules: [...config.resolve.modules, ...webpackBaseConfig.resolve.modules],
    extensions: [...config.resolve.extensions, ...webpackBaseConfig.resolve.extensions],
  },
})
