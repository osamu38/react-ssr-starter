/* @flow */
/* eslint-disable no-console */

import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import favicon from 'serve-favicon';
import jwt from 'jsonwebtoken';
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
import loginFromServer from 'utils/loginFromServer';
import getHtmlString from 'utils/getHtmlString';
import getPreloadResorceElement from 'utils/getPreloadResorceElement';
import cookie from 'utils/cookie';
import App from 'components/App';
import { isDevelopment } from 'config/env';
import { joinPath } from 'utils/path';
import { port as defaultPort } from 'config/url';
import type { $Request, $Response } from 'express';

const port = process.env.PORT || defaultPort;
const app = express();

function getDocument(initialState, content, scriptElements, head) {
  const sheet = new ServerStyleSheet();
  const css = sheet.getStyleElement();
  const styleTags = sheet.getStyleTags();
  const preloadResorceElement = getPreloadResorceElement(content, styleTags);
  const htmlString = getHtmlString(
    css,
    head,
    content,
    initialState,
    scriptElements,
    preloadResorceElement
  );

  return `<!doctype html>${htmlString}`;
}
function getLoadBranchData(branch, store): Promise<any>[] {
  return branch
    .filter(({ route }) => route.component.loadData)
    .map(({ route, match }) =>
      route.component.loadData(store.dispatch, store.getState(), match.params)
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
      ...component && {
        component: component.default
      },
    },
  }));
}
function getRedirectUrls(branch, store): string[] {
  return branch
    .filter(({ route }) => route.component.getRedirectUrl)
    .map(({ route, match }) =>
      route.component.getRedirectUrl(
        store.getState(),
        branch[branch.length - 1].route,
        match.params
      )
    )
    .filter(location => location);
}
function getExtractor() {
  if (isDevelopment) {
    return null;
  }
  const statsFile = joinPath('dist/public/static/javascripts/loadable-stats.json');
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
    setHeaders: res => {
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
    })
  );
  app.use(
    webpackHotMiddleware(compiler, {
      log: false,
    })
  );
}
// dummy login api
app.post('/api/login', (req: $Request, res: $Response) => {
  const dummy = {
    id: 1,
    email: 'dummy@dummy.com',
    password: 'dummy',
  };
  const secret = 'secret';
  const { email, password } = req.body;
  const isVerified = email === dummy.email && password === dummy.password;

  if (isVerified) {
    delete dummy.password;

    const token = jwt.sign(dummy, secret);

    res.send({ token });
  } else {
    res.status(400).send({ error: 'User Not Found' });
  }
});

app.get('*', async (req: $Request, res: $Response) => {
  cookie.connect(req, res);

  const store = configureStore();

  // $FlowFixMe
  loginFromServer(store.dispatch);

  const branch = matchRoutes(routes, req.url);
  const loadedComponents = await loadComponents(branch);
  const branchWithLoadedComponents = getBranchWithLoadedComponents(branch, loadedComponents);
  const loadBranchData = getLoadBranchData(branchWithLoadedComponents, store);

  Promise.all(loadBranchData)
    .then(async () => {
      const redirectUrls = getRedirectUrls(branch, store);

      if (redirectUrls.length) {
        res.redirect(redirectUrls[0]);
      } else {
        const helmetContext = {};
        const initialState = store.getState();
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
        const jsx = extractor ? extractor.collectChunks(AppComponent) : AppComponent;
        const content = renderToString(jsx);
        const { helmet: head } = helmetContext;
        const scriptElements = extractor && extractor.getScriptElements();
        const document = getDocument(initialState, content, scriptElements, head);

        res.status(200).send(document);
      }
    })
    .catch(err => {
      console.error(`==> 😭 Rendering routes error: ${err}`); // eslint-disable-line no-console
    });
});

app.listen(port, err => {
  if (err) {
    console.error(err);
  }
  console.info('==> 🌎 Listening on port %s.', port);
});

process.on('unhandledRejection', err => {
  console.error(err);
});
process.on('uncaughtException', err => {
  console.error(err);
});
