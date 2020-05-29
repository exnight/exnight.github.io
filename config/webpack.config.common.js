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
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
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
          test: /[\\/]node_modules[\\/](react|react-dom|@reach)[\\/]/,
          name: 'reactVendor',
          enforce: true,
          priority: -1,
        },
        materialUIVendor: {
          test: /[\\/]node_modules[\\/](@material-ui)[\\/]/,
          name: 'materialUIVendor',
          enforce: true,
          priority: -1,
        },
        utilVendor: {
          test: /[\\/]node_modules[\\/](react-typed|jss-*.*)[\\/]/,
          name: 'utilVendor',
          enforce: true,
          priority: -1,
        },
      },
    },
  },
};

module.exports = common;
