import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

const SubTitleUI = styled.div`
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.darkGray};
`;

const SubTitle = (props) => {
  const { children } = props;

  return <SubTitleUI>{children}</SubTitleUI>;
};

export default SubTitle;
