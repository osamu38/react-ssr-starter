/* @flow */

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from 'reducers';
import { isDevelopment, isClient } from 'servers/env';
import type { BrowserHistory } from 'history/createBrowserHistory';
import type { MemoryHistory } from 'history/createMemoryHistory';
import type { Store, ReduxState } from 'types';

export default function configureStore(
  history: BrowserHistory | MemoryHistory,
  initialState?: ReduxState
): Store {
  const middlewares = applyMiddleware(
    ...[
      thunkMiddleware,
      routerMiddleware(history),
      ...(isDevelopment && isClient ? [require('redux-logger').default] : []),
    ]
  );
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    middlewares
  );

  return store;
}
