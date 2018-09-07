module.exports = {
  setupFiles: ['raf/polyfill', '<rootDir>/tools/jest/setup.js'],
  transform: {
    '.js': '<rootDir>/node_modules/babel-jest',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
