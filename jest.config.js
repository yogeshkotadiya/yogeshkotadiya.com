module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/tests/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/tests/__mocks__/file-mock.js`,
    "^components(.*)$": `<rootDir>/src/components/$1`,
    "^pages(.*)$": `<rootDir>/src/pages/$1`,
    "^styles(.*)$": `<rootDir>/src/styles/$1`,
    "^utils(.*)$": `<rootDir>/src/utils/$1`,
    "^Images(.*)$": `<rootDir>/static/Images/$1`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `cypress`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  coverageDirectory: `./coverage/`,
  collectCoverage: true,
  // setupFiles: [`<rootDir>/loadershim.js`],
};
