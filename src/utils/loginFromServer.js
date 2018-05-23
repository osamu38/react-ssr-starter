/* @flow */

import cookie from 'utils/cookie';
import { loggedIn } from 'actions/user';
import type { Dispatch } from 'types';

export default function loginFromServer(dispatch: Dispatch) {
  const token = cookie.getToken();

  if (token) {
    dispatch(loggedIn());
  }
}
