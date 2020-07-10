import React from 'react';
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

const Logo = () => {
  return (
    <PreloadLink href={endpoint.home}>
      <LogoUI>React SSR Starter</LogoUI>
    </PreloadLink>
  );
};

export default Logo;
