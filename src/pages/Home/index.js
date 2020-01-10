/* @flow */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from 'components/Button';
import Title from 'components/Title';
import SubTitle from 'components/SubTitle';
import UserList from 'components/UserList';
import { fetchUsers } from 'actions/user';
import type { PageProps, Ctx } from 'types';

function HomePage(props: PageProps) {
  const {
    state: {
      user: { userList },
    },
    actions: {
      userActions: { logout },
    },
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

HomePage.loadData = async (ctx: Ctx) => {
  const {
    dispatch,
    state: {
      user: { userList },
    },
  } = ctx;

  if (!userList.length) {
    return dispatch(fetchUsers());
  }
  return Promise.resolve();
};

export default HomePage;
