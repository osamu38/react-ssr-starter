import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { minify } from 'html-minifier';
import { isDevelopment } from 'config/env';

export default function getHtmlString(
  css,
  head,
  content,
  initialState,
  scriptElements,
  preloadResorceElement
) {
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
