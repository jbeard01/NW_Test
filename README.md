# NW Training: QA Automation

Useful links for places to seek help with Nightwatch.js:

- [API Reference](https://nightwatchjs.org/api/)
- [Understanding the Command Queue](https://github.com/nightwatchjs/nightwatch/wiki/Understanding-the-Command-Queue)
- [Nightwatch Assertions](https://shinesavita87.wordpress.com/2020/01/17/nightwatch-assertions/)
- [GitHub Discussions](https://github.com/nightwatchjs/nightwatch/discussions)
- [Google Groups](https://groups.google.com/g/nightwatchjs)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/nightwatch.js)
- [Why 'var self = this'](https://medium.com/@vijay.j.shekhawat/javascript-why-var-self-this-bbbaf98ab9d9)
- [Nightwatch Tutorials](https://testautomationu.applitools.com/nightwatchjs-tutorial/)

## Testing Environments!

This project uses dotenv to target specific testing environments, used with url command like this:

```javascript
client.url(process.env.URL);
```

## How to run scripts: npm run <run script name>

Examples: Basics script running
- `npm run test`: This script is used to run new tests being developed using the tag "test" defined in NW root directory in package.json

## Before tests can be run, the .env file will need to be added locally

 - Create a file in the root directory called .env
 - add the following: URL=http://automationpractice.com/index.php

## This is your stock Nightwatch tool box (does not include custom commands written for this project)

Assertion command list examples: //node_modules/nightwatch/lib/api/asertions/

## Difference between hard and soft assertions
Hard assertion: .assert – when an assertion fails, the test ends, skipping all other assertions.
Soft assertion: .verify – when an assertion fails, the test logs the failure and continues with other assertions
NOTE: There is an additional "expect" assertion that can be used with language chains and element commands as well
    IE: client.expect.element('selector').to.contain.text("expectedText"); 

## Command list guide for training exercises

*** Exercise 1-3 ***

### url command

```javascript
/**
 * Retrieve the URL of the current page or navigate to a new URL.
 *
 * @example
 * module.exports = {
 *  'demo Test' : function(client) {
 *     client.url(function(result) {
 *       // return the current url
 *       console.log(result);
 *     });
 *     //
 *     // navigate to new url:
 *     client.url('{URL}');
 *     //
 *     //
 *     // navigate to new url:
 *     client.url('{URL}', function(result) {
 *       console.log(result);
 *     });
 *   }
 * }
 *
 * @link /#go
 * @syntax .url([url], [callback])
 * @syntax .url(callback)
 * @param {string|function} [url] If missing, it will return the URL of the current page as an argument to the supplied callback.
 * @param {Function} [callback]
 * @api protocol.navigation
 */
```
### containsText command

```javascript
 /**
 * Checks if the given attribute of an element has the expected value.
 *
 * ```
 *    this.demoTest = function (client) {
 *      client.assert.containsText('#main', 'The Night Watch');
 *    };
 * ```
 *
 * @method attributeEquals
 * @param {string} selector The selector (CSS / Xpath) used to locate the element.
 * @param {string} attribute The attribute name
 * @param {string} expected The expected value of the attribute to check.
 * @param {string} [message] Optional log message to display in the output. If missing, one is displayed by default.
 * @api assertions
 */
```

### Keys command

```javascript
/**
 * Send a sequence of key strokes to the active element. The sequence is defined in the same format as the `sendKeys` command.
 * An object map with available keys and their respective UTF-8 characters, as defined on [W3C WebDriver draft spec](https://www.w3.org/TR/webdriver/#character-types), is loaded onto the main Nightwatch instance as `client.Keys`.
 *
 * Rather than the `setValue`, the modifiers are not released at the end of the call. The state of the modifier keys is kept between calls, so mouse interactions can be performed while modifier keys are depressed. Pass `client.keys.NULL` to the keys function to release modifiers.
 *
 * @example
 * module.exports = {
 *  'demo Test': function(client) {
 *    client
 *      .keys(client.Keys.CONTROL) // hold down CONTROL key
 *      .click('#element')
 *      .keys(client.Keys.NULL) // release all keys
 *   }
 * }
 *
 * @param {Array|string} keysToSend The keys sequence to be sent.
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api protocol.useractions
 */
```

### clearValue command

```javascript
/**
 * Clear a textarea or a text input element's value. Starting with v1.1 `clearValue()` will wait for the element to be present (until the specified timeout).
 *
 * If the element is not found, an error is thrown which will cause the test to fail. Starting with `v1.2` you can suppress element not found errors by specifying the `suppressNotFoundErrors` flag.
 *
 * @example
 * module.exports = {
 *   demoTest(client) {
 *     client.clearValue('#login input[type=text]');
 *
 *     client.clearValue('#login input[type=text]', function(result) {
 *       console.log('clearValue result', result);
 *     });
 *
 *     // with explicit locate strategy
 *     client.clearValue('css selector', '#login input[type=text]');
 *
 *     // with selector object - see https://nightwatchjs.org/guide#element-properties
 *     client.clearValue({
 *       selector: '#login input[type=text]',
 *       index: 1,
 *       suppressNotFoundErrors: true
 *     });
 *
 *     client.clearValue({
 *       selector: '#login input[type=text]',
 *       timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
 *     });
 *   }
 * }
 *
 * @method clearValue
 * @syntax .clearValue(selector, [callback])
 * @syntax .clearValue(using, selector, [callback])
 * @param {string} [using] The locator strategy to use. See [W3C Webdriver - locator strategies](https://www.w3.org/TR/webdriver/#locator-strategies)
 * @param {string|object} selector The selector (CSS/Xpath) used to locate the element. Can either be a string or an object which specifies [element properties](https://nightwatchjs.org/guide#element-properties).
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api protocol.elementinteraction
 * @link /#dfn-element-clear
 */
```

### waitForElementPresent command

```javascript
/**
 * Waits a given time in milliseconds (default 5000ms) for an element to be present in the page before performing any other commands or assertions.
 * If the element fails to be present in the specified amount of time, the test fails. You can change this by setting `abortOnFailure` to `false`.
 *
 * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
 * Similarly, the default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
 *
 * @example
 * module.exports = {
 *  'demo Test': function(client) {
 *     // with default implicit timeout of 5000ms (can be overwritten in settings under 'globals.waitForConditionTimeout')
 *     client.waitForElementPresent('#index-container');
 *
 *     // specify the locate strategy (css selector/xpath) as the first argument
 *     client.waitForElementPresent('css selector', '#index-container');
 *
 *     // with explicit timeout (in milliseconds)
 *     client.waitForElementPresent('#index-container', 1000);
 *
 *     // continue if failed
 *     client.waitForElementPresent('#index-container', 1000, false);
 *
 *     // with callback
 *     client.waitForElementPresent('#index-container', 1000, function() {
 *       // do something while we're here
 *     });
 *
 *     // with custom output message - the locate strategy is required
 *     client.waitForElementPresent('css selector', '#index-container', 'The index container is found.');
 *
 *     // with custom Spanish message
 *     client.waitForElementPresent('#index-container', 1000, 'elemento %s no era presente en %d ms');
 *
 *     // many combinations possible - the message is always the last argument
 *     client.waitForElementPresent('#index-container', 1000, false, function() {}, 'elemento %s no era presente en %d ms');
 *   },
 *
 *   'demo Test with selector objects': function(client) {
 *      client.waitForElementPresent({
 *        selector: '#index-container',
 *        timeout: 1000
 *      });
 *
 *      client.waitForElementPresent({
 *        selector: '#index-container',
 *        locateStrategy: 'css selector'
 *      }, 'Custom output message');
 *
 *      client.waitForElementPresent({
 *        selector: '.container',
 *        index: 2,
 *        retryInterval: 100,
 *        abortOnFailure: true
 *      });
 *   }
 *
 *   'page object demo Test': function (client) {
 *      var nightwatch = client.page.nightwatch();
 *      nightwatch
 *        .navigate()
 *        .assert.titleContains('Nightwatch.js');
 *
 *      nightwatch.api.waitForElementPresent('@featuresList', function(result) {
 *        console.log(result);
 *      });
 *   }
 * }
 *
 * @method waitForElementPresent
 * @syntax .waitForElementPresent([using], selector, [timeout], [pollInterval], [abortOnAssertionFailure], [callback], [message]);
 * @param {string} [using] The locator strategy to use. See [W3C Webdriver - locator strategies](https://www.w3.org/TR/webdriver/#locator-strategies)
 * @param {string|object} selector The selector (CSS/Xpath) used to locate the element. Can either be a string or an object which specifies [element properties](https://nightwatchjs.org/guide#element-properties).
 * @param {number} [time=waitForConditionTimeout] The total number of milliseconds to wait before failing.
 * @param {number} [poll=waitForConditionPollInterval] The number of milliseconds to wait between checks. You can use this only if you also specify the time parameter.
 * @param {boolean} [abortOnFailure=abortOnAssertionFailure] By the default if the element is not found the test will fail. Set this to false if you wish for the test to continue even if the assertion fails. To set this globally you can define a property `abortOnAssertionFailure` in your globals.
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @param {string} [message] Optional message to be shown in the output; the message supports two placeholders: %s for current selector and %d for the time (e.g. Element %s was not in the page for %d ms).
 * @sortIndex 0
 * @api protocol.waitforelements
 */
```

*** Exercise 4-5 ***

### expect.element (visible)

```javascript
/**
 * Property that asserts the visibility of a specified element.
 *
 * @example
 * this.demoTest = function (client) {
 *   client.expect.element('#main').to.be.visible;
 *   client.expect.element('#main').to.not.be.visible;
 *   client.expect.element('#main').to.be.visible.before(100);
 * };
 *
 *
 * @display .visible
 * @method visible
 * @api expect.element
 */
```

### expect.element (text)

```javascript
/**
 * Property that retrieves the text contained by an element. Can be chained to check if contains/equals/matches the specified text or regex.
 *
 * @example
 * this.demoTest = function (client) {
 *   client.expect.element('#main').text.to.equal('The Night Watch');
 *   client.expect.element('#main').text.to.not.equal('The Night Watch');
 *   client.expect.element('#main').text.to.equal('The Night Watch').before(100);
 *   client.expect.element('#main').text.to.contain('The Night Watch');
 *   client.expect.element('#main').text.to.match(/The\ Night\ Watch/);
 * };
 *
 *
 * @method text
 * @since v0.7
 * @display .text
 * @api expect.element
 */
```

### expect.element (present)

```javascript
/**
 * Property that checks if an element is present in the DOM.
 *
 * @example
 * this.demoTest = function (client) {
 *   client.expect.element('#main').to.be.present;
 *   client.expect.element('#main').to.not.be.present;
 *   client.expect.element('#main').to.be.present.before(100);
 * };
 *
 *
 * @method present
 * @display .present
 * @since v0.7
 * @api expect.element
 */
```
*** Exercise 6 ***

### pause command

```javascript
/**
 * Suspends the test for the given time in milliseconds. If the milliseconds argument is missing it will suspend the test indefinitely
 *
 * @example
<<<<<<< HEAD
 * this.demoTest = function (browser) {
 *   browser.pause(1000);
 *   // or suspend indefinitely
 *   browser.pause();
=======
 * this.demoTest = function (client) {
 *   client.pause(1000);
 *   // or suspend indefinitely
 *   client.pause();
>>>>>>> master
 * };
 *
 * @method pause
 * @param {number} ms The number of milliseconds to wait.
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api protocol.utilities
 */
```
### perform command (optional)

```javascript
/**
 * A simple perform command which allows access to the Nightwatch API in a callback. Can be useful if you want to read variables set by other commands.
 *
 * The callback signature can have up to two parameters.
 *  - no parameters: callback runs and perform completes immediately at the end of the execution of the callback.
 *  - one parameter: allows for asynchronous execution within the callback providing a done callback function for completion as the first argument.
 *  - two parameters: allows for asynchronous execution with the Nightwatch `api` object passed in as the first argument, followed by the done callback.
 *
 * In the case of asynchronous execution, the timeout can be controlled by setting the `asyncHookTimeout` global. See [Using test globals](https://nightwatchjs.org/gettingstarted/concepts/#using-test-globals) for more info.
 *
 * @example
 * this.demoTest = function (client) {
 *   var elementValue;
 *   client
 *     .getValue('.some-element', function(result) {
 *       elementValue = result.value;
 *     })
 *     // other stuff going on ...
 *     //
 *     // self-completing callback
 *     .perform(function() {
 *       console.log('elementValue', elementValue);
 *       // without any defined parameters, perform
 *       // completes immediately (synchronously)
 *     })
 *     //
 *     // asynchronous completion
 *     .perform(function(done) {
 *       console.log('elementValue', elementValue);
 *       // potentially other async stuff going on
 *       // on finished, call the done callback
 *       done();
 *     })
 *     //
 *     // asynchronous completion including api (client)
 *     .perform(function(client, done) {
 *       console.log('elementValue', elementValue);
 *       // similar to before, but now with client
 *       // potentially other async stuff going on
 *       // on finished, call the done callback
 *       done();
 *     });
 * };
 *
 * @method perform
 * @param {function} callback The function to run as part of the queue.
 * @api protocol.utilities
 */
 ```
