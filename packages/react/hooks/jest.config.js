module.exports = {
  ...require('../../../jest.config'),
  setupFilesAfterEnv: ['jest-extended', './jest.setup.ts'],
  testEnvironment: 'jsdom',
}
