import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

const UserDetailUI = styled.div`
  padding: 12px;
  border: 1px ${colors.superLightGray} solid;
`;
const UserDetailInner = styled.div`
  margin-top: 12px;
  padding: 12px;
  border: 1px ${colors.superLightGray} solid;
`;

export default function UserDetail(props) {
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
    <UserDetailUI>
      <p>id: {id}</p>
      <p>username: {username}</p>
      <p>phone: {phone}</p>
      <p>email: {email}</p>
      <p>website: {website}</p>
      <UserDetailInner>
        <p>address</p>
        <p>city: {city}</p>
        <p>street: {street}</p>
        <p>suite: {suite}</p>
        <p>zipcode: {zipcode}</p>
        <p>lat: {lat}</p>
        <p>lng: {lng}</p>
      </UserDetailInner>
      <UserDetailInner>
        <p>company</p>
        <p>bs: {bs}</p>
        <p>catchPhrase: {catchPhrase}</p>
        <p>name: {name}</p>
      </UserDetailInner>
    </UserDetailUI>
  );
}
