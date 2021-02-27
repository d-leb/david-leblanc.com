const webpack = require('webpack')

const paths = require('../config/paths')
const webpackBaseConfig = require('./webpack.base.config')

module.exports = {
  mode: 'development',
  ...webpackBaseConfig,
  devtool: 'eval-cheap-module-source-map',
  entry: ['react-hot-loader/patch', ...webpackBaseConfig.entry],
  output: {
    ...webpackBaseConfig.output,
    publicPath: '/',
  },
  plugins: [...webpackBaseConfig.plugins, new webpack.HotModuleReplacementPlugin()],
  resolve: {
    ...webpackBaseConfig.resolve,
    alias: {
      ...webpackBaseConfig.resolve.alias,
    },
  },
  devServer: {
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    },
    hot: true,
    overlay: {
      errors: true,
      warnings: true,
    },
    host: 'localhost',
    port: 3000,
    open: true,
    openPage: '',
    contentBase: paths.dist,
    historyApiFallback: true,
    publicPath: '/',
  },
}
