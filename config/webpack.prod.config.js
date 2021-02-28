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
    },
  },
  performance: {
    hints: 'error',
  },
}
