const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,

  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 3000,
    baseUrl: "https://insurance.aubankuat.in",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
