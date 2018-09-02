/* @flow */

import * as React from 'react';
import styled from 'styled-components';
import { sizes, spaces, colors } from 'styles/variables';
import Logo from 'components/Logo';
import Menu from 'components/Menu';
import MenuIcon from 'components/MenuIcon';
import OctIcon from 'components/OctIcon';
import { clearfix } from 'styles/helpers';

const HeaderWrapper = styled.div`
  height: ${sizes.height.header}px;
`;
const HeaderUI = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${sizes.height.header}px;
  background-image: linear-gradient(
    120deg,
    ${colors.link} 0%,
    ${colors.accent} 100%
  );
`;
const HeaderInner = styled.div`
  position: relative;
  padding: 12px 16px;
  margin: 0 auto;
  max-width: ${sizes.width.main + spaces.main * 2}px;
  width: 100%;
  ${clearfix()};
`;
const LogoWrapper = styled.div`
  float: left;
`;
const MenuIconWrapper = styled.div`
  float: right;
`;
const OctIconWrapper = styled.div`
  float: right;
  margin-right: 12px;
`;

type Props = {
  isLoggedIn: boolean,
  isOpenMenu: boolean,
  openMenu: Function,
  closeMenu: Function,
};

export default function Header(props: Props) {
  const { isLoggedIn, isOpenMenu, openMenu, closeMenu } = props;

  return (
    <HeaderWrapper>
      <HeaderUI>
        <HeaderInner>
          <LogoWrapper>
            <Logo isLoggedIn={isLoggedIn} />
          </LogoWrapper>
          <MenuIconWrapper>
            <MenuIcon
              isOpenMenu={isOpenMenu}
              openMenu={openMenu}
              closeMenu={closeMenu}
            />
          </MenuIconWrapper>
          <OctIconWrapper>
            <OctIcon />
          </OctIconWrapper>
          <Menu isOpenMenu={isOpenMenu} />
        </HeaderInner>
      </HeaderUI>
    </HeaderWrapper>
  );
}
