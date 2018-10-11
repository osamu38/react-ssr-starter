/* @flow */

import * as React from 'react';
import { Route as SwitchRoute, Switch } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { endpoint } from 'config/url';
import routes from 'routes';
import type { ReduxState, PageProps } from 'types';

type Route = {
  isLoggedIn: boolean,
};
const guestRedirectUrl = endpoint.landing;
const userRedirectUrl = endpoint.home;

export default class Auth extends React.PureComponent<PageProps> {
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
          route.path !== endpoint.notFound
      )
      .map(route => route.path);
    const userRoutes = authRoutes
      .filter(route => route.isLoggedIn && route.path !== endpoint.notFound)
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
  }

  static getRedirectUrl(state: ReduxState, route: Route) {
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
  }

  render() {
    const authRoutes = routes[0].routes;

    return (
      <Switch>
        {authRoutes.map((route, i) => (
          <SwitchRoute
            key={i}
            exact={!!route.exact}
            path={route.path}
            render={renderProps => (
              <route.component {...this.props} {...renderProps} />
            )}
          />
        ))}
      </Switch>
    );
  }
}
