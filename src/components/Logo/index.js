/* @flow */

import * as React from 'react';
import styled from 'styled-components';
import PreloadLink from 'components/PreloadLink';
import { colors } from 'styles/variables';
import { endpoint } from 'config/url';

const LogoUI = styled.a`
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
    <PreloadLink href={isLoggedIn ? endpoint.home : endpoint.landing}>
      <LogoUI>React SSR Starter</LogoUI>
    </PreloadLink>
  );
}
