import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

const BackgroundUI = styled.div`
  height: 100vh;
  background-color: ${colors.superDarkGray};
`;

export default function backgroundDecorater(story) {
  return <BackgroundUI>{story()}</BackgroundUI>;
}
