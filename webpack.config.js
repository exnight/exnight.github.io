const merge = require('webpack-merge');

const common = require('./config/webpack.config.common');
const dev = require('./config/webpack.config.dev');

module.exports = merge.smart(common, dev);
