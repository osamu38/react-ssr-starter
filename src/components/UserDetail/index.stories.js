import React from 'react';
import { storiesOf } from '@storybook/react';
import UserDetail from 'components/UserDetail';
import userData from 'components/UserDetail/data';

storiesOf('UserDetail', module).add('normal', () => (
  <UserDetail user={userData} />
));
