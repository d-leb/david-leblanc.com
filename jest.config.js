module.exports = {
  modulePaths: ['src'],
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)test.[jt]s?(x)'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
}
