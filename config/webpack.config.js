const path = require('path');

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
