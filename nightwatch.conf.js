const chrome = require('chromedriver')
const Services = {}; loadServices();

module.exports = {
    src_folders: ["e2e/test-scripts"], 
    output_folder: "reports",
    constants: ["e2e"],
    custom_commands_path: ["e2e/custom-commands"],
    page_objects_path: ["e2e/pages"],

    test_settings: {
      default: {
        launch_url: process.env.URL,
        globals: {
          waitForConditionTimeout: 10000,
          skip_testcases_on_fail: false,
          end_session_on_fail: false
        },
        disable_error_log: false,
        screenshots: {
          enabled: true,
          path: 'screens',
          on_failure: true
        },
  
        desiredCapabilities: {
          browserName : 'chrome'
        },
  
        webdriver: {
          start_process: true,
          server_path: (Services.chromedriver ? Services.chromedriver.path : chrome.path)
        }
      },
      chrome: {
        desiredCapabilities : {
          browserName : 'chrome',
          'goog:chromeOptions' : {
            w3c: false,
            args: [
              'window-size=1190,914',
              //'--no-sandbox',
              //'--ignore-certificate-errors',
              //'--allow-insecure-localhost',
              //'--headless'
            ]
          }
        },
        webdriver: {
          start_process: true,
          port: 9515,
          server_path: (Services.chromedriver ? Services.chromedriver.path : chrome.path),
          cli_args: [
            // --verbose
          ]
        }
      },
    }
  }
  function loadServices() {
    try {
      Services.seleniumServer = require('selenium-server');
    } catch (err) {}
  
    try {
      Services.chromedriver = require('chromedriver');
    } catch (err) {}
  
    try {
      Services.geckodriver = require('geckodriver');
    } catch (err) {}
  }

  