const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.kiwi.com/sk",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
