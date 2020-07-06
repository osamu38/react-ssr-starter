import React from 'react';
import styled from 'styled-components';

const MenuIconWrapper = styled.span`
  cursor: pointer;
`;
const MenuIconUI = styled.img`
  padding: 4px;
  width: 32px;
`;

export default function MenuIcon(props) {
  const { isOpenMenu, openMenu, closeMenu } = props;

  return (
    <MenuIconWrapper
      onClick={() => {
        if (isOpenMenu) {
          closeMenu();
        } else {
          openMenu();
        }
      }}
    >
      <MenuIconUI src="/static/images/svg/menu-icon.svg" alt="menu-icon" />
    </MenuIconWrapper>
  );
}
