const webpackBaseConfig = require('./webpack.base.config')

module.exports = {
  mode: 'production',
  ...webpackBaseConfig,
  devtool: false,
  externals: {
    '@axe-core/react': 'devtools',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 200000,
    },
  },
  performance: {
    hints: 'error',
    maxEntrypointSize: 300000,
  },
}
