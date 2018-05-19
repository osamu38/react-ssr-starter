/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import { LoginForm, Title } from 'components';

type Props = {
  userActions: {
    login: Function,
  },
};

export default function Landing(props: Props) {
  const {
    userActions: { login },
  } = props;

  return (
    <>
      <Helmet title="Landing" />
      <Title>Landing Page</Title>
      <LoginForm login={login} />
    </>
  );
}
