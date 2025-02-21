const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: '../../node_modules/cypress-mochawesome-reporter',
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 800,
    baseUrl: "https://4f.com.pl/",
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,   
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});