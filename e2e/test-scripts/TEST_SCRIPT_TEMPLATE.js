const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['null'], // tags to target for run script

    /* 
    * This is a template to use for starting on a new script
    * Feel free to copy this template for use in starting a test script!
    * Here is an example:
    * 
    *   //This will test the repeatSteps command
    *   'TESTING!!! Repeat Steps command' : (client) => {
    *    var n = 1
    *
    *    client.repeatSteps(3, () => {
    *        console.log("Repeat Steps iteration: "  +n);
    *        n++;
    *    })
    *    client.end();
    *    },
    * 
    */

   'TESTING!!! <ENTER TEST TARGET HERE>' : (client) => {
      //Enter your script here

      client.end();
   }
}