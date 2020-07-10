import React from 'react';
import styled from 'styled-components';

const ContainerUI = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = (props) => {
  const { children } = props;

  return <ContainerUI>{children}</ContainerUI>;
};

export default Container;
