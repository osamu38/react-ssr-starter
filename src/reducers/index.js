/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import user from 'reducers/user';
import ui from 'reducers/ui';

const reducers = {
  user,
  ui,
  router,
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
