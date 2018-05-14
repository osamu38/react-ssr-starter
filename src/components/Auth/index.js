/* @flow */

import * as React from 'react';
import { Route as SwitchRoute, Switch } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import url from 'config/url';
import routes from 'routes';

type Props = {
  routes: Array<any>,
  history: {
    location: {
      pathname: string,
    },
    push: Function,
  },
  user: {
    status: {
      isLoggedIn: boolean,
    },
  },
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

export default class Auth extends React.Component<Props> {
  static guestRedirectUrl = url.endpoint.landing;
  static userRedirectUrl = url.endpoint.home;
  static getRedirectUrl(state: State, route: Route) {
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
      return Auth.userRedirectUrl;
    }
    if (isLoggedInPage) {
      return Auth.guestRedirectUrl;
    }
    return null;
  }
  constructor() {
    const authRoutes = routes[0].routes;

    super();
    this.guestRoutes = authRoutes
      .filter(
        route =>
          route.isLoggedIn !== undefined &&
          !route.isLoggedIn &&
          route.path !== url.endpoint.notFound
      )
      .map(route => route.path);
    this.userRoutes = authRoutes
      .filter(route => route.isLoggedIn && route.path !== url.endpoint.notFound)
      .map(route => route.path);
  }
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

    if (
      !isLoggedIn &&
      routePath !== Auth.guestRedirectUrl &&
      this.userRoutes.includes(routePath)
    ) {
      push(Auth.guestRedirectUrl);
    }
    if (
      isLoggedIn &&
      routePath !== Auth.userRedirectUrl &&
      this.guestRoutes.includes(routePath)
    ) {
      push(Auth.userRedirectUrl);
    }
  }
  guestRoutes: Array<string>;
  userRoutes: Array<string>;
  render() {
    return (
      <Switch>
        {this.props.routes.map((route, i) => (
          <SwitchRoute
            key={i}
            exact={!!route.exact}
            path={route.path}
            isLoggedIn={route.isLoggedIn}
            render={props => (
              <route.component
                {...this.props}
                {...props}
                routes={route.routes}
              />
            )}
          />
        ))}
      </Switch>
    );
  }
}
