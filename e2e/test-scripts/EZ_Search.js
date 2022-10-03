const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

   '@tags': ['test'], // tags to target for run script

   // If a test suite is using a shared login for test scripts etc you can use the before hook to acomplish this before the tests are run or to setup specifics for tests
   beforeEach: function (client) {
      client.url(process.env.URL); // navigate to target URL of site under test
      client.waitForElementPresent('body', 3000); // waiting for page to load
   },
   // Similar to the before hook, we can use the after hook to clean up tests (helper functions that clear up old data or close the browser like this example)
   after: function (client) {
      client.end(); // closes the browser and ends the session after tests have been run
   },

   // Exercise 1 (search and verify results)
   'TESTING!!! Search results by keyword' : (client) => { // title of test script
      const search = client.page.searchPage(); // refrence to call PO function from searchPage

      client.waitForElementPresent('body', 3000); // waiting for page to load
      client.setValue(constants.SELECTORS.CSS,'[id="search_query_top"]', "Dress" + client.Keys.ENTER); // long form search before creating PO function

      // Here are some of the ways to validate the search using [class="product-count"] Note that [class="heading-counter"] can also be used, but text is changed
      client.assert.containsText('[class="product-count"]', "Showing 1 - 7 of 7 items"); // hard assertion to verify text value
      //client.verify.containsText('[class="product-count"]', "Showing 1 - 7 of 7 items"); // soft assertion to verify text values
      //client.expect.element('[class="product-count"]').to.contain.text("Showing 1 - 7 of 7 items"); // using element commands to verify text values
   },

   // Exercise  2 (search in PO function)
   'TESTING!!! Search results by keyword in PO function' : (client) => { // title of test script
      const search = client.page.searchPage(); // refrence to call PO function from searchPage
      var x = "Dress"; // keyword for search

      search.search(x); // PO function for exercise 2
      client.assert.containsText('[class="product-count"]', "Showing 1 - 7 of 7 items"); // hard assertion to verify text value
   },

   // Exercise 3 multiple search
   'TESTING!!! Multiple search results by keyword' : (client) => {
      const search = client.page.searchPage(); // refrence to call PO function from searchPage
      // var x = ["Dress","Shirt","Blouse","Pants"]; // array of keywords for search (moved to constants)
      // var items = [ // an array of text values for search result counts (moved to constatnts)
      //    {count: "Showing 1 - 7 of 7 items"},
      //    {count: "Showing 1 - 1 of 1 item"},
      //    {count: "Showing 1 - 1 of 1 item"},
      //    {count: "0 results have been found."}
      // ];
      //    for(i = 0; 1 <= x.lenght -1; i++){ // intial long form script to check multiple search result counts + debug logs 
      //       console.log("DEBUG: value of i = " + i);
      //       console.log("DEBUG: value of x = " + x);
      //       search.search(x[i]);
      //       if(i === 0 || i === 1 || i === 2){
      //          client.assert.containsText('[class="product-count"]', items[i].count);
      //       }
      //       else{
      //          client.assert.containsText('[class="heading-counter"]', items[i].count);
      //       }
      //    }
   
      for(i = 0; i <= constants.ITEM_COUNT.length -1; i++){
         console.log("DEBUG: value of keywords = " + constants.ITEM_COUNT.length);
         console.log("DEBUG: value of i = " + i);
         console.log("DEBUG: value of x = " + constants.ITEM_COUNT[i].keyword);
         client.clearValue(constants.SELECTORS.CSS,'[id="search_query_top"]');
         search.search(constants.ITEM_COUNT[i].keyword);
         if(i === 0 || i === 1 || i === 2){
            client.assert.containsText('[class="product-count"]', constants.ITEM_COUNT[i].count);
         }
         else{
            client.assert.containsText('[class="heading-counter"]', constants.ITEM_COUNT[i].count);
         }
      }
   }
}