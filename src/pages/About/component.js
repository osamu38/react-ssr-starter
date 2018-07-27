/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import Title from 'components/Title';
import SubTitle from 'components/SubTitle';
import StackList from 'components/StackList';

export default function AboutPage() {
  return (
    <div>
      <Helmet title="About" />
      <Title>About Page</Title>
      <SubTitle>Use Stack List</SubTitle>
      <StackList />
    </div>
  );
}
