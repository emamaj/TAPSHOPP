const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dynno1",
  viewportHeight: 800,
  viewportWidth: 1200,

  e2e: {
    baseUrl: "https://tapsshop.pl/",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
