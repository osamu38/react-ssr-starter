/* @flow */

import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Observer from '@researchgate/react-intersection-observer';
import pathToRegexp from 'path-to-regexp';
import { endpoint } from 'config/url';
import routes from 'routes';

type Props = {
  to: string,
  children?: React.Node,
  activeClassName?: string,
};

export default function PreloadLink(props: Props) {
  const { to, children, activeClassName } = props;
  const authRoutes = routes[0].routes;
  const path = Object.keys(endpoint).find(key =>
    pathToRegexp(endpoint[key]).test(to)
  );
  const targetEndpoint = path ? endpoint[path] : '';
  const targetRoute = authRoutes.find(route => route.path === targetEndpoint);
  const targetComponent = targetRoute ? targetRoute.component : {};
  const Tag = activeClassName ? NavLink : Link;

  return (
    <Observer
      onChange={({ isIntersecting }) => {
        if (
          isIntersecting &&
          targetRoute &&
          targetComponent.loadingPromise === null
        ) {
          targetComponent.load();
        }
      }}
    >
      <Tag {...props}>{children}</Tag>
    </Observer>
  );
}
