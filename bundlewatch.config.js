module.exports = {
  files: [
    {
      path: "build/static/js/*",
      maxSize: "100kB",
    },
  ],
  ci: {
    repoBranchBase: "main",
    trackBranches: ["main"],
  },
};
