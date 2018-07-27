/* @flow */

import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'styles/variables';

const ButtonUI = styled.button`
  display: block;
  width: 100%;
  max-width: 180px;
  line-height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.accent};
  text-align: center;
  cursor: pointer;
  border: 2px ${colors.accent} solid;
  ${({ isCenter }) =>
    isCenter &&
    css`
      margin: 0 auto;
    `};
`;

type Props = {
  children?: React.Node,
  onClick?: Function,
  isCenter?: boolean,
};

export default function Button(props: Props) {
  const { children, onClick, isCenter } = props;

  return (
    <ButtonUI onClick={onClick} isCenter={isCenter}>
      {children}
    </ButtonUI>
  );
}
