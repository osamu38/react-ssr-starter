/* @flow */

import * as React from 'react';
import styled from 'styled-components';

const ContainerUI = styled.div``;

type Props = {
  uiActions: Object,
  history: Object,
  location: {
    pathname: string,
  },
  children?: React.Node,
};
type PrevProps = {
  history: {
    action: string,
  },
  location: {
    pathname: string,
  },
};

export default class Container extends React.Component<Props> {
  componentDidUpdate(prevProps: PrevProps) {
    const {
      history: { action },
      location: { pathname: prevPathname },
    } = prevProps;
    const {
      location: { pathname: nextPathname },
      uiActions: { closeMenu },
    } = this.props;
    const isNotPop = action !== 'POP';
    const isChengedPathname = prevPathname !== nextPathname;

    if (isNotPop && isChengedPathname) {
      window.scrollTo(0, 0);
      closeMenu();
    }
  }
  render() {
    const { children } = this.props;

    return <ContainerUI>{children}</ContainerUI>;
  }
}
