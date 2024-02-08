const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://juice-shop-sanitarskyi.herokuapp.com',
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      return config;
  },
  },
});
