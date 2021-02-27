const webpack = require('webpack')

const paths = require('../config/paths')
const webpackBaseConfig = require('./webpack.base.config')

module.exports = {
  mode: 'production',
  ...webpackBaseConfig,
  devtool: false,
}
