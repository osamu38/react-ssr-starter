/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import { Title, User } from 'components';
import type { PageProps } from 'types';

export default function UserDetail(props: PageProps) {
  const {
    user: { user },
  } = props;

  return (
    <>
      <Helmet title="User Detail" />
      <Title>User Detail Page</Title>
      <User user={user} />
    </>
  );
}
