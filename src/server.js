/* eslint-disable no-console */

import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import favicon from 'serve-favicon';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { ChunkExtractor } from '@loadable/server';
import { ServerStyleSheet } from 'styled-components';
import routes from 'routes';
import configureStore from 'utils/configureStore';
import getHtmlString from 'utils/getHtmlString';
import getPreloadResorceElement from 'utils/getPreloadResorceElement';
import App from 'components/App';
import { isDevelopment } from 'config/env';
import { joinPath } from 'utils/path';
import { port as defaultPort } from 'config/url';

const port = process.env.PORT || defaultPort;
const app = express();

function getLoadBranchData(branch, store, query) {
  return branch
    .filter(({ route }) => route.component.loadData)
    .map(({ route, match }) =>
      route.component.loadData({
        dispatch: store.dispatch,
        state: store.getState(),
        params: match.params,
        query,
        route,
      })
    );
}
function loadComponents(branch) {
  return Promise.all(
    branch.map(({ route }) => {
      if (route.component.load) {
        return route.component.load();
      }
      return Promise.resolve();
    })
  );
}
function getBranchWithLoadedComponents(branch, loadedComponents) {
  return loadedComponents.map((component, index) => ({
    ...branch[index],
    route: {
      ...branch[index].route,
      ...(component && {
        component: component.default,
      }),
    },
  }));
}
function getRedirectUrls(branch, store, query) {
  return branch
    .filter(({ route }) => route.component.getRedirectUrl)
    .map(({ route, match }) =>
      route.component.getRedirectUrl({
        dispatch: store.dispatch,
        state: store.getState(),
        params: match.params,
        query,
        route,
      })
    )
    .filter((location) => location);
}
function getExtractor() {
  const statsFile = joinPath(
    !isDevelopment ? 'dist' : '',
    'public/static/javascripts/loadable-stats.json'
  );
  const extractor = new ChunkExtractor({ statsFile });

  return extractor;
}

app.use(helmet());
app.use(hpp());
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  express.static(joinPath(!isDevelopment ? 'dist' : '', 'public'), {
    setHeaders: (res) => {
      res.set('Service-Worker-Allowed', '/');
    },
  })
);
app.use(favicon(joinPath(!isDevelopment ? 'dist' : '', 'public/favicon.ico')));

if (isDevelopment) {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const getWebpackClientConfig = require('tools/webpack/webpack.client.babel');
  const webpackClientConfig = getWebpackClientConfig({});
  const compiler = webpack(webpackClientConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackClientConfig.output.publicPath,
      hot: true,
      stats: 'none',
      serverSideRender: true,
      writeToDisk(filePath) {
        return /loadable-stats/.test(filePath);
      },
    })
  );
  app.use(
    webpackHotMiddleware(compiler, {
      log: false,
    })
  );
}

app.get('*', async (req, res) => {
  const store = configureStore();
  const branch = matchRoutes(routes, req.path);
  const loadedComponents = await loadComponents(branch);
  const branchWithLoadedComponents = getBranchWithLoadedComponents(
    branch,
    loadedComponents
  );
  const loadBranchData = getLoadBranchData(
    branchWithLoadedComponents,
    store,
    req.query
  );

  Promise.all(loadBranchData)
    .then(async () => {
      const redirectUrls = getRedirectUrls(
        branchWithLoadedComponents,
        store,
        req.query
      );

      if (redirectUrls.length) {
        res.redirect(redirectUrls[0]);
      } else {
        const helmetContext = {};
        const initialState = store.getState();
        const sheet = new ServerStyleSheet();
        const AppComponent = (
          <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
              <HelmetProvider context={helmetContext}>
                <App />
              </HelmetProvider>
            </StaticRouter>
          </Provider>
        );
        const extractor = getExtractor();
        const jsx = extractor.collectChunks(AppComponent);
        const content = renderToString(sheet.collectStyles(jsx));
        const css = sheet.getStyleElement();
        const styleTags = sheet.getStyleTags();
        const { helmet: head } = helmetContext;
        const scriptElements = extractor.getScriptElements();
        const preloadResorceElement = getPreloadResorceElement(
          content,
          styleTags
        );
        const htmlString = getHtmlString(
          css,
          head,
          content,
          initialState,
          scriptElements,
          preloadResorceElement
        );
        const document = `<!doctype html>${htmlString}`;

        res.status(200).send(document);
      }
    })
    .catch((err) => {
      console.error(`==> 😭 Rendering routes error: ${err}`); // eslint-disable-line no-console
    });
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.info('==> 🌎 Listening on port %s.', port);
});

process.on('unhandledRejection', (err) => {
  console.error(err);
});
process.on('uncaughtException', (err) => {
  console.error(err);
});
