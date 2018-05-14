/* @flow */

import { isDevelopment } from 'servers/env';

export default {
  port: 2525,
  host: isDevelopment ? 'http://localhost:2525' : 'http://localhost:2525',
  endpoint: {
    landing: '/',
    home: '/home',
    userDetail: '/users/:id',
    about: '/about',
    redirectAbout: '/redirect-about',
    notFound: '*',
  },
};
