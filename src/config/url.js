/* @flow */

import { isDevelopment } from 'config/env';

export const port = 2525;
export const origin = isDevelopment
  ? `http://localhost:${port}`
  : process.env.HEROKU_DOMAIN || `http://localhost:${port}`;
export const endpoint = {
  landing: '/',
  home: '/home',
  userDetail: '/users/:id',
  about: '/about',
  redirectAbout: '/redirect-about',
  notFound: '*',
};
