import React from 'react';
import { storiesOf } from '@storybook/react';
import OctIcon from 'components/OctIcon';
import backgroundDecorator from 'tools/storybook/backgroundDecorator';

storiesOf('OctIcon', module)
  .addDecorator(backgroundDecorator)
  .add('normal', () => <OctIcon />);
