/* @flow */

import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from 'styles/variables';

const flash = keyframes`
  0% { opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; }
`;
const ErrorUI = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  display: table;
  margin: auto;
  padding: 12px;
  width: 100%;
  box-shadow: 0 1px 23px 0 rgba(0, 0, 0, 0.2);
  background-color: ${colors.accent};
  color: ${colors.white};
  text-align: center;
  opacity: 0;
  animation: ${flash} 4s ease;
`;

type Props = {
  hideError: Function,
  children?: React.Node,
};

export default function Error(props: Props) {
  const { hideError, children } = props;

  return (
    <ErrorUI
      onAnimationEnd={() => {
        hideError();
      }}
    >
      {children}
    </ErrorUI>
  );
}
