/* @flow */

import * as React from 'react';
import styled from 'styled-components';
import { sizes, spaces } from 'styles/variables';

const MainUI = styled.div`
  margin: 0 auto;
  padding: ${spaces.main}px;
  width: 100%;
  max-width: ${sizes.width.main + spaces.main * 2}px;
`;

type Props = {
  children?: React.Node,
};

export default function Main(props: Props) {
  const { children } = props;

  return <MainUI>{children}</MainUI>;
}
