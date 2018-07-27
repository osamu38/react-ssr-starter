/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import Button from 'components/Button';
import Title from 'components/Title';
import SubTitle from 'components/SubTitle';
import UserList from 'components/UserList';
import type { PageProps } from 'types';

export default function HomePage(props: PageProps) {
  const {
    user: { userList },
    userActions: { logout },
  } = props;

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
