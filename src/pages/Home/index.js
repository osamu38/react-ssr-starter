/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import { Button, Title, SubTitle, UserList } from 'components';

type Props = {
  user: {
    status: {
      isFetchedUserList: boolean,
    },
    userList: Array<Object>,
  },
  userActions: {
    logout: Function,
    fetchUsers: Function,
  },
};

export default class Home extends React.Component<Props> {
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
  }
  render() {
    const {
      user: { userList },
      userActions: { logout },
    } = this.props;

    return (
      <>
        <Helmet title="Home" />
        <Title>Home Page</Title>
        <SubTitle>User List</SubTitle>
        <UserList userList={userList} />
        <Button
          onClick={() => {
            logout();
          }}
          isCenter
        >
          Logout
        </Button>
      </>
    );
  }
}
