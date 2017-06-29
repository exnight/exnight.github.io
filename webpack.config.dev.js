const webpack = require('webpack');

const dev = {
  output: {
    filename: './js/[name].[hash:6].js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: '/',
    compress: true,
    historyApiFallback: true,
    open: true,
    port: 8080,
  },
};

module.exports = dev;
