import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import GlobalStyle from 'styles';

const req = require.context('../../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

configure(loadStories, module);
