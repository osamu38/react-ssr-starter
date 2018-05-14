import path from 'path';

export default {
  joinPath(...arg) {
    return path.join(process.cwd(), ...arg);
  },
};
