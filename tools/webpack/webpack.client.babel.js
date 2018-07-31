import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import StringReplacePlugin from 'string-replace-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import UglifyJsWebpackPlugin from 'uglifyjs-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import workboxPlugin from 'workbox-webpack-plugin';
import { env, isDevelopment, isProduction } from 'servers/env';
import { joinPath } from 'servers/path';

function getPlugins(isAnalyze) {
  let plugins = [
    new webpack.EnvironmentPlugin({ NODE_ENV: `${env}` }),
    new webpack.NoEmitOnErrorsPlugin(),
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
        new webpack.IgnorePlugin(/react-hot-loader/),
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
    plugins = [
      ...plugins,
      ...[new BundleAnalyzerPlugin({ analyzerPort: 8888 })],
    ];
  }
  return plugins;
}

function getModule() {
  return {
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
      ...(isProduction
        ? [
            {
              test: /src\/routes\.js$/,
              loader: StringReplacePlugin.replace({
                replacements: [
                  {
                    pattern: /\/\* @flow \*\//g,
                    replacement(match) {
                      return `
                        ${match}
                        import loadable from 'loadable-components';
                      `;
                    },
                  },
                  {
                    pattern: /import (.*?) from 'pages\/(.*?)';/g,
                    replacement(match, p1, p2) {
                      return `const ${p1} = loadable(() => import('pages/${p2}'));`;
                    },
                  },
                ],
              }),
            },
          ]
        : []),
    ],
  };
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
      path: joinPath(isProduction ? 'dist' : '', 'public/static/javascripts'),
      filename: `[name]${!isDevelopment ? '.min' : ''}.js`,
      publicPath: '/static/javascripts/',
    },
    plugins: getPlugins(isAnalyze),
    optimization: {
      splitChunks: {
        name: 'vendor',
        chunks: 'initial',
      },
      minimizer: [
        new UglifyJsWebpackPlugin({
          uglifyOptions: {
            compress: {
              reduce_vars: false,
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
