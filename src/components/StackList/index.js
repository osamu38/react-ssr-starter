/* @flow */

import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';

const StackListUI = styled.ul`
  margin: -8px 0 0 -8px;
`;
const StackListItem = styled.li`
  display: inline-block;
  margin: 8px 0 0 8px;
`;
const StackListLink = styled.a`
  display: inline-block;
  padding: 8px 12px;
  color: ${colors.link};
  border: 1px ${colors.superLightGray} solid;
  &:hover {
    text-decoration: underline;
  }
`;

const stackData = [
  {
    name: 'preact',
    link: 'https://preactjs.com/',
  },
  {
    name: 'react',
    link: 'https://reactjs.org/',
  },
  {
    name: 'react-router',
    link: 'https://reacttraining.com/react-router/',
  },
  {
    name: 'react-hot-loader',
    link: 'http://gaearon.github.io/react-hot-loader/',
  },
  {
    name: 'redux',
    link: 'https://redux.js.org/',
  },
  {
    name: 'styled-components',
    link: 'https://www.styled-components.com/',
  },
  {
    name: 'babel',
    link: 'https://babeljs.io/',
  },
  {
    name: 'webpack',
    link: 'https://webpack.js.org/',
  },
  {
    name: 'storybook',
    link: 'https://storybook.js.org/',
  },
  {
    name: 'express',
    link: 'http://expressjs.com/',
  },
  {
    name: 'prettier',
    link: 'https://prettier.io/',
  },
  {
    name: 'eslint',
    link: 'https://eslint.org/',
  },
  {
    name: 'stylelint',
    link: 'https://stylelint.io/',
  },
  {
    name: 'flow',
    link: 'https://flow.org/',
  },
  {
    name: 'enzyme',
    link: 'http://airbnb.io/enzyme/',
  },
  {
    name: 'jest',
    link: 'https://facebook.github.io/jest/',
  },
  {
    name: 'workbox',
    link: 'https://developers.google.com/web/tools/workbox/',
  },
];

export default function StackList() {
  return (
    <StackListUI>
      {stackData.map((item, i) => (
        <StackListItem key={i}>
          <StackListLink href={item.link} target="_blank" rel="noopener">
            {item.name}
          </StackListLink>
        </StackListItem>
      ))}
    </StackListUI>
  );
}
