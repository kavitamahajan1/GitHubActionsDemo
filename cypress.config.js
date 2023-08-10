const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    baseUrl: "https://insurance.aubankuat.in/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
