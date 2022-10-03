const constants = require('../constants'); 

module.exports = {

   '@tags': ['test'], 

    beforeEach: function (client) {
        client.url(process.env.URL); 
        client.waitForElementPresent('body', 3000); 
    },
    after: function (client) {
        client.end(); 
    },

    // Exercise 6 e2e test: search for and buy an item
    'TESTING!!! User flow: Buy an item' : (client) => {

        //Login to existing account
        client.waitForElementPresent(constants.SELECTORS.CSS, '[class="login"]');
        client.click(constants.SELECTORS.CSS, '[class="login"]');
        client.waitForElementPresent(constants.SELECTORS.CSS, '[id="email"]');
        client.setValue(constants.SELECTORS.CSS, '[id="email"]', "derper@derpington.net");
        client.waitForElementPresent(constants.SELECTORS.CSS, '[id="passwd"]');
        client.setValue(constants.SELECTORS.CSS, '[id="passwd"]', "Derp1234");
        client.waitForElementPresent(constants.SELECTORS.CSS, '[class="button btn btn-default button-medium"]');
        client.click(constants.SELECTORS.CSS, '[class="button btn btn-default button-medium"]');
        //Select first item form Dresses list
        client.waitForElementPresent(constants.SELECTORS.CSS, '#block_top_menu > ul > li:nth-child(2)');
        client.click(constants.SELECTORS.CSS, '#block_top_menu > ul > li:nth-child(2)');
        client.waitForElementPresent(constants.SELECTORS.CSS, '[class="icon-th-list"]');
        client.click(constants.SELECTORS.CSS, '[class="icon-th-list"]');
        client.waitForElementPresent(constants.SELECTORS.CSS, constants.USER_FLOW.itemLink);
        //Optional console log output
        client.perform(()=>{
            console.log("Item "+ constants.USER_FLOW.itemName + " selected!")
        })
        client.click(constants.SELECTORS.CSS, constants.USER_FLOW.itemLink);
        client.verify.urlContains(constants.USER_FLOW.itemURL);
        //Add item to cart
        client.waitForElementPresent('#add_to_cart > button');
        client.click(constants.SELECTORS.CSS, '#add_to_cart > button');
        //Validate checkout pop up and proceed to checkout
        client.pause(constants.PAUSE.pauseFor3); // waiting for add to cart and modal pop
        client.waitForElementPresent(constants.SELECTORS.CSS, '[title="Proceed to checkout"]');
        client.pause(constants.PAUSE.pauseFor3); // waiting for element to be active
        client.click(constants.SELECTORS.CSS, '[title="Proceed to checkout"]');
        client.verify.urlContains("controller=order");
        //Validate summary page
        client.expect.element('[class="cart_product"]').to.be.present;
        client.expect.element('[class="cart_description"]').to.be.present;
        client.expect.element('[class="cart_avail"]').to.be.present;
        client.expect.element('[class="cart_unit item"]').to.be.present;
        client.expect.element('[class="cart_quantity item"]').to.be.present;
        client.expect.element('[class="cart_total item"]').to.be.present;
        client.expect.element('[class="cart_delete last_item"]').to.be.present;
        client.waitForElementPresent(constants.SELECTORS.CSS, '[class="button btn btn-default standard-checkout button-medium"]');
        client.click(constants.SELECTORS.CSS, '[class="button btn btn-default standard-checkout button-medium"]');
        //Delivery address verification
        client.expect.element('[id="address_delivery"]').to.be.visible;
        client.expect.element('[class="address_firstname address_lastname"]').to.contain.text("Derp Derpington");
        client.expect.element('[class="address_address1 address_address2"]').to.contain.text("123 QA Lane");
        client.expect.element('[class="address_city address_state_name address_postcode"]').to.contain.text("TesterTown, Colorado 80504");
        client.expect.element('[class="address_country_name"]').to.contain.text("United States");
        client.expect.element('[class="address_phone_mobile"]').to.contain.text("5555555555");
        client.expect.element('[class="button button-small btn btn-default"]').to.be.present;
        client.waitForElementPresent(constants.SELECTORS.CSS, '[class="button btn btn-default button-medium"]');
        client.click(constants.SELECTORS.CSS, '[class="button btn btn-default button-medium"]');
        //Agree to TOS on shipping page
        client.waitForElementPresent(constants.SELECTORS.CSS, '[id="uniform-cgv"]');
        client.click(constants.SELECTORS.CSS, '[id="uniform-cgv"]');
        client.waitForElementPresent(constants.SELECTORS.CSS, '[class="button btn btn-default standard-checkout button-medium"]');
        client.click(constants.SELECTORS.CSS, '[class="button btn btn-default standard-checkout button-medium"]');
        //Payment by bank wire
        client.waitForElementPresent(constants.SELECTORS.CSS, '[class="bankwire"]');
        //Payment and Order Confirmation
        client.click(constants.SELECTORS.CSS, '[class="bankwire"]');
        client.expect.element('[class="page-heading"]').to.contain.text("ORDER SUMMARY");
        client.expect.element('[class="page-subheading"]').to.contain.text("BANK-WIRE PAYMENT.");
        client.waitForElementPresent(constants.SELECTORS.CSS, '[class="button btn btn-default button-medium"]');
        client.click(constants.SELECTORS.CSS, '[class="button btn btn-default button-medium"]');
        client.expect.element('[class="page-heading"]').to.contain.text("ORDER CONFIRMATION");
        //Verify empty cart
        client.expect.element('[class="ajax_cart_no_product"]').to.contain.text("(empty)");
    },

    // Exercise 6.1 e2e test: search for and buy an item
    'TESTING BONUS!!! User flow: Buy an item with PO Functions' : (client) => {
        const e2e = client.page.e2ePage();

        //Login to existing account
        //e2e.userLogin(constants.USER_FLOW.email, constants.USER_FLOW.pass);
        //Select first item form Dresses list
        e2e.addItem(constants.USER_FLOW.itemLink, constants.USER_FLOW.itemName, constants.USER_FLOW.itemURL);
        //Validate checkout pop up and proceed to checkout
        e2e.cartModal(constants.USER_FLOW.orderSumURL);
        //Validate summary page
        e2e.orderSummary();
        //Delivery address verification
        e2e.deliveryAddress(constants.USER_FLOW.fullName,constants.USER_FLOW.address1,constants.USER_FLOW.address2,constants.USER_FLOW.country,constants.USER_FLOW.phone);
        //Agree to TOS on shipping page
        e2e.checkTOS();
        //Payment and Order Confirmation
        e2e.orderConfirm(constants.USER_FLOW.orderSumText1,constants.USER_FLOW.orderSumText2,constants.USER_FLOW.orderSumText3);
        //Verify empty cart
        e2e.emptyCart(constants.USER_FLOW.emptyCart);
    }
}