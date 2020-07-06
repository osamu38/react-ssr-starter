import path from 'path';

export function joinPath(...arg) {
  return path.join(process.cwd(), ...arg);
}
