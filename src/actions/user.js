/* @flow */

import axios from 'axios';
import cookie from 'utils/cookie';
import { origin } from 'config/url';
import { showError } from 'actions/ui';
import type { Dispatch } from 'types';

export function loggedIn() {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'LOGGED_IN' });
  };
}
export function logout() {
  return (dispatch: Dispatch) => {
    cookie.deleteToken();
    dispatch({ type: 'LOGOUT' });
  };
}
export function login(email: string, password: string) {
  return (dispatch: Dispatch) => {
    axios
      .post(`${origin}/api/login`, {
        email,
        password,
      })
      .then(res => {
        const { token } = res.data;

        cookie.setToken(token);
        dispatch(loggedIn());
      })
      .catch(err => {
        const { error } = err.response.data;

        dispatch(showError(error));
      });
  };
}
export function fetchUser(id: string) {
  return (dispatch: Dispatch) =>
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        dispatch({
          type: 'FETCH_USER',
          payload: res.data,
        });
      })
      .catch(err => {
        console.error(err); // eslint-disable-line no-console
      });
}
export function fetchUsers() {
  return (dispatch: Dispatch) =>
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        dispatch({
          type: 'FETCH_USERS',
          payload: res.data,
        });
      })
      .catch(err => {
        console.error(err); // eslint-disable-line no-console
      });
}
