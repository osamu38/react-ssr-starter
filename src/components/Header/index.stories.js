import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import routerDecorator from 'tools/storybook/routerDecorator';
import Header from 'components/Header';

storiesOf('Header', module)
  .addDecorator(routerDecorator)
  .add('normal', () => <Header openMenu={linkTo('Header', 'open menu')} />)
  .add('open menu', () => (
    <Header isOpenMenu closeMenu={linkTo('Header', 'normal')} />
  ));
