/* @flow */

import type { UserState, UserAction } from 'types/user';

export const initialState = {
  user: {
    address: {
      city: '',
      geo: {
        lat: '',
        lng: '',
      },
      street: '',
      suite: '',
      zipcode: '',
    },
    company: {
      bs: '',
      catchPhrase: '',
      name: '',
    },
    email: '',
    id: 0,
    name: '',
    phone: '',
    username: '',
    website: '',
  },
  userList: [],
  status: {
    isLoggedIn: false,
    isFetchedUserList: false,
  },
};
export default (state: UserState = initialState, action: UserAction) => {
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
