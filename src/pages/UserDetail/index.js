/* @flow */

import loadable from 'loadable-components';
import { compose, lifecycle, pure, setStatic } from 'recompose';
import { fetchUser as fetchUserFromSever } from 'actions/user';

export default compose(
  setStatic('loadData', (dispatch, state, params) =>
    dispatch(fetchUserFromSever(params.id))
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
  }),
  pure
)(loadable(() => import('pages/UserDetail/UserDetail')));
