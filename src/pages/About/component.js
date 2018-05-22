/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import { Title, SubTitle, StackList } from 'components';

export default function About() {
  return (
    <>
      <Helmet title="About" />
      <Title>About Page</Title>
      <SubTitle>Use Stack List</SubTitle>
      <StackList />
    </>
  );
}
