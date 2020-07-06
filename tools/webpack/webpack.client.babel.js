import TerserPlugin from 'terser-webpack-plugin';
import { env, isDevelopment } from 'config/env';
import { joinPath } from 'utils/path';
import getModule from 'tools/webpack/getModule';
import getResolve from 'tools/webpack/getResolve';
import getClientPlugins from 'tools/webpack/getClientPlugins';

export default (webpackEnv) => {
  const isAnalyze = webpackEnv.analyze;

  return {
    mode: env,
    name: 'client',
    target: 'web',
    cache: isDevelopment,
    devtool: isDevelopment
      ? 'cheap-module-eval-source-map'
      : 'hidden-source-map',
    entry: [
      ...(isDevelopment
        ? [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client?reload=true&quiet=true',
          ]
        : []),
      './src/client.js',
    ],
    output: {
      path: joinPath(!isDevelopment ? 'dist' : '', 'public/static/javascripts'),
      filename: `[name]${!isDevelopment ? '.[hash]' : ''}.js`,
      publicPath: '/static/javascripts/',
    },
    plugins: getClientPlugins(isAnalyze),
    optimization: {
      splitChunks: {
        name: 'vendors',
        chunks: 'initial',
      },
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: 6,
            compress: true,
            output: {
              comments: false,
              beautify: false,
            },
          },
        }),
      ],
    },
    module: getModule(),
    resolve: getResolve(),
    node: {
      fs: 'empty',
      vm: 'empty',
      net: 'empty',
      tls: 'empty',
    },
  };
};
