import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import { Configuration } from 'webpack';

const CompressionPlugin = require('compression-webpack-plugin');

const common: Configuration = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: './index.tsx',
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: './js/[name].[contenthash].js',
    hashDigestLength: 6,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|eot|otf|ttf|woff(2)?)$/,
        type: 'asset',
        parser: {
          // decide inline or emit as separate assets
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb
          },
        },
        generator: {
          filename: 'fonts/[name].[contenthash][ext][query]',
        },
      },
      {
        test: /\.(?:ico|gif|png|jpe*g)$/i,
        type: 'asset/resource', // emit as separate assets
        generator: {
          filename: 'img/[name].[contenthash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Leo Wong',
      template: './assets/index.ejs',
      inject: 'body',
      hash: true,
      favicon: './assets/favicon.ico',
    }),
    new CompressionPlugin({
      test: /\.(js|css|html|ttf)$/,
      threshold: 10240,
      minRatio: 0.6,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat', // Must be below test-utils
    },
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
          priority: -10,
        },
        reactVendor: {
          test: /[\\/]node_modules[\\/](preact|react|react-dom|wouter)[\\/]/,
          name: 'reactVendor',
          enforce: true,
          priority: -1,
        },
        iconVendor: {
          test: /[\\/]node_modules[\\/](@fortawesome|react-fontawesome)[\\/]/,
          name: 'iconVendor',
          enforce: true,
          priority: -1,
        },
        app: {
          test: /[\\/]src[\\/]/,
          name: 'app',
          enforce: true,
          priority: -1,
        },
      },
    },
  },
};

export default common;
