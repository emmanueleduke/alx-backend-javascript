module.exports = {
  // Specify the test environment (Node.js in this case).
  testEnvironment: 'node',

  // Define the patterns that Jest uses to detect test files.
  testMatch: ['**/*.test.js'],

  // Specify where Jest should search for your test files.
  roots: ['<rootDir>'],

  // A list of paths to directories that Jest should use when resolving modules.
  modulePaths: ['<rootDir>/src'],

  // Transform files with Babel for ES6 support.
  transform: {
    '^.+\\.js$': 'babel-jest',
  },

  // Customize reporters and output options.
  reporters: ['default'],

  // Other configuration options go here...
};

