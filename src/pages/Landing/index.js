/* @flow */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import LoginForm from 'components/LoginForm';
import Title from 'components/Title';
import type { PageProps } from 'types';

export default function LandingPage(props: PageProps) {
  const {
    actions: {
      userActions: { login },
    },
  } = props;

  return (
    <>
      <Helmet title="Landing" />
      <Title>Landing Page</Title>
      <LoginForm login={login} />
    </>
  );
}
