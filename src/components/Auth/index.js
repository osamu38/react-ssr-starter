/* @flow */

import * as React from 'react';
import { Route as SwitchRoute, Switch } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { compose, lifecycle, setStatic, pure } from 'recompose';
import url from 'config/url';
import routes from 'routes';

type Props = {
  routes: Array<any>,
};
type State = {
  user: {
    status: {
      isLoggedIn: boolean,
    },
  },
};
type Route = {
  isLoggedIn: boolean,
};
const guestRedirectUrl = url.endpoint.landing;
const userRedirectUrl = url.endpoint.home;

export function Auth(props: Props) {
  return (
    <Switch>
      {props.routes.map((route, i) => (
        <SwitchRoute
          key={i}
          exact={!!route.exact}
          path={route.path}
          render={renderProps => (
            <route.component
              {...props}
              {...renderProps}
              routes={route.routes}
            />
          )}
        />
      ))}
    </Switch>
  );
}
export default compose(
  setStatic('getRedirectUrl', (state: State, route: Route) => {
    const {
      user: {
        status: { isLoggedIn },
      },
    } = state;
    const { isLoggedIn: isLoggedInPage } = route;

    if (isLoggedInPage === undefined) {
      return null;
    }
    if (isLoggedIn) {
      if (isLoggedInPage) {
        return null;
      }
      return userRedirectUrl;
    }
    if (isLoggedInPage) {
      return guestRedirectUrl;
    }
    return null;
  }),
  lifecycle({
    componentDidUpdate() {
      const {
        user: {
          status: { isLoggedIn },
        },
        history: {
          location: { pathname },
          push,
        },
      } = this.props;
      const branch = matchRoutes(routes, pathname);
      const routePath = branch[branch.length - 1].route.path;
      const authRoutes = routes[0].routes;
      const guestRoutes = authRoutes
        .filter(
          route =>
            route.isLoggedIn !== undefined &&
            !route.isLoggedIn &&
            route.path !== url.endpoint.notFound
        )
        .map(route => route.path);
      const userRoutes = authRoutes
        .filter(
          route => route.isLoggedIn && route.path !== url.endpoint.notFound
        )
        .map(route => route.path);

      if (
        !isLoggedIn &&
        routePath !== guestRedirectUrl &&
        userRoutes.includes(routePath)
      ) {
        push(guestRedirectUrl);
      }
      if (
        isLoggedIn &&
        routePath !== userRedirectUrl &&
        guestRoutes.includes(routePath)
      ) {
        push(userRedirectUrl);
      }
    },
  }),
  pure
)(Auth);
