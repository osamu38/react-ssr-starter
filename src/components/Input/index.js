/* @flow */

import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

const InputUI = styled.input`
  padding: 0 12px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  border: 2px ${colors.lightGray} solid;
  line-height: 40px;
`;

type Props = {
  type: string,
  name: string,
  placeholder: string,
  required: boolean,
};

export default function Input(props: Props) {
  return <InputUI {...props} />;
}
