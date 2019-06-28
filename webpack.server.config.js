const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');

module.exports = merge(baseWebpackConfig, { // Using webpack-merge to merge this config on top of the baseWebpackConfig
  target: 'node', // Avoids packaging Node.js built-ins
  entry: './src/entry.server.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2' // Outputs node-compatible modules instead of browser-compatible.
  },
  devtool: 'source-map',
  externals: Object.keys(require('./package.json').dependencies)
})
