/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import LoginForm from 'components/LoginForm';
import Title from 'components/Title';
import type { PageProps } from 'types';

export default function LandingPage(props: PageProps) {
  const {
    userActions: { login },
  } = props;

  return (
    <div>
      <Helmet title="Landing" />
      <Title>Landing Page</Title>
      <LoginForm login={login} />
    </div>
  );
}
