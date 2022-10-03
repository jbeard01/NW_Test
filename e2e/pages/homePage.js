const constants = require('../constants');

module.exports = {
    //Use this template to spin off new page object files 
    elements: {
        

    },

    commands: [
        { 
            // Page object function expecting two parameters passed in, that will verify that home page items are visibile, have a description, price and add to cart button
            validateHome: function (selector1, selector2){
                const self = this;
                this.expect.element(constants.HP_ITEM_VERIFY[0].itemLoc1+i+constants.HP_ITEM_VERIFY[0].itemLoc2).to.be.visible;
                this.expect.element(constants.HP_ITEM_VERIFY[0].shortDescLoc1+i+constants.HP_ITEM_VERIFY[0].shortDescLoc2).to.contain.text(selector1);
                this.expect.element(constants.HP_ITEM_VERIFY[0].priceLoc1+i+constants.HP_ITEM_VERIFY[0].priceLoc2).to.contain.text(selector2);
                this.expect.element(constants.HP_ITEM_VERIFY[0].addCartLoc1+i+constants.HP_ITEM_VERIFY[0].addCartLoc2).to.be.present;
            }
        },

        {


        }
    ]

}