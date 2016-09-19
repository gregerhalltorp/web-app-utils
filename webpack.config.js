const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const webpackConfig = {
  entry: ['babel-polyfill', path.join(__dirname, 'index.js')],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    library: 'gregerhalltorp-web-app-utils',
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-2'],
        babelrc: false,
      },
    }],
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};

module.exports = webpackConfig;
