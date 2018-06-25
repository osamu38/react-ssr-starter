/* @flow */

import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

const SubTitleUI = styled.div`
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.darkGray};
`;

type Props = {
  children?: React.Node,
};

export default function SubTitle(props: Props) {
  const { children } = props;

  return <SubTitleUI>{children}</SubTitleUI>;
}
