/* @flow */

import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

const LabelUI = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.darkGray};
`;

type Props = {
  children: React.Node,
};

export default function Label(props: Props) {
  const { children } = props;

  return <LabelUI>{children}</LabelUI>;
}
