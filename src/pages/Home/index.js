/* @flow */

import loadable from 'loadable-components';
import { compose, lifecycle, setStatic } from 'recompose';
import { fetchUsers as fetchUsersFromServer } from 'actions/user';
import type { Dispatch } from 'types';

export default compose(
  setStatic('loadData', (dispatch: Dispatch) =>
    dispatch(fetchUsersFromServer())
  ),
  lifecycle({
    componentDidMount() {
      const {
        user: {
          status: { isFetchedUserList },
        },
        userActions: { fetchUsers },
      } = this.props;

      if (!isFetchedUserList) {
        fetchUsers();
      }
    },
  })
)(loadable(() => import('pages/Home/component')));
