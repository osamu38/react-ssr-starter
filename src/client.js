/* @flow */
/* eslint-disable no-underscore-dangle */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { loadComponents } from 'loadable-components';
import { ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import configureStore from 'utils/configureStore';
import App from 'components/App';
import { isProduction } from 'servers/env';

const history = createHistory();
const configureStoreArgs = [history];
if (isProduction) {
  configureStoreArgs.push(window.__INITIAL_STATE__);
}
const store = configureStore(...configureStoreArgs);
const root: ?Element = document.getElementById('root');

loadComponents().then(() => {
  if (root) {
    ReactDOM[isProduction ? 'hydrate' : 'render'](
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>,
      root
    );
  }
});

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator && navigator.serviceWorker) {
    if (isProduction) {
      navigator.serviceWorker
        .register('/static/javascripts/sw.js', { scope: '/' })
        .then(() => {
          // SW registered
        })
        .catch(() => {
          // SW registration failed
        });
    } else {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => {
          registration.unregister();
        });
      });
      caches.keys().then(keys => {
        const promises = [];

        keys.forEach(cacheName => {
          if (cacheName) {
            promises.push(caches.delete(cacheName));
          }
        });
      });
    }
  }
});
