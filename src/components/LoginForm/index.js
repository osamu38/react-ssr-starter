/* @flow */

import * as React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import Label from 'components/Label';
import Input from 'components/Input';

const LoginFormUI = styled.form`
  width: 100%;
`;
const LoginFormCell = styled.div`
  margin-bottom: 12px;
`;
const LoginFormCellLabel = styled.span`
  width: 30%;
`;
const LoginFormCellBody = styled.span`
  width: 70%;
`;

type Props = {
  login: Function,
};

export default function LoginForm(props: Props) {
  const { login } = props;

  return (
    <LoginFormUI
      onSubmit={e => {
        e.preventDefault();
        const {
          email: { value: emailValue },
          password: { value: passwordValue },
        } = e.target;

        login(emailValue, passwordValue);
      }}
    >
      <LoginFormCell>
        <LoginFormCellLabel>
          <Label>Email</Label>
        </LoginFormCellLabel>
        <LoginFormCellBody>
          <Input
            type="email"
            name="email"
            placeholder="dummy@dummy.com"
            required
          />
        </LoginFormCellBody>
      </LoginFormCell>
      <LoginFormCell>
        <LoginFormCellLabel>
          <Label>Password</Label>
        </LoginFormCellLabel>
        <LoginFormCellBody>
          <Input type="password" name="password" placeholder="dummy" required />
        </LoginFormCellBody>
      </LoginFormCell>
      <Button isCenter>Login</Button>
    </LoginFormUI>
  );
}
