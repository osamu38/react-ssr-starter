/* @flow */
/* eslint-disable import/prefer-default-export */

export function isJSON(arg: any) {
  try {
    JSON.parse(arg);
    return true;
  } catch (e) {
    return false;
  }
}
