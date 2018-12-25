/* @flow */

import { combineReducers } from 'redux';
import { nprogress } from 'redux-nprogress';
import user from 'reducers/user';
import ui from 'reducers/ui';
import type { Action } from 'types';

const reducers = {
  nprogress,
  user,
  ui,
};

export type Reducers = typeof reducers;
export default combineReducers<Reducers, Action>(reducers);
