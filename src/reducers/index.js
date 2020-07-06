import { combineReducers } from 'redux';
import user from 'reducers/user';
import ui from 'reducers/ui';

const reducers = {
  user,
  ui,
};

export default combineReducers(reducers);
