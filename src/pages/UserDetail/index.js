/* @flow */

import loadable from 'loadable-components';
import { compose, lifecycle, setStatic } from 'recompose';
import { fetchUser as fetchUserFromServer } from 'actions/user';
import type { Dispatch, ReduxState } from 'types';

export default compose(
  setStatic(
    'loadData',
    (dispatch: Dispatch, state: ReduxState, params: Object) =>
      dispatch(fetchUserFromServer(params.id))
  ),
  lifecycle({
    componentDidMount() {
      const {
        match: {
          params: { id },
        },
        user: {
          user: { id: userId },
        },
        userActions: { fetchUser },
      } = this.props;

      if (userId !== parseInt(id, 10)) {
        fetchUser(id);
      }
    },
  })
)(loadable(() => import('pages/UserDetail/component')));
