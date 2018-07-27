/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import Title from 'components/Title';
import UserDetail from 'components/UserDetail';
import type { PageProps } from 'types';

export default function UserDetailPage(props: PageProps) {
  const {
    user: { user },
  } = props;

  return (
    <div>
      <Helmet title="User Detail" />
      <Title>User Detail Page</Title>
      <UserDetail user={user} />
    </div>
  );
}
