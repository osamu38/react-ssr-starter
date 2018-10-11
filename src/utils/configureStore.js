/* @flow */

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers';
import { nprogressMiddleware } from 'redux-nprogress';
import { isDevelopment, isClient } from 'config/env';
import type { Store, ReduxState } from 'types';

export default function configureStore(initialState?: ReduxState): Store {
  const middlewares = applyMiddleware(
    ...[
      thunkMiddleware,
      nprogressMiddleware(),
      ...(isDevelopment && isClient ? [require('redux-logger').default] : []),
    ]
  );
  const store = createStore(rootReducer, initialState, middlewares);

  return store;
}
