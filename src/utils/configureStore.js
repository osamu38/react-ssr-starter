/* @flow */

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from 'reducers';
import { isDevelopment, isClient } from 'servers/env';
import type { BrowserHistory } from 'history/createBrowserHistory';
import type { MemoryHistory } from 'history/createMemoryHistory';
import type { Store } from 'types';

export default (
  history: BrowserHistory | MemoryHistory,
  initialState: Object = {}
): Store => {
  const middlewares = applyMiddleware(
    ...[
      thunkMiddleware,
      routerMiddleware(history),
      ...(isDevelopment && isClient ? [require('redux-logger').default] : []),
    ]
  );
  const store = createStore(rootReducer, initialState, middlewares);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};
