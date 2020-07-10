import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

const BackgroundUI = styled.div`
  height: 100vh;
  background-color: ${colors.superDarkGray};
`;

const backgroundDecorater = (story) => {
  return <BackgroundUI>{story()}</BackgroundUI>;
};

export default backgroundDecorater;
