/* @flow */

import * as React from 'react';
import styled from 'styled-components';

const ContainerUI = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

type Props = {
  children?: React.Node,
};

export default function Container(props: Props) {
  const { children } = props;

  return <ContainerUI>{children}</ContainerUI>;
}
