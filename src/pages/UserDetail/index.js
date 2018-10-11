/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import Title from 'components/Title';
import UserDetail from 'components/UserDetail';
import { fetchUser as fetchUserFromServer } from 'actions/user';
import type { PageProps, ReduxState, Dispatch } from 'types';

export default class UserDetailPage extends React.PureComponent<PageProps> {
  static loadData(dispatch: Dispatch, state: ReduxState, params: Object) {
    return dispatch(fetchUserFromServer(params.id));
  }

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

    if (userId !== parseInt(id, 10) && id) {
      fetchUser(id);
    }
  }

  render() {
    const {
      user: { user },
    } = this.props;

    return (
      <div>
        <Helmet title="User Detail" />
        <Title>User Detail Page</Title>
        <UserDetail user={user} />
      </div>
    );
  }
}
