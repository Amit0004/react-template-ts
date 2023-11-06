import * as path from "path";

export default {
  process(sourcePath: any) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};
