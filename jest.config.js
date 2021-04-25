module.exports = {
  snapshotSerializers: ['@emotion/jest/serializer'],
  moduleDirectories: [
    'node_modules',
    // add the directory with the setupTests.tsx file, for example:
    'test', // a utility folder
    __dirname, // the root directory
  ],
};
