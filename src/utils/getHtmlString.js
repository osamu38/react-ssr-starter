/* @flow */

import * as React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { minify } from 'html-minifier';
import type { ReduxState } from 'types';

export default function getHtmlString(
  css: React.Node,
  head: Object,
  content: string,
  initialState: ReduxState,
  scriptElements: React.Node,
  preloadResorceElement: React.Node
): string {
  const Html = (
    <html lang="ja">
      <head>
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {preloadResorceElement}
        {css}
      </head>
      <body>
        <div
          id="root"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__INITIAL_STATE__ = ${serialize(initialState)}`,
          }}
        />
        {scriptElements}
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
