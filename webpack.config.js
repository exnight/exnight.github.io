// const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common');
const dev = require('./webpack.dev');
const prod = require('./webpack.prod');

module.exports = () => {
  if (process.env.NODE_ENV !== 'production') {
    return merge.smart(common, dev);
  }
  return merge.smart(common, prod);
};
