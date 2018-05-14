/* @flow */

import cookie from 'utils/cookie';
import { loggedIn } from 'actions/user';
import type { $Request, $Response } from 'express';
import type { Dispatch } from 'types';

export default function loginFromServer(
  req: $Request,
  res: $Response,
  dispatch: Dispatch
) {
  cookie.connect(req, res);
  const token = cookie.getToken();

  if (token) {
    dispatch(loggedIn());
  }
}
