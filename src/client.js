import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { loadableReady } from '@loadable/component';
import configureStore from 'utils/configureStore';
import App from 'components/App';
import { isDevelopment } from 'config/env';

// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const root = document.getElementById('root');

loadableReady().then(() => {
  if (root) {
    ReactDOM.hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </Provider>,
      root
    );
  }
});

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator && navigator.serviceWorker) {
    if (!isDevelopment) {
      navigator.serviceWorker
        .register('/static/javascripts/sw.js', { scope: '/' })
        .then(() => {
          // SW registered
        })
        .catch(() => {
          // SW registration failed
        });
    } else {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
        });
      });
      caches.keys().then((keys) => {
        const promises = [];

        keys.forEach((cacheName) => {
          if (cacheName) {
            promises.push(caches.delete(cacheName));
          }
        });
      });
    }
  }
});
