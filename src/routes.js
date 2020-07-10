import loadable from '@loadable/component';
import { endpoint } from 'config/url';

const Home = loadable(() => import(/* webpackPrefetch: true */ 'pages/home'));
const UserDetail = loadable(() =>
  import(/* webpackPrefetch: true */ 'pages/userDetail')
);
const About = loadable(() => import(/* webpackPrefetch: true */ 'pages/about'));
const RedirectAbout = loadable(() =>
  import(/* webpackPrefetch: true */ 'pages/redirectAbout')
);
const NotFound = loadable(() =>
  import(/* webpackPrefetch: true */ 'pages/notFound')
);

const addExact = (routes) => {
  return routes.map((route) =>
    route.path !== endpoint.notFound
      ? {
          ...route,
          exact: true,
        }
      : route
  );
};

export default addExact([
  {
    path: endpoint.home,
    component: Home,
  },
  {
    path: endpoint.userDetail,
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
]);
