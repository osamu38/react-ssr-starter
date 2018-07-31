/* @flow */

import { endpoint } from 'config/url';
import Auth from 'components/Auth';
import Landing from 'pages/Landing';
import Home from 'pages/Home';
import UserDetail from 'pages/UserDetail';
import About from 'pages/About';
import RedirectAbout from 'pages/RedirectAbout';
import NotFound from 'pages/NotFound';

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
        component: Landing,
      },
      {
        path: endpoint.home,
        isLoggedIn: true,
        component: Home,
      },
      {
        path: endpoint.userDetail,
        isLoggedIn: true,
        component: UserDetail,
      },
      {
        path: endpoint.about,
        component: About,
      },
      {
        path: endpoint.redirectAbout,
        component: RedirectAbout,
      },
      {
        path: endpoint.notFound,
        component: NotFound,
      },
    ]),
  },
];
