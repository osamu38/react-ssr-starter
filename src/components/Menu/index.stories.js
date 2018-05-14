import React from 'react';
import { storiesOf } from '@storybook/react';
import routerDecorator from 'tools/storybook/routerDecorator';
import Menu from 'components/Menu';

storiesOf('Menu', module)
  .addDecorator(routerDecorator)
  .add('normal', () => <Menu isOpenMenu />);
