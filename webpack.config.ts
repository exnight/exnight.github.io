import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import common from './config/webpack.config.common';
import dev from './config/webpack.config.dev';

export default merge<Configuration>(common, dev);
