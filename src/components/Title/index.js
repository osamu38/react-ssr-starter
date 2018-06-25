/* @flow */

import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

const TitleUI = styled.h1`
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: bold;
  color: ${colors.accent};
`;

type Props = {
  children?: React.Node,
};

export default function Title(props: Props) {
  const { children } = props;

  return <TitleUI>{children}</TitleUI>;
}
