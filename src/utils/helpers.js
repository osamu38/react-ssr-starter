/* eslint-disable import/prefer-default-export */

export function isJSON(arg) {
  try {
    JSON.parse(arg);
    return true;
  } catch (e) {
    return false;
  }
}
