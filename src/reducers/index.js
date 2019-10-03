/* @flow */

import { combineReducers } from 'redux';
import user from 'reducers/user';
import ui from 'reducers/ui';
import type { Action } from 'types';

const reducers = {
  user,
  ui,
};

export type Reducers = typeof reducers;
export default combineReducers<Reducers, Action>(reducers);
