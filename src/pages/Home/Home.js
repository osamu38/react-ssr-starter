/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import { Button, Title, SubTitle, UserList } from 'components';

type Props = {
  user: {
    userList: Array<Object>,
  },
  userActions: {
    logout: Function,
  },
};

export default function Home(props: Props) {
  const {
    user: { userList },
    userActions: { logout },
  } = props;

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
