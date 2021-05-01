import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.config.common';

const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const prod: Configuration = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
        },
      ],
    }),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: 'production',
};

const config = merge<Configuration>(common, prod);

export default config;
