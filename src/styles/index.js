/* @flow */
/* eslint-disable no-unused-expressions */

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { colors } from 'styles/variables';

export default createGlobalStyle`
  ${reset}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    text-size-adjust: 100%;
  }
  body {
    position: relative;
    overflow-x: hidden;
    min-height: 100%;
    background-color: ${colors.white};
    color: ${colors.superDarkGray};
    word-wrap: break-word;
    font-size: 14px;
    font-family: 'Avenir Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.5;
    -webkit-touch-callout: none;
  }
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  img {
    vertical-align: middle;
    -webkit-touch-callout: none;
  }
  hr {
    margin: 0;
  }
  span,
  i {
    display: inline-block;
    vertical-align: middle;
  }
  li {
    list-style: none;
  }
  input,
  textarea,
  button {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    border-radius: 0;
    background-color: inherit;
    color: inherit;
    vertical-align: middle;
    appearance: none;
  }
  select {
    border-radius: 0;
  }
  input:-webkit-autofill,
  textarea:-webkit-autofill {
    box-shadow: 0 0 0 1000px white inset;
  }
`;
