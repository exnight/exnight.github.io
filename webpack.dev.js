const dev = {
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
