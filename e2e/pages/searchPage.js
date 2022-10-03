const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {
    elements: {
        searchField: '[id="search_query_top"]', // search text field CSS locator
    },

    commands: [
        { 
            // This is a simple search function requiring keyword to be passed into the function 
            search: function (selector) {
                const self = this;
                this.waitForElementPresent(self.elements.searchField.selector); // verify the search text input is present
                this.setValue(constants.SELECTORS.CSS,self.elements.searchField.selector, selector + this.api.Keys.ENTER); // set keyword value for search and hit "Enter"
            }
        },

        {


        }
    ]

}