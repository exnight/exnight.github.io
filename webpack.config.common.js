const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const common = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './js/index.jsx',
    // vendor: ['react', 'react-dom', 'firebase/app', 'firebase/database'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: './js/[name]-[chunkhash].js',
    chunkFilename: './js/[name]-[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              ['transform-imports', {
                'react-router-dom': {
                  transform: 'react-router-dom/${member}',
                  preventFullImport: true,
                },
              }],
              ['lodash', {
                id: ['semantic-ui-react'],
              }],
              '@babel/plugin-proposal-function-bind',
            ],
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        include: path.join(__dirname, 'src', 'img'),
        loader: ['file-loader?name=img/[name].[ext]', 'image-webpack-loader?bypassOnDebug'],
      },
      {
        test: /\.(gif|png|woff|svg|eot|ttf|woff2)$/,
        exclude: /src/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: '[name].[ext]',
          publicPath: '../',
          outputPath: 'css/fonts/',
        },
      },
      {
        test: /\.(png|woff|svg|eot|ttf|woff2)$/,
        include: path.join(__dirname, 'src', 'css'),
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: '[path][name].[ext]',
          publicPath: '../',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Leo Wong',
      template: './index.ejs',
      inject: 'body',
      hash: true,
      favicon: './favicon.ico',
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash:6].css',
    }),
    new CompressionPlugin({
      test: /\.(js|css|html)$/,
      threshold: 10240,
      minRatio: 0.6,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = common;
