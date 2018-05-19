/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import { Title } from 'components';

export default function NotFound() {
  return (
    <>
      <Helmet title="NotFound" />
      <Title>NotFound</Title>
    </>
  );
}
