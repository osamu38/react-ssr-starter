import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ManifestPlugin from 'webpack-manifest-plugin';
import workboxPlugin from 'workbox-webpack-plugin';
import { env, isDevelopment } from 'config/env';
import { joinPath } from 'utils/path';

export default function getPlugins(isAnalyze) {
  return [
    new webpack.EnvironmentPlugin({
      NODE_ENV: `${env}`,
      ...(process.env.HEROKU_DOMAIN
        ? { HEROKU_DOMAIN: process.env.HEROKU_DOMAIN }
        : {}),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    ...(isDevelopment
      ? [
          new webpack.NamedModulesPlugin(),
          new webpack.HotModuleReplacementPlugin(),
          new FriendlyErrorsWebpackPlugin(),
        ]
      : [
          new CleanWebpackPlugin([joinPath('dist')], {
            root: joinPath(),
            exclude: ['server.js'],
          }),
          new CopyWebpackPlugin([
            {
              from: './public',
              to: joinPath('dist/public'),
              ignore: ['.DS_Store'],
            },
          ]),
          new webpack.IgnorePlugin(/redux-logger/),
          new webpack.IgnorePlugin(/react-hot-loader/),
          new workboxPlugin.GenerateSW({
            swDest: joinPath('dist/public/static/javascripts/sw.js'),
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [
              {
                urlPattern: new RegExp(
                  '^https://jsonplaceholder.typicode.com/'
                ),
                handler: 'StaleWhileRevalidate',
              },
            ],
          }),
          new ManifestPlugin(),
        ]),
    ...(isAnalyze ? [new BundleAnalyzerPlugin({ analyzerPort: 8888 })] : []),
  ];
}
