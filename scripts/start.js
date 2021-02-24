const ora = require("ora");
const rm = require("rimraf");
const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");

const paths = require("../config/paths");
const webpackConfig = require("../config/webpack.devel.config");
const { devServer: devServerConfig } = webpackConfig;

console.clear();
console.log("Begin build...");

const spinner = ora("Building for development...\n");
spinner.start();

rm(paths.dist, (error) => {
  if (error) {
    throw error;
  }

  webpackDevServer.addDevServerEntrypoints(webpackConfig, devServerConfig);
  const compiler = webpack(webpackConfig, (error, stats) => {
    spinner.stop();

    if (error) {
      throw error;
    }

    console.log("Build complete.\n");

    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }) + "\n\n"
    );

    const server = new webpackDevServer(compiler, devServerConfig);
    server.listen(devServerConfig.port, devServerConfig.host);
  });
});
