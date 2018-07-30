/* @flow */

import loadable from 'loadable-components';
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

export default [
  {
    path: '/',
    component: Auth,
    routes: addExact([
      {
        path: endpoint.landing,
        isLoggedIn: false,
        component: loadable(() => import('pages/Landing')),
      },
      {
        path: endpoint.home,
        isLoggedIn: true,
        component: loadable(() => import('pages/Home')),
      },
      {
        path: endpoint.userDetail,
        isLoggedIn: true,
        component: loadable(() => import('pages/UserDetail')),
      },
      {
        path: endpoint.about,
        component: loadable(() => import('pages/About')),
      },
      {
        path: endpoint.redirectAbout,
        component: loadable(() => import('pages/RedirectAbout')),
      },
      {
        path: endpoint.notFound,
        component: loadable(() => import('pages/NotFound')),
      },
    ]),
  },
];
