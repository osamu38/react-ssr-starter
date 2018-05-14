/* @flow */
/* eslint-disable no-undef, no-restricted-globals */

import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

const UserUI = styled.div`
  padding: 12px;
  border: 1px ${colors.superLightGray} solid;
`;
const UserInner = styled.div`
  margin-top: 12px;
  padding: 12px;
  border: 1px ${colors.superLightGray} solid;
`;

type Props = {
  user: Object,
};

export default function User(props: Props) {
  const { user } = props;

  return (
    <UserUI>
      <p>id: {user.id}</p>
      <p>name: {user.name}</p>
      <p>username: {user.username}</p>
      <p>phone: {user.phone}</p>
      <p>email: {user.email}</p>
      <p>website: {user.website}</p>
      <UserInner>
        <p>address</p>
        <p>city: {user?.address?.city}</p>
        <p>street: {user?.address?.street}</p>
        <p>suite: {user?.address?.suite}</p>
        <p>zipcode: {user?.address?.zipcode}</p>
        <p>lat: {user?.address?.geo?.lat}</p>
        <p>lng: {user?.address?.geo?.lng}</p>
      </UserInner>
      <UserInner>
        <p>company</p>
        <p>bs: {user?.company?.bs}</p>
        <p>catchPhrase: {user?.company?.catchPhrase}</p>
        <p>name: {user?.company?.name}</p>
      </UserInner>
    </UserUI>
  );
}
