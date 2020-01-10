/* @flow */

import axios from 'axios';
import type { Dispatch, ThunkAction } from 'types';

export function fetchUser(id: string): ThunkAction {
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
export function fetchUsers(): ThunkAction {
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
