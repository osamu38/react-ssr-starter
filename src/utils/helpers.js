/* @flow */

export function isJSON(arg: any) {
  try {
    JSON.parse(arg);
    return true;
  } catch (e) {
    return false;
  }
}
export function compose(...funcs: Function[]) {
  return funcs.reduce(
    (a, b) => (...args: Function[]) => a(b(...args)),
    (arg: Function) => arg
  );
}
