/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import { LoginForm, Title } from 'components';
import type { PageProps } from 'types';

export default function LandingPage(props: PageProps) {
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
