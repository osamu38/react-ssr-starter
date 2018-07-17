/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import { Title, UserDetail } from 'components';
import type { PageProps } from 'types';

export default function UserDetailPage(props: PageProps) {
  const {
    user: { user },
  } = props;

  return (
    <>
      <Helmet title="User Detail" />
      <Title>User Detail Page</Title>
      <UserDetail user={user} />
    </>
  );
}
