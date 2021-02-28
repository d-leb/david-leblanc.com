const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpackProdConfig = require('./webpack.prod.config')

module.exports = {
  ...webpackProdConfig,
  plugins: [...webpackProdConfig.plugins, new BundleAnalyzerPlugin()],
}
