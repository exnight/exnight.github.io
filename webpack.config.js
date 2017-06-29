const merge = require('webpack-merge');

const common = require('./webpack.config.common');
const dev = require('./webpack.config.dev');

module.exports = merge.smart(common, dev);
