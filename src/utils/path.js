import path from 'path';

export const joinPath = (...arg) => {
  return path.join(process.cwd(), ...arg);
};
