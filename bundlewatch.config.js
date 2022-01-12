module.exports = {
  normalizeFilenames: /^.+?(\.\w+)\.js$/, // anything(.hash).js
  files: [
    {
      path: "build/static/js/*.js",
      maxSize: "100kB",
    },
  ],
  ci: {
    repoBranchBase: "main",
    trackBranches: ["main"],
  },
};
