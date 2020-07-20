module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.(e2e|unit).test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
