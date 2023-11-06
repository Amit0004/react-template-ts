import "@testing-library/jest-dom";
import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    verbose: true,
    transform: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>/src/config/test-setup/file-transformer.ts",
    },
  };
};
