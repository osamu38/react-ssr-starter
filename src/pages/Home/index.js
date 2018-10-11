/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import Button from 'components/Button';
import Title from 'components/Title';
import SubTitle from 'components/SubTitle';
import UserList from 'components/UserList';
import { fetchUsers as fetchUsersFromServer } from 'actions/user';
import type { PageProps, Dispatch } from 'types';

export default class HomePage extends React.PureComponent<PageProps> {
  static loadData(dispatch: Dispatch) {
    return dispatch(fetchUsersFromServer());
  }

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
      <div>
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
      </div>
    );
  }
}
