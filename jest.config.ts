import { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/config/test-setup/file-transformer.ts",
    "\\.(css|sass)$": "<rootDir>/src/config/test-setup/file-transformer.ts",
  },
};

export default config;
