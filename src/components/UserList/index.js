/* @flow */

import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';
import media from 'styles/media';
import PreloadLink from 'components/PreloadLink';
import type { User } from 'types/user';

const UserListUI = styled.ul`
  margin-bottom: 20px;
  width: 100%;
  border: 1px ${colors.superLightGray} solid;
`;
const UserListItem = styled.li`
  display: inline-block;
  width: 33.33333%;
  border-bottom: 1px ${colors.superLightGray} solid;
  border-right: 1px ${colors.superLightGray} solid;
  &:nth-child(3n) {
    border-right: none;
  }
  &:last-child:nth-child(3n),
  &:last-child:nth-child(3n-1),
  &:last-child:nth-child(3n-2),
  &:nth-last-child(2):nth-child(3n-1),
  &:nth-last-child(2):nth-child(3n-2),
  &:nth-last-child(3):nth-child(3n-2) {
    border-bottom: none;
  }

  ${media.tablet} {
    width: 50%;
    &:nth-child(3n) {
      border-right: 1px ${colors.superLightGray} solid;
    }
    &:nth-child(2n) {
      border-right: none;
    }
    &:nth-last-child(2):nth-child(2n-1) {
      border-bottom: none;
    }
    &:nth-last-child(2):nth-child(3n-1),
    &:nth-last-child(3):nth-child(3n-2) {
      border-bottom: 1px ${colors.superLightGray} solid;
    }
  }
  ${media.phone} {
    width: 100%;
    &:nth-child(n) {
      border-right: none;
    }
    &:nth-last-child(2):nth-child(2n-1) {
      border-bottom: 1px ${colors.superLightGray} solid;
    }
  }
`;
const UserListLink = styled.a`
  display: block;
  padding: 8px;
  color: ${colors.link};
  &:hover {
    text-decoration: underline;
  }
`;

type Props = {
  userList: User[],
};

export default function UserList(props: Props) {
  const { userList } = props;

  return (
    <UserListUI>
      {userList.map((item, i) => (
        <UserListItem key={i}>
          <PreloadLink href={`/users/${item.id}`}>
            <UserListLink>{item.name}</UserListLink>
          </PreloadLink>
        </UserListItem>
      ))}
    </UserListUI>
  );
}
