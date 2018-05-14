const path = require('path');

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
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
