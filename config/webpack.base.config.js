const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const paths = require('../config/paths')

module.exports = {
  entry: [path.resolve(paths.src, 'index.tsx')],
  externals: {
    crypto: 'crypto',
  },
  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve(paths.dist),
  },
  module: {
    rules: [
      {
        test: /\.ts?/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new StyleLintPlugin({
      files: 'src/**/*.ts?',
    }),
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
