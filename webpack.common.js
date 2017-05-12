const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './js/index.jsx',
    vendor: ['react', 'semantic-ui-react'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: './js/[name].[hash:8].js',
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
            presets: ['react', 'env', 'stage-0'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        include: path.join(__dirname, 'src', 'img'),
        use: ['file-loader?name=img/[name].[ext]', 'image-webpack-loader?bypassOnDebug'],
      },
      {
        test: /\.(gif|png|woff|svg|eot|ttf|woff2)$/,
        exclude: /src/,
        use: 'url-loader?limit=1000&name=[name].[ext]&publicPath=../&outputPath=css/fonts/',
      },
      {
        test: /\.(png|woff|svg|eot|ttf|woff2)$/,
        include: path.join(__dirname, 'src', 'css'),
        use: 'url-loader?limit=1000&name=[path][name].[ext]&publicPath=../',
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
    new HtmlWebpackPlugin({
      title: 'Leo Wong',
      template: './index.ejs',
      inject: 'body',
      hash: true,
      favicon: './favicon.ico',
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      publicPath: './',
      disable: false,
      allChunks: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = common;
