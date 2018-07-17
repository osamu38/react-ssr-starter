/* @flow */

import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'styles/variables';
import { endpoint } from 'config/url';

const LogoUI = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.white};
  line-height: 32px;
`;

type Props = {
  isLoggedIn: boolean,
};

export default function Logo(props: Props) {
  const { isLoggedIn } = props;

  return (
    <LogoUI to={isLoggedIn ? endpoint.home : endpoint.landing}>
      React SSR Starter
    </LogoUI>
  );
}
