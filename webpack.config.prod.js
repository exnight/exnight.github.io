const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.config.common');

const prod = {
  output: {
    filename: './js/[name].[chunkhash:6].js',
  },
  plugins: [
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
      sourceMap: false,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};

module.exports = merge.smart(common, prod);
