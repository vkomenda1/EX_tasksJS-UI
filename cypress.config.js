const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: 'https://juice-shop-sanitarskyi.herokuapp.com/'
      // implement node event listeners here
    },
  },
});