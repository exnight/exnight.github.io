const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const common = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: './index.tsx',
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: './js/[name].[contenthash:6].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Website',
      template: './assets/index.ejs',
      inject: 'body',
      hash: true,
      favicon: './assets/favicon.ico',
    }),
    new CompressionPlugin({
      test: /\.(js|css|html)$/,
      threshold: 10240,
      minRatio: 0.6,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
        },
      },
    },
  },
};

module.exports = common;
