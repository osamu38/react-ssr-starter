/* @flow */

import * as React from 'react';
import type {
  RouterHistory,
  Location,
  Match,
  StaticRouterContext,
} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { parse } from 'query-string';

export type ExtendRouterProps = {
  history: RouterHistory,
  location: Location & {
    query: any,
  },
  match: Match,
  staticContext?: StaticRouterContext,
};

function withExtendRouter(Component: any) {
  const HOC = (props: ExtendRouterProps) => {
    const { location } = props;
    const { search } = location;
    const query = parse(search, { arrayFormat: 'bracket' });

    Object.assign(location, { query });

    // eslint-disable-next-line
    return <Component {...props} location={location} />;
  };
  return withRouter(HOC);
}

export default withExtendRouter;
