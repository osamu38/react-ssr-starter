import StringReplacePlugin from 'string-replace-webpack-plugin';
import { isDevelopment } from 'config/env';
import { joinPath } from 'utils/path';

export default function getModule() {
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
      ...(!isDevelopment
        ? [
            {
              test: /src\/routes\.js$/,
              loader: StringReplacePlugin.replace({
                replacements: [
                  {
                    pattern: /import/,
                    replacement() {
                      return `import loadable from 'loadable-components';import`;
                    },
                  },
                  {
                    pattern: /import (.*?) from 'pages\/(.*?)';/g,
                    replacement(match, p1, p2) {
                      return `const ${p1} = loadable(() => import(/* webpackPrefetch: true */ 'pages/${p2}'));`;
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
