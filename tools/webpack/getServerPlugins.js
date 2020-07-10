import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import LoadablePlugin from '@loadable/webpack-plugin';
import { env } from 'config/env';
import { joinPath } from 'utils/path';

const getPlugins = (isAnalyze) => {
  return [
    new webpack.IgnorePlugin(/webpack\.client\.babel/),
    new webpack.EnvironmentPlugin({ NODE_ENV: `${env}` }),
    new CleanWebpackPlugin([joinPath('dist/server.js')], {
      root: joinPath(),
    }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    new LoadablePlugin(),
    ...(isAnalyze ? [new BundleAnalyzerPlugin({ analyzerPort: 8889 })] : []),
  ];
};

export default getPlugins;
