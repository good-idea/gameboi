module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testMatch: ['**/__tests__/**/*.test.ts', '**/*.test.tsx?'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'coverage',
    '/__.*__/',
    'jest.config.js',
  ],
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['**/**/*.tsx?'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
