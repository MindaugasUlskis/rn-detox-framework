/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'detox/runners/jest/testEnvironment',
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
  testTimeout: 120000,
  maxWorkers: 1,
  rootDir: '.',
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: ['detox/runners/jest/reporter'],
  verbose: true,
};