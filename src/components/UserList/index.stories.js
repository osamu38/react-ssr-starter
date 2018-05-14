import React from 'react';
import { storiesOf } from '@storybook/react';
import routerDecorator from 'tools/storybook/routerDecorator';
import UserList from 'components/UserList';
import userList from 'components/UserList/data';

storiesOf('UserList', module)
  .addDecorator(routerDecorator)
  .add('normal', () => <UserList userList={userList} />);
