/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import { Title, User } from 'components';

type Props = {
  user: {
    user: Object,
  },
};

export default function UserDetail(props: Props) {
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
