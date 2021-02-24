const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const paths = require('../config/paths')

module.exports = {
  entry: [path.resolve(paths.src, 'index.tsx')],
  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve(paths.dist),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      template: path.join(paths.public, 'index.html'),
    }),
  ],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
}
