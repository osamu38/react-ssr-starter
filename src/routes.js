/* @flow */

import loadable from '@loadable/component';
import { endpoint } from 'config/url';
import Auth from 'components/Auth';

const Landing = loadable(() =>
  import(/* webpackPrefetch: true */ 'pages/Landing')
);
const Home = loadable(() => import(/* webpackPrefetch: true */ 'pages/Home'));
const UserDetail = loadable(() =>
  import(/* webpackPrefetch: true */ 'pages/UserDetail')
);
const About = loadable(() => import(/* webpackPrefetch: true */ 'pages/About'));
const RedirectAbout = loadable(() =>
  import(/* webpackPrefetch: true */ 'pages/RedirectAbout')
);
const NotFound = loadable(() =>
  import(/* webpackPrefetch: true */ 'pages/NotFound')
);

type Route = {
  path: string,
  isLoggedIn?: boolean,
  component: any,
  exact?: boolean,
};

function addExact(routes: Route[]): Route[] {
  return routes.map(route =>
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
