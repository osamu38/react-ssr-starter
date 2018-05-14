/* @flow */

import * as React from 'react';
import styled from 'styled-components';
import { sizes, colors } from 'styles/variables';

const FooterUI = styled.div`
  height: ${sizes.height.footer}px;
  padding: 12px 16px;
  color: ${colors.white};
  background-image: linear-gradient(
    120deg,
    ${colors.accent} 0%,
    ${colors.link} 100%
  );
  text-align: center;
  line-height: 32px;
`;

export default function Footer() {
  return <FooterUI>© 2018 osamu38</FooterUI>;
}
