// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/internals/jestSettings.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
  },
  moduleNameMapper: {
    // https://jestjs.io/docs/en/webpack#handling-static-assets
    "\\.(css|less)$": "<rootDir>/internals/__mocks__/styleMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["e2e"],
  moduleDirectories: ["node_modules", "src"],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 74,
      lines: 85,
      statements: -100,
    },
  },
};
