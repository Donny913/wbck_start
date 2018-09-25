const path = require('path');
const commonWebpackModules = require('./commonWebpackModules');
const { rules } = commonWebpackModules;

const config = {
  mode: 'development',

  context: path.join(__dirname, '../src'),

  entry: {
    bundle: './index.js',
    launcher: './launcher.js'
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../build_dev')
  },

  devServer: {
    contentBase: [
      path.join(__dirname, '../build_dev'),
      path.join(__dirname, '../public')
    ],
    port: 1337,
    historyApiFallback: true
  },

  module: {
    rules: [...rules]
  }
};

module.exports = config;
