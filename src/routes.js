/* @flow */

import loadable from 'loadable-components';
import url from 'config/url';
import Auth from 'components/Auth';
import { fetchUser, fetchUsers } from 'actions/user';

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
        component: loadable(() => import('pages/Landing')),
      },
      {
        path: url.endpoint.home,
        isLoggedIn: true,
        component: loadable(() => import('pages/Home')),
        loadData: dispatch => dispatch(fetchUsers()),
      },
      {
        path: url.endpoint.userDetail,
        isLoggedIn: true,
        component: loadable(() => import('pages/UserDetail')),
        loadData: (dispatch, state, params) => dispatch(fetchUser(params.id)),
      },
      {
        path: url.endpoint.about,
        component: loadable(() => import('pages/About')),
      },
      {
        path: url.endpoint.redirectAbout,
        component: loadable(() => import('pages/RedirectAbout')),
        getRedirectUrl: () => url.endpoint.about,
      },
      {
        path: url.endpoint.notFound,
        component: loadable(() => import('pages/NotFound')),
      },
    ]),
  },
];
