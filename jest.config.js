module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: ["html", "text"],
  // As more and more tests are added keep bumping this up. Obviously 100% is the goal but a difficult goal to obtain.
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 25,
      lines: 40,
      statements: 40,
    },
  },
  notify: true,
  testMatch: ["jest.config.js", "**/specs/**/*.js?(x)", "**/?(*.)(spec|test).js?(x)"],
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"]
};
