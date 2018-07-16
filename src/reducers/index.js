/* @flow */

import { combineReducers } from 'redux';
import user from 'reducers/user';
import ui from 'reducers/ui';

const reducers = {
  user,
  ui,
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
