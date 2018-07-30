/* @flow */

import loadable from 'loadable-components'; // eslint-disable-line no-unused-vars
import { endpoint } from 'config/url';
import Auth from 'components/Auth';

type Route = {
  path: string,
  isLoggedIn?: boolean,
  component: any,
  exact?: boolean,
};

function addExact(routes: Route[]): Route[] {
  return routes.map(
    route =>
      route.path !== endpoint.notFound
        ? {
            ...route,
            exact: true,
          }
        : route
  );
}

// Use 'require' instead of 'import'.
// Because it replaces the string 'require' at build time.

export default [
  {
    path: '/',
    component: Auth,
    routes: addExact([
      {
        path: endpoint.landing,
        isLoggedIn: false,
        component: require('pages/Landing'),
      },
      {
        path: endpoint.home,
        isLoggedIn: true,
        component: require('pages/Home'),
      },
      {
        path: endpoint.userDetail,
        isLoggedIn: true,
        component: require('pages/UserDetail'),
      },
      {
        path: endpoint.about,
        component: require('pages/About'),
      },
      {
        path: endpoint.redirectAbout,
        component: require('pages/RedirectAbout'),
      },
      {
        path: endpoint.notFound,
        component: require('pages/NotFound'),
      },
    ]),
  },
];
