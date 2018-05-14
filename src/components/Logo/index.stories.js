import React from 'react';
import { storiesOf } from '@storybook/react';
import routerDecorator from 'tools/storybook/routerDecorator';
import backgroundDecorator from 'tools/storybook/backgroundDecorator';
import Logo from 'components/Logo';

storiesOf('Logo', module)
  .addDecorator(routerDecorator)
  .addDecorator(backgroundDecorator)
  .add('normal', () => <Logo />);
