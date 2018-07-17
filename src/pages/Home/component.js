/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import { Button, Title, SubTitle, UserList } from 'components';
import type { PageProps } from 'types';

export default function Home(props: PageProps) {
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
