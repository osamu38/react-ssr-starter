/* @flow */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Title from 'components/Title';
import UserDetail from 'components/UserDetail';
import { fetchUser } from 'actions/user';
import type { PageProps, Ctx } from 'types';

function UserDetailPage(props: PageProps) {
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
}

UserDetailPage.loadData = ({ dispatch, params }: Ctx) => {
  return dispatch(fetchUser(params.id));
};

export default UserDetailPage;
