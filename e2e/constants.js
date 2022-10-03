module.exports = {
    /* all locator strategies:
            css selector
            link text
            partial link text
            tag name
            xpath
       https://nightwatchjs.org/api/commands/#element
    */
    SELECTORS: {
        CSS: 'css selector',
        XPATH: 'xpath',
        TAGNAME: 'tag name'
    },
    PAUSE: {
        pauseFor1: '1000',
        pauseFor2: '2000',
        pauseFor3: '3000'
    },
    // Added keyword for search and count to verify exercise 3 
    ITEM_COUNT: [
        {keyword: "Dress", count: "Showing 1 - 7 of 7 items"},
        {keyword: "Shirt", count: "Showing 1 - 1 of 1 item"},
        {keyword: "Blouse", count: "Showing 1 - 1 of 1 item"},
        {keyword: "Pants", count: "0 results have been found."}
    ],
    HP_ITEM_VERIFY: [
        {
            // common locators for Home Page Items split into 2 so we can increment by 1 for each item in a loop
            itemLoc1: '#homefeatured > li:nth-child(', itemLoc2: ')',
            shortDescLoc1: '#homefeatured > li:nth-child(', shortDescLoc2: ') > div > div.right-block > h5 > a', 
            priceLoc1: '#homefeatured > li:nth-child(', priceLoc2: ') > div > div.right-block > div.content_price > span',
            addCartLoc1: '#homefeatured > li:nth-child(', addCartLoc2: ') > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default'
        },
        {shortDescText: "Faded Short Sleeve T-shirts", priceText: "$16.51"}, // Home Page Item 1
        {shortDescText: "Blouse", priceText: "$27.00"}, // Home Page Item 2
        {shortDescText: "Printed Dress", priceText: "$26.00"}, // Home Page Item 3
        {shortDescText: "Printed Dress", priceText: "$50.99"}, // Home Page Item 4
        {shortDescText: "Printed Summer Dress", priceText: "$28.98"}, // Home Page Item 5
        {shortDescText: "Printed Summer Dress", priceText: "$30.50"}, // Home Page Item 6
        {shortDescText: "Printed Chiffon Dress", priceText: "$16.40"} // Home Page Item 7
    ],
    USER_FLOW: {
        // Account login 
        email: "derper@derpington.net",
        pass: "Derp1234",
        // Item to buy
        itemName: "Printed Dress - $26.00", // First dress in list
        itemLink: '#center_column > ul > li:nth-child(1) > div > div > div.center-block.col-xs-4.col-xs-7.col-md-4 > h5 > a', // Dress image link
        itemURL: "id_product=3", // Dress ite URL for verification
        // Order Summary
        orderSumURL: "controller=order",
        // Delivery address verification
        fullName: "Derp Derpington",
        address1: "123 QA Lane",
        address2: "TesterTown, Colorado 80504",
        country: "United States",
        phone: "5555555555",
        // Order Confirmation
        orderSumText1: "ORDER SUMMARY",
        orderSumText2: "BANK-WIRE PAYMENT.",
        orderSumText3: "ORDER CONFIRMATION",
        // Empty Cart
        emptyCart: "(empty)"
    },
}


/*
[
        //Item 1 (Printed Summer Dress: Sale)
        {itemName: "Printed Summer Dress: Sale",
        itemLoc: '#center_column > ul > li:nth-child(1) > div > div > div > div > a.product_img_link',
        color: [{option: '[name="Black"]'}, {option: '[name="Orange"]'}, {option: '[name="Blue"]'}, {option: '[name="Yellow"]'}],
        size: [{option: '[label=S]'}, {option: '[label=M]'}, {option: '[label=L]'}]
        },
        //Item 2 (Printed Dress 1 - $50.99)
        {itemName: "Printed Dress 1 - $50.99",
        itemLoc: '#center_column > ul > li:nth-child(2) > div > div > div > div > a.product_img_link',
        color: [{option: '[name="Beige"]'}, {option: '[name="Pink"]'}],
        size: [{option: '[label=S]'}, {option: '[label=M]'}, {option: '[label=L]'}]
        },
        //Item 3 (Printed Summer Dress)
        {itemName: "Printed Summer Dress",
        itemLoc: '#center_column > ul > li:nth-child(3) > div > div > div > div > a.product_img_link',
        color: [{option: '[name="White"]'}, {option: '[name="Yellow"]'}],
        size: [{option: '[label=S]'}, {option: '[label=M]'}, {option: '[label=L]'}]
        },
        //Item 4 (Printed Chiffon Dress)
        {itemName: "Printed Chiffon Dress",
        itemLoc: '#center_column > ul > li:nth-child(4) > div > div > div > div > a.product_img_link',
        color: [{option: '[name="Green"]'}, {option: '[name="Yellow"]'}],
        size: [{option: '[label=S]'}, {option: '[label=M]'}, {option: '[label=L]'}]
        },
        //Item 5 (Printed Dress 2 - $26.00)
        {itemName: "Printed Dress 2 - $26.00",
        itemLoc: '#center_column > ul > li:nth-child(5) > div > div > div > div > a.product_img_link',
        color: [{option: '[name="Orange"]'}],
        size: [{option: '[label=S]'}, {option: '[label=M]'}, {option: '[label=L]'}]
        },
        //Item 6 (Faded Short Sleved T-shirts)
        {itemName: "Faded Short Sleved T-shirts",
        itemLoc: '#center_column > ul > li:nth-child(6) > div > div > div > div > a.product_img_link',
        color: [{option: '[name="Orange"]'}, {option: '[name="Blue"]'}],
        size: [{option: '[label=S]'}, {option: '[label=M]'}, {option: '[label=L]'}]
        },
        //Item 7 (Blouse)
        {itemName: "Blouse",
        itemLoc: '#center_column > ul > li:nth-child(7) > div > div > div > div > a.product_img_link',
        color: [{option: '[name="White"]'}, {option: '[name="Black"]'}],
        size: [{option: '[label=S]'}, {option: '[label=M]'}, {option: '[label=L]'}]
        }
    ]
*/
