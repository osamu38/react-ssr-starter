/* @flow */

import * as React from 'react';
import styled from 'styled-components';

const ContainerUI = styled.div`
  width: 100%;
`;

type Props = {
  children?: React.Node,
};

export default function Container(props: Props) {
  const { children } = props;

  return <ContainerUI>{children}</ContainerUI>;
}
