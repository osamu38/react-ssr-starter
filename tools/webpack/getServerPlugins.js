import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { env } from 'config/env';
import { joinPath } from 'utils/path';

export default function getPlugins(isAnalyze) {
  return [
    new webpack.IgnorePlugin(/webpack\.client\.babel/),
    new webpack.EnvironmentPlugin({ NODE_ENV: `${env}` }),
    new CleanWebpackPlugin([joinPath('dist/server.js')], {
      root: joinPath(),
    }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    ...(isAnalyze ? [new BundleAnalyzerPlugin({ analyzerPort: 8889 })] : []),
  ];
}
