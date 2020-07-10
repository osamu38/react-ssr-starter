import React from 'react';
import { Helmet } from 'react-helmet-async';
import Title from 'components/Title';
import UserDetail from 'components/UserDetail';
import { fetchUser } from 'actions/user';

const UserDetailPage = (props) => {
  const {
    state: {
      user: { user },
    },
  } = props;

  return (
    <>
      <Helmet title="User Detail" />
      <Title>User Detail Page</Title>
      <UserDetail user={user} />
    </>
  );
};

UserDetailPage.loadData = ({ dispatch, params }) => {
  return dispatch(fetchUser(params.id));
};

export default UserDetailPage;
