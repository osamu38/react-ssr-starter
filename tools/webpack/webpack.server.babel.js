import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { env, isDevelopment, isProduction } from 'servers/env';
import { joinPath } from 'servers/path';

function getPlugins(isAnalyze) {
  let plugins = [
    new webpack.IgnorePlugin(/webpack\.client\.babel/),
    new webpack.EnvironmentPlugin({ NODE_ENV: `${env}` }),
    new CleanWebpackPlugin([joinPath('dist/server.js')], {
      root: joinPath(),
    }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
  ];

  if (isAnalyze) {
    plugins = [...plugins, ...[new BundleAnalyzerPlugin()]];
  }
  return plugins;
}

function getResolve() {
  return {
    extensions: ['.js', '.json'],
    ...(isProduction
      ? {
          alias: {
            react: 'preact-compat',
            'react-dom': 'preact-compat',
          },
        }
      : {}),
  };
}

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
    plugins: getPlugins(isAnalyze),
    module: {
      rules: [
        {
          test: /\.js$/,
          include: joinPath('src'),
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.json$/,
          include: joinPath('src'),
          exclude: /node_modules/,
          use: {
            loader: 'json-loader',
          },
        },
      ],
    },
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
