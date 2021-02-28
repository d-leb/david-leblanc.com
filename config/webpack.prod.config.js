const webpackBaseConfig = require('./webpack.base.config')

module.exports = {
  mode: 'production',
  ...webpackBaseConfig,
  devtool: false,
}
