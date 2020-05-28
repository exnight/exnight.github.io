const webpack = require('webpack');
const path = require('path');

const dev = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    compress: true,
    historyApiFallback: true,
    open: true,
    port: 8080,
  },
  mode: 'development',
};

module.exports = dev;
