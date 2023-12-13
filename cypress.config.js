const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: true,
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure : true,
  video: true,
  watchForFileChanges: true,
  screenshotsFolder: "cypress/screenshots",
  videosFolder : "cypress/videos",
  //videoCompression : 32,
  experimentalStudio: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
