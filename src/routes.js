/* @flow */

import url from 'config/url';
import Auth from 'components/Auth';
import Landing from 'pages/Landing';
import Home from 'pages/Home';
import UserDetail from 'pages/UserDetail';
import About from 'pages/About';
import RedirectAbout from 'pages/RedirectAbout';
import NotFound from 'pages/NotFound';

function addExact(routes): Array<Object> {
  return routes.map(
    route =>
      route.path !== url.endpoint.notFound
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
        path: url.endpoint.landing,
        isLoggedIn: false,
        component: Landing,
      },
      {
        path: url.endpoint.home,
        isLoggedIn: true,
        component: Home,
      },
      {
        path: url.endpoint.userDetail,
        isLoggedIn: true,
        component: UserDetail,
      },
      {
        path: url.endpoint.about,
        component: About,
      },
      {
        path: url.endpoint.redirectAbout,
        component: RedirectAbout,
      },
      {
        path: url.endpoint.notFound,
        component: NotFound,
      },
    ]),
  },
];
