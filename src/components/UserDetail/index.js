/* @flow */
/* eslint-disable no-undef, no-restricted-globals */

import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';
import type { User } from 'types/user';

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
  user: User,
};

export default function UserDetail(props: Props) {
  const {
    user: {
      id,
      username,
      phone,
      email,
      website,
      address: {
        city,
        street,
        suite,
        zipcode,
        geo: { lat, lng },
      },
      company: { bs, catchPhrase, name },
    },
  } = props;

  return (
    <UserUI>
      <p>id: {id}</p>
      <p>username: {username}</p>
      <p>phone: {phone}</p>
      <p>email: {email}</p>
      <p>website: {website}</p>
      <UserInner>
        <p>address</p>
        <p>city: {city}</p>
        <p>street: {street}</p>
        <p>suite: {suite}</p>
        <p>zipcode: {zipcode}</p>
        <p>lat: {lat}</p>
        <p>lng: {lng}</p>
      </UserInner>
      <UserInner>
        <p>company</p>
        <p>bs: {bs}</p>
        <p>catchPhrase: {catchPhrase}</p>
        <p>name: {name}</p>
      </UserInner>
    </UserUI>
  );
}
