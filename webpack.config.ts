import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import common from './config/webpack.config.common';
import dev from './config/webpack.config.dev';
import prod from './config/webpack.config.prod';

const config: Configuration =
  process.env.NODE_ENV === 'production' ? prod : dev;

export default merge<Configuration>(common, config);
