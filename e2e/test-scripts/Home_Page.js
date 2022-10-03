const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

   '@tags': ['test'], 

    beforeEach: function (client) {
        client.url(process.env.URL); 
        client.waitForElementPresent('body', 3000); 
    },
    after: function (client) {
        client.end(); 
    },

    // Exercise 4 long form validate home page items
    'TESTING!!! Validate home page items' : (client) => {

        /*
        // Item template using expect assertions
        client.expect.element('').to.be.visible; // Item 
        client.expect.element('').to.contain.text(""); // Short description
        client.expect.element('').to.contain.text(""); // Price
        client.expect.element('').to.be.present; // Add to cart btn
        */

        // Item 1
        client.expect.element('#homefeatured > li:nth-child(1)').to.be.visible;
        client.expect.element('#homefeatured > li:nth-child(1) > div > div.right-block > h5 > a').to.contain.text("Faded Short Sleeve T-shirts");
        client.expect.element('#homefeatured > li:nth-child(1) > div > div.right-block > div.content_price > span').to.contain.text("$16.51");
        client.expect.element('#homefeatured > li:nth-child(1) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default').to.be.present;
    
        // Item 2
        client.expect.element('#homefeatured > li:nth-child(2)').to.be.visible;
        client.expect.element('#homefeatured > li:nth-child(2) > div > div.right-block > h5 > a').to.contain.text("Blouse");
        client.expect.element('#homefeatured > li:nth-child(2) > div > div.right-block > div.content_price > span').to.contain.text("$27.00");
        client.expect.element('#homefeatured > li:nth-child(2) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span').to.be.present;
    
        // Item 3
        client.expect.element('#homefeatured > li:nth-child(3)').to.be.visible;
        client.expect.element('#homefeatured > li:nth-child(3) > div > div.right-block > h5 > a').to.contain.text("Printed Dress");
        client.expect.element('#homefeatured > li:nth-child(3) > div > div.right-block > div.content_price > span').to.contain.text("$26.00");
        client.expect.element('#homefeatured > li:nth-child(3) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span').to.be.present;
    
        // Item 4
        client.expect.element('#homefeatured > li:nth-child(4)').to.be.visible;
        client.expect.element('#homefeatured > li:nth-child(4) > div > div.right-block > h5 > a').to.contain.text("Printed Dress");
        client.expect.element('#homefeatured > li:nth-child(4) > div > div.right-block > div.content_price > span').to.contain.text("$50.99");
        client.expect.element('#homefeatured > li:nth-child(4) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span').to.be.present;
    
        // Item 5
        client.expect.element('#homefeatured > li:nth-child(5)').to.be.visible;
        client.expect.element('#homefeatured > li:nth-child(5) > div > div.right-block > h5 > a').to.contain.text("Printed Summer Dress");
        client.expect.element('#homefeatured > li:nth-child(5) > div > div.right-block > div.content_price > span').to.contain.text("$28.98");
        client.expect.element('#homefeatured > li:nth-child(5) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span').to.be.present;

        // Item 6
        client.expect.element('#homefeatured > li:nth-child(6)').to.be.visible;
        client.expect.element('#homefeatured > li:nth-child(6) > div > div.right-block > h5 > a').to.contain.text("Printed Summer Dress");
        client.expect.element('#homefeatured > li:nth-child(6) > div > div.right-block > div.content_price > span').to.contain.text("$30.50");
        client.expect.element('#homefeatured > li:nth-child(6) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span').to.be.present;

        // Item 7
        client.expect.element('#homefeatured > li:nth-child(7)').to.be.visible;
        client.expect.element('#homefeatured > li:nth-child(7) > div > div.right-block > h5 > a').to.contain.text("Printed Chiffon Dress");
        client.expect.element('#homefeatured > li:nth-child(7) > div > div.right-block > div.content_price > span').to.contain.text("$16.40");
        client.expect.element('#homefeatured > li:nth-child(7) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span').to.be.present;
    },

    // Exercise 4.1 (expanded: adding to constants and testing)
    'TESTING!!! Validate home page item expanded' : (client) => {
        var i = 1;
        // Item 1
        client.expect.element(constants.HP_ITEM_VERIFY[0].itemLoc1+i+constants.HP_ITEM_VERIFY[0].itemLoc2).to.be.visible;
        client.expect.element(constants.HP_ITEM_VERIFY[0].shortDescLoc1+i+constants.HP_ITEM_VERIFY[0].shortDescLoc2).to.contain.text(constants.HP_ITEM_VERIFY[i].shortDescText);
        client.expect.element(constants.HP_ITEM_VERIFY[0].priceLoc1+i+constants.HP_ITEM_VERIFY[0].priceLoc2).to.contain.text(constants.HP_ITEM_VERIFY[i].priceText);
        client.expect.element(constants.HP_ITEM_VERIFY[0].addCartLoc1+i+constants.HP_ITEM_VERIFY[0].addCartLoc2).to.be.present;
    },

    // Exercise 4.2 (expanded: creating loop to check all items)
    'TESTING!!! Validate home page items expanded in loop' : (client) => {
        var x = constants.HP_ITEM_VERIFY.length;
        console.log("DEBUG: Value of x = " +x);
        for(i = 1; i <= x -1; i++){
            client.expect.element(constants.HP_ITEM_VERIFY[0].itemLoc1+i+constants.HP_ITEM_VERIFY[0].itemLoc2).to.be.visible;
            client.expect.element(constants.HP_ITEM_VERIFY[0].shortDescLoc1+i+constants.HP_ITEM_VERIFY[0].shortDescLoc2).to.contain.text(constants.HP_ITEM_VERIFY[i].shortDescText);
            client.expect.element(constants.HP_ITEM_VERIFY[0].priceLoc1+i+constants.HP_ITEM_VERIFY[0].priceLoc2).to.contain.text(constants.HP_ITEM_VERIFY[i].priceText);
            client.expect.element(constants.HP_ITEM_VERIFY[0].addCartLoc1+i+constants.HP_ITEM_VERIFY[0].addCartLoc2).to.be.present;
        }
    },

    // Exercise 5: Taking the loop and adding a page object function
    'TESTING!!! Validate home page items with PO function' : (client) => {
        const home = client.page.homePage();
        var x = constants.HP_ITEM_VERIFY.length;
        for(i = 1; i <= x -1; i++){
            home.validateHome(constants.HP_ITEM_VERIFY[i].shortDescText, constants.HP_ITEM_VERIFY[i].priceText);
        }
    }

}