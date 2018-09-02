/* @flow */
/* eslint-disable import/prefer-default-export */

export function clearfix() {
  return `
    &::after {
      display: table;
      content: '';
      clear: both;
    }
  `;
}
