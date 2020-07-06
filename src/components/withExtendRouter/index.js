import React from 'react';
import { withRouter } from 'react-router-dom';
import { parse } from 'query-string';

function withExtendRouter(Component) {
  const HOC = (props) => {
    const { location } = props;
    const { search } = location;
    const query = parse(search, { arrayFormat: 'bracket' });

    Object.assign(location, { query });

    return <Component {...props} location={location} />;
  };
  return withRouter(HOC);
}

export default withExtendRouter;
