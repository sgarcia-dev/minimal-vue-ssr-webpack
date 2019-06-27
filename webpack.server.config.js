const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');
const VueSSRPlugin = require('vue-ssr-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  target: 'node',
  entry: './src/entry.server.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2'
  },
  devtool: 'source-map',
  externals: Object.keys(require('./package.json').dependencies),
  plugins: [
    // new VueSSRPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
})
