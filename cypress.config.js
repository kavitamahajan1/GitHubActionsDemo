const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 20000,
    //baseUrl: "https://insurance.aubankuat.in/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
