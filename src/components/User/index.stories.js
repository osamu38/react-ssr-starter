import React from 'react';
import { storiesOf } from '@storybook/react';
import User from 'components/User';
import user from 'components/User/data';

storiesOf('User', module).add('normal', () => <User user={user} />);
