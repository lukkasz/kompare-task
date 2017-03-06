const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'client', 'index.js')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'client')
      },
      {
        test: /\.scss$/,
        loaders: ['style','css','sass'],
        include: path.join(__dirname, 'client'),
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      client: 'client'
    },
    extensions: ['','.js','.jsx']
  }, 
  plugins: [HtmlWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()],
  devtool: 'cheap-module-eval-source-map'
};