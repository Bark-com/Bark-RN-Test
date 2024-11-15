module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    './jest-tools/setup.tsx',
  ],
  moduleNameMapper: {
    '@jest-tools/(.*)': '<rootDir>/jest-tools/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
  ],
  coverageReporters: ['json', 'lcov', 'text'],
};
