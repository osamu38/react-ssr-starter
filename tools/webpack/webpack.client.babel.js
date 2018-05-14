import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import workboxPlugin from 'workbox-webpack-plugin';
import { env, isDevelopment, isProduction } from 'servers/env';
import { joinPath } from 'servers/path';

const vendor = [
  'axios',
  'history/createBrowserHistory',
  'loadable-components',
  'react',
  'react-cookie',
  'react-dom',
  'react-helmet',
  'react-hot-loader',
  'react-redux',
  'react-router-config',
  'react-router-dom',
  'react-router-redux',
  'redux',
  'redux-thunk',
  'styled-components',
];

function getPlugins(isAnalyze) {
  let plugins = [
    new webpack.EnvironmentPlugin({ NODE_ENV: `${env}` }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
  ];

  if (isDevelopment) {
    plugins = [
      ...plugins,
      ...[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin(),
      ],
    ];
  } else {
    plugins = [
      ...plugins,
      ...[
        new CleanWebpackPlugin([joinPath('dist')], {
          root: joinPath(),
          exclude: ['server.js'],
        }),
        new CopyWebpackPlugin([
          {
            from: './public',
            to: joinPath('dist/public'),
          },
        ]),
        new webpack.IgnorePlugin(/redux-logger/),
        new webpack.optimize.UglifyJsPlugin({
          compressor: {
            warnings: false,
            screw_ie8: true,
          },
        }),
        new workboxPlugin.GenerateSW({
          swDest: joinPath('dist/public/static/javascripts/sw.js'),
          clientsClaim: true,
          skipWaiting: true,
          runtimeCaching: [
            {
              urlPattern: new RegExp('^https://jsonplaceholder.typicode.com/'),
              handler: 'staleWhileRevalidate',
            },
          ],
        }),
      ],
    ];
  }
  if (isAnalyze) {
    plugins = [...plugins, ...[new BundleAnalyzerPlugin()]];
  }
  return plugins;
}

export default webpackEnv => {
  const isAnalyze = webpackEnv.analyze;

  return {
    name: 'client',
    target: 'web',
    cache: isDevelopment,
    devtool: isDevelopment
      ? 'cheap-module-eval-source-map'
      : 'hidden-source-map',
    entry: {
      main: [
        ...(isDevelopment
          ? [
              'react-hot-loader/patch',
              'webpack-hot-middleware/client?reload=true&quiet=true',
            ]
          : []),
        './src/client.js',
      ],
      vendor,
    },
    output: {
      path: joinPath(isProduction ? 'dist' : '', 'public/static/javascripts'),
      filename: `[name]${!isDevelopment ? '.min' : ''}.js`,
      publicPath: '/static/javascripts/',
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
    resolve: {
      extensions: ['.js', '.json'],
    },
    node: {
      fs: 'empty',
      vm: 'empty',
      net: 'empty',
      tls: 'empty',
    },
  };
};
