/* @flow */

import type { Action } from 'types';

type State = {
  user: Object,
  userList: Array<Object>,
  status: {
    isLoggedIn: boolean,
    isFetchedUserList: boolean,
  },
};

export const initialState = {
  user: {},
  userList: [],
  status: {
    isLoggedIn: false,
    isFetchedUserList: false,
  },
};
export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return {
        ...state,
        status: {
          ...state.status,
          isLoggedIn: true,
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        status: {
          ...state.status,
          isLoggedIn: false,
        },
      };
    case 'FETCH_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'FETCH_USERS':
      return {
        ...state,
        userList: action.payload,
        status: {
          ...state.status,
          isFetchedUserList: true,
        },
      };
    default:
      return state;
  }
};
