const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "eo4s4h",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
