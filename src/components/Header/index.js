import React from 'react';
import styled from 'styled-components';
import { sizes, spaces, colors } from 'styles/variables';
import Logo from 'components/Logo';
import Menu from 'components/Menu';
import MenuIcon from 'components/MenuIcon';
import OctIcon from 'components/OctIcon';

const HeaderContainer = styled.div`
  height: 56px;
`;
const HeaderUI = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background-image: linear-gradient(
    120deg,
    ${colors.link} 0%,
    ${colors.accent} 100%
  );
`;
const HeaderInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  margin: 0 auto;
  max-width: ${sizes.width.main + spaces.main * 2}px;
  width: 100%;
`;
const StyledOctIcon = styled(OctIcon)`
  margin-right: 12px;
`;

export default function Header(props) {
  const { isOpenMenu, openMenu, closeMenu } = props;

  return (
    <HeaderContainer>
      <HeaderUI>
        <HeaderInner>
          <Logo />
          <div>
            <StyledOctIcon />
            <MenuIcon
              isOpenMenu={isOpenMenu}
              openMenu={openMenu}
              closeMenu={closeMenu}
            />
          </div>
          <Menu isOpenMenu={isOpenMenu} />
        </HeaderInner>
      </HeaderUI>
    </HeaderContainer>
  );
}
