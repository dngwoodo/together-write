import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts',
    'jest-plugin-context/setup',
    'given2/setup',
  ],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
};

export default config;
