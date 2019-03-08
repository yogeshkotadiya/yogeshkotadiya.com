module.exports = {
  linters: {
    "*.js": ["eslint"], //["jest --findRelatedTests"] Use later when test suite is added
    "*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)": [
      "prettier --write",
      "git add",
    ],
  },
};
