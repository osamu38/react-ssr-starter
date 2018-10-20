/* @flow */

import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { beginTask, endTask } from 'redux-nprogress';
import pathToRegexp from 'path-to-regexp';
import { endpoint } from 'config/url';
import routes from 'routes';
import { isJSON } from 'utils/helpers';
import type { Dispatch, ReduxState, StateProps } from 'types';

type Props = {
  href: string,
  children: any,
  activeClassName?: string,
  isProgress?: boolean,
  isLoadData?: boolean,
};
type DispatchProps = {
  dispatch: Dispatch,
  state: ReduxState,
};

function loadComponent(targetRoute, targetComponent) {
  if (targetRoute && targetComponent.loadingPromise === null) {
    targetComponent.load();
    return targetComponent.loadingPromise;
  }
  return Promise.resolve();
}
function getPageName(href) {
  return Object.keys(endpoint).find(key =>
    pathToRegexp(endpoint[key]).test(href)
  );
}
function getParams(targetEndpoint, href) {
  const re = pathToRegexp(targetEndpoint);
  const endpointInfo = re.exec(href) || [];
  const keys = [];

  pathToRegexp(targetEndpoint, keys);

  return keys.reduce(
    (pre, cur, index) => ({
      [cur.name]: isJSON(endpointInfo[index + 1])
        ? JSON.parse(endpointInfo[index + 1])
        : endpointInfo[index + 1],
    }),
    {}
  );
}
function PreloadLink(props: StateProps & DispatchProps & Props) {
  const {
    href,
    children,
    history: { push },
    dispatch,
    state,
    isProgress = true,
    isLoadData = true,
  } = props;
  const authRoutes = routes[0].routes;
  const pageName = getPageName(href);
  const targetEndpoint = pageName ? endpoint[pageName] : '';
  const targetRoute = authRoutes.find(route => route.path === targetEndpoint);
  const targetComponent = targetRoute ? targetRoute.component : {};
  const params = getParams(targetEndpoint, href);

  return React.cloneElement(children, {
    href,
    onClick: async e => {
      e.preventDefault();
      if (isProgress) {
        dispatch(beginTask());
      }
      await loadComponent(targetRoute, targetComponent);

      const { loadData } = targetComponent;

      if (loadData && isLoadData) {
        await loadData(dispatch, state, params);
      }
      if (isProgress) {
        dispatch(endTask());
      }
      push(href);
    },
  });
}

function mapStateToProps(state) {
  return {
    state,
  };
}

const enhancers = [withRouter, connect(mapStateToProps)];

export default compose(...enhancers)(PreloadLink);
