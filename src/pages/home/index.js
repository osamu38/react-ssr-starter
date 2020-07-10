import React from 'react';
import { Helmet } from 'react-helmet-async';
import Title from 'components/Title';
import SubTitle from 'components/SubTitle';
import UserList from 'components/UserList';
import { fetchUsers } from 'actions/user';

const HomePage = (props) => {
  const {
    state: {
      user: { userList },
    },
  } = props;

  return (
    <>
      <Helmet title="Home" />
      <Title>Home Page</Title>
      <SubTitle>User List</SubTitle>
      <UserList userList={userList} />
    </>
  );
};

HomePage.loadData = (ctx) => {
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
