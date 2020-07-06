import React from 'react';
import styled from 'styled-components';

const ContainerUI = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Container(props) {
  const { children } = props;

  return <ContainerUI>{children}</ContainerUI>;
}
