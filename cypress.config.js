const { defineConfig } = require("cypress");

// const cucumber=require('cypress-cucumber-preprocessor').default;
async function setupNodeEvents(on, config) {
  // on('')
  // implement node event listeners here
  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    // specPattern:'cypress/assessment/*.js',
    specPattern:'cypress/Intregation/framework/pagetest.js'
    
  },
});
