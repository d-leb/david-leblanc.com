const ora = require('ora')
const rm = require('rimraf')
const { web } = require('webpack')
const webpack = require('webpack')

const paths = require('../config/paths')
const webpackConfig = require('../config/webpack.prod.config')

console.clear()
console.log('Begin build...')

const spinner = ora('Building for production...\n')
spinner.start()

rm(paths.dist, (error) => {
  if (error) {
    throw error
  }

  webpack(webpackConfig, (error, stats) => {
    spinner.stop()

    if (error) {
      throw error
    }

    console.log('Build complete.\n')

    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }) + '\n\n'
    )
  })
})
