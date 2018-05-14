import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuIcon from 'components/MenuIcon';
import backgroundDecorator from 'tools/storybook/backgroundDecorator';

storiesOf('MenuIcon', module)
  .addDecorator(backgroundDecorator)
  .add('normal', () => <MenuIcon />);
