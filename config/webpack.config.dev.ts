import * as path from 'path';
import { Configuration as Config, HotModuleReplacementPlugin } from 'webpack';
import { Configuration as DevServerConfig } from 'webpack-dev-server';

interface Configuration extends Config {
  devServer?: DevServerConfig;
}

const dev: Configuration = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [new HotModuleReplacementPlugin()],
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    compress: true,
    historyApiFallback: true,
    open: true,
    port: 8080,
  },
};

export default dev;
