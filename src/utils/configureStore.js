import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers';
import { isDevelopment, isClient } from 'config/env';

const configureStore = (initialState) => {
  const middlewares = applyMiddleware(
    ...[
      thunkMiddleware,
      ...(isDevelopment && isClient ? [require('redux-logger').default] : []),
    ]
  );
  const store = createStore(rootReducer, initialState, middlewares);

  return store;
};

export default configureStore;
