/* eslint-disable no-unused-vars */

const path = require('path');
const commonWebpackModules = require('./commonWebpackModules');

module.exports = (env) => {
  const {
    module: { rules: commonRules },
    resolve: { alias: commonAlias },
    plugins: commonPlugins,
    devtool: commonDevTool
  } = commonWebpackModules(env);

  const config = {
    mode: 'development',

    context: path.join(__dirname, '../src'),

    entry: {
      bundle: './index.js'
    },

    output: {
      filename: '[name].js',
      path: path.join(__dirname, '../build_dev')
    },

    devServer: {
      contentBase: [path.join(__dirname, '../build_dev')],
      port: 1337,
      historyApiFallback: true
    },

    resolve: {
      alias: {
        ...commonAlias
      }
    },

    module: {
      rules: [...commonRules]
    },
    plugins: [...commonPlugins],
    devtool: commonDevTool
  };

  return config;
};
