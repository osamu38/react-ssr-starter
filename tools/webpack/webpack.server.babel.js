import nodeExternals from 'webpack-node-externals';
import { env, isDevelopment } from 'servers/env';
import { joinPath } from 'servers/path';
import getModule from 'tools/webpack/getModule';
import getResolve from 'tools/webpack/getResolve';
import getServerPlugins from 'tools/webpack/getServerPlugins';

export default webpackEnv => {
  const isAnalyze = webpackEnv.analyze;

  return {
    mode: env,
    name: 'server',
    target: 'node',
    devtool: isDevelopment
      ? 'cheap-module-eval-source-map'
      : 'hidden-source-map',
    entry: ['@babel/polyfill', './src/server.js'],
    output: {
      path: joinPath('dist'),
      filename: 'server.js',
    },
    plugins: getServerPlugins(isAnalyze),
    module: getModule(),
    resolve: getResolve(),
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: true,
      __dirname: true,
    },
    externals: [
      nodeExternals({
        whitelist: [/\.(?!(?:json)$).{1,5}$/i],
      }),
    ],
  };
};
