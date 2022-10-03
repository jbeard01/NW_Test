const constants = require('../constants');

module.exports = {
    //BONUS! These are examples of page object functions that can be used with the e2e test suite User_Flow
    elements: {
        //userLogin elements
        loginBtn: '[class="login"]',
        emailField: '[id="email"]',
        passField: '[id="passwd"]',
        signInBtn: '[class="button btn btn-default button-medium"]',
        //addItem elements
        dressesBtn: '#block_top_menu > ul > li:nth-child(2)',
        listView: '[class="icon-th-list"]',
        add2CartBtn: '#add_to_cart > button',
        //cartModal
        checkoutBtn1: '[title="Proceed to checkout"]',
        //orderSummary
        product: '[class="cart_product"]',
        description: '[class="cart_description"]',
        availability: '[class="cart_avail"]',
        unitItem: '[class="cart_unit item"]',
        quantity: '[class="cart_quantity item"]',
        itemTotal: '[class="cart_total item"]',
        deleteItem: '[class="cart_delete last_item"]',
        checkoutBtn2: '[class="button btn btn-default standard-checkout button-medium"]',

    },

    commands: [
        { 
            //Login to existing account
            userLogin: function (selector1, selector2){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.loginBtn.selector, 20000);
                this.click(constants.SELECTORS.CSS, self.elements.loginBtn.selector);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.emailField.selector);
                this.setValue(constants.SELECTORS.CSS, self.elements.emailField.selector, selector1);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.passField.selector);
                this.setValue(constants.SELECTORS.CSS, self.elements.passField.selector, selector2);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.signInBtn.selector);
                this.click(constants.SELECTORS.CSS, self.elements.signInBtn.selector);
            }
        },
        {
            //Select first item from Dresses list and add to cart
            addItem: function (selector1, selector2, selector3){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.dressesBtn.selector);
                this.click(constants.SELECTORS.CSS, self.elements.dressesBtn.selector);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.listView.selector);
                this.click(constants.SELECTORS.CSS, self.elements.listView.selector);
                this.waitForElementPresent(constants.SELECTORS.CSS, selector1);
                //Optional console log output
                this.perform(()=>{
                    console.log("Item "+ selector2 + " selected!")
                })
                this.click(constants.SELECTORS.CSS, selector1);
                this.verify.urlContains(selector3);
                //Add item to cart
                this.waitForElementPresent(self.elements.add2CartBtn.selector);
                this.click(constants.SELECTORS.CSS, self.elements.add2CartBtn.selector);
            }
        },
        {
            //Validate add to cart modal
            cartModal: function (selector){
                const self = this;
                this.api.pause(constants.PAUSE.pauseFor3); // waiting for add to cart and modal pop
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.checkoutBtn1.selector);
                this.api.pause(constants.PAUSE.pauseFor3); // waiting for element to be active
                this.click(constants.SELECTORS.CSS, self.elements.checkoutBtn1.selector);
                this.verify.urlContains(selector);
            }
        },
        {
            //Validate summary page
            orderSummary: function (){
                const self = this;
                this.api.expect.element(self.elements.product.selector).to.be.present;
                this.api.expect.element(self.elements.description.selector).to.be.present;
                this.api.expect.element(self.elements.availability.selector).to.be.present;
                this.api.expect.element(self.elements.unitItem.selector).to.be.present;
                this.api.expect.element(self.elements.quantity.selector).to.be.present;
                this.api.expect.element(self.elements.itemTotal.selector).to.be.present;
                this.api.expect.element(self.elements.deleteItem.selector).to.be.present;
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.checkoutBtn2.selector);
                this.click(constants.SELECTORS.CSS, self.elements.checkoutBtn2.selector);
            }
        },
        {
            //Verify delivery address
            deliveryAddress: function(param1, param2, param3, param4, param5){
                const self = this;
                this.api.expect.element('[id="address_delivery"]').to.be.visible;
                this.api.expect.element('[class="address_firstname address_lastname"]').to.contain.text(param1);
                this.api.expect.element('[class="address_address1 address_address2"]').to.contain.text(param2);
                this.api.expect.element('[class="address_city address_state_name address_postcode"]').to.contain.text(param3);
                this.api.expect.element('[class="address_country_name"]').to.contain.text(param4);
                this.api.expect.element('[class="address_phone_mobile"]').to.contain.text(param5);
                this.api.expect.element('[class="button button-small btn btn-default"]').to.be.present;
                this.waitForElementPresent(constants.SELECTORS.CSS, '[class="button btn btn-default button-medium"]');
                this.click(constants.SELECTORS.CSS, '[class="button btn btn-default button-medium"]');
            }
        },
        {
            //Agree to TOS on shipping page
            checkTOS: function (){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.CSS, '[id="uniform-cgv"]');
                this.click(constants.SELECTORS.CSS, '[id="uniform-cgv"]');
                this.waitForElementPresent(constants.SELECTORS.CSS, '[class="button btn btn-default standard-checkout button-medium"]');
                this.click(constants.SELECTORS.CSS, '[class="button btn btn-default standard-checkout button-medium"]');
            }
        },
        {
            //Order Confirmation
            orderConfirm: function(selector1, selector2, selector3){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.CSS, '[class="bankwire"]');
                this.click(constants.SELECTORS.CSS, '[class="bankwire"]');
                this.api.expect.element('[class="page-heading"]').to.contain.text(selector1);
                this.api.expect.element('[class="page-subheading"]').to.contain.text(selector2);
                this.waitForElementPresent(constants.SELECTORS.CSS, '[class="button btn btn-default button-medium"]');
                this.click(constants.SELECTORS.CSS, '[class="button btn btn-default button-medium"]');
                this.api.expect.element('[class="page-heading"]').to.contain.text(selector3);
            }
        },
        {
            ///Verify empty cart
            emptyCart: function(selector){
                const self = this;
                this.api.expect.element('[class="ajax_cart_no_product"]').to.contain.text(selector);
            }
        }
    ]
}