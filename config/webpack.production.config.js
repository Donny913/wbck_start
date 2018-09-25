const path = require('path');
const commonWebpackModules = require('./commonWebpackModules');
const { rules } = commonWebpackModules;

const config = {
  mode: 'production',

  context: path.join(__dirname, '../src'),

  entry: {
    bundle: './index.js',
    launcher: './launcher.js'
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../build_prod')
  },

  module: {
    rules: [...rules]
  }
};

module.exports = config;
