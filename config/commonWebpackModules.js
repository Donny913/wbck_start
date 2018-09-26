const commonWebpackModules = {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.(png|jpg|gif|ico)$/,
      use: [
        {
          loader: 'file-loader',
          options: { name: 'images/[name].[ext]' }
        }
      ]
    },
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            mimetype: 'application/font-woff',
            name: 'fonts/[name].[ext]'
          }
        }
      ]
    },
  ]
};

module.exports = commonWebpackModules;