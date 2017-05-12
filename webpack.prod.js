const webpack = require('webpack');

const prod = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        unsafe: true,
        unsafe_comps: true,
      },
      comments: false,
      unused: true,
      dead_code: true,
      exclude: [/\.min\.js$/gi],
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};

module.exports = prod;
