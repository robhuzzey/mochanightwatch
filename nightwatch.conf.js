'use strict'

const screenshotsPath = `${__dirname}/selenium-fail-screenshots`
module.exports = {
  src_folders: ['tests'],
  webdriver: {
    start_process: true,
    server_path: 'node_modules/.bin/chromedriver',
    port: 9515
  },
  test_runner: 'mocha',
  test_settings : {
    default: {
      desiredCapabilities: {
        browserName: 'chrome'
      },
      screenshots: {
        enabled: true,
        path: screenshotsPath,
        on_failure: true,
        on_error: true
      }
    }
  }
}
