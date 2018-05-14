/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import { Title, User } from 'components';

type Props = {
  match: {
    params: {
      id: string,
    },
  },
  user: {
    user: { id: ?number },
  },
  userActions: {
    login: Function,
    fetchUser: Function,
  },
};

export default class UserDetail extends React.Component<Props> {
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
  }
  render() {
    const {
      user: { user },
    } = this.props;

    return (
      <>
        <Helmet title="User Detail" />
        <Title>User Detail Page</Title>
        <User user={user} />
      </>
    );
  }
}
