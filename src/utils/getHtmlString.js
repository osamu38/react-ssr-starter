/* @flow */

import * as React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { minify } from 'html-minifier';
import { isDevelopment } from 'config/env';
import type { ReduxState } from 'types';

export default function getHtmlString(
  css: React.Node,
  head: Object,
  content: string,
  initialState: ReduxState,
  loadableStateScript: React.Node,
  preloadResorceElement: React.Node
): string {
  const main = isDevelopment
    ? '/static/javascripts/main.js'
    : global.manifest['main.js'];
  const vendors = isDevelopment
    ? '/static/javascripts/vendors.js'
    : global.manifest['vendors.js'];
  const Html = (
    <html lang="ja">
      <head>
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {!isDevelopment ? preloadResorceElement : ''}
        {!isDevelopment ? css : ''}
      </head>
      <body>
        <div
          id="root"
          dangerouslySetInnerHTML={{ __html: !isDevelopment ? content : '' }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__INITIAL_STATE__ = ${serialize(initialState)}`,
          }}
        />
        {loadableStateScript}
        <script src={vendors} />
        <script src={main} />
      </body>
    </html>
  );
  const htmlString = renderToString(Html);
  const minifyConfig = {
    collapseWhitespace: true,
    removeComments: true,
    trimCustomFragments: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true,
  };

  return minify(htmlString, minifyConfig);
}
