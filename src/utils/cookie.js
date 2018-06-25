/* @flow */

import cookie from 'react-cookie';
import type { $Request, $Response } from 'express';

class Cookie {
  cookie: Object;

  tokenKey: string;

  options: {
    path: string,
    maxAge: number,
  };

  constructor() {
    this.cookie = cookie;
    this.tokenKey = '__token__';
    this.options = {
      path: '/',
      maxAge: 60 * 60 * 24 * 180,
    };
  }

  connect(req: $Request, res: $Response) {
    this.cookie.plugToRequest(req, res);
  }

  setToken(token: string) {
    this.cookie.save(this.tokenKey, token, this.options);
  }

  getToken(): string {
    return this.cookie.load(this.tokenKey);
  }

  deleteToken() {
    this.cookie.remove(this.tokenKey, this.options);
  }
}

export default new Cookie();
