const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nfpzwi",
  viewportHeight: 1200,
  viewportWidth: 1500,
  reporter:'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
  require('cypress-mochawesome-reporter/plugin')(on)
    
    },
    
    env:{
      hideXhr: true,
      google: "https://www.google.com",
      amazon: "https://www.amazon.de",
      saucedemo: "https://www.saucedemo.com"
    
    },
    specPattern:'cypress/e2e/**/*.{js, jsx, ts, tsx}',
    experimentalRunAllSpecs:true,
    experimentalStudio:true
  }
  
});
