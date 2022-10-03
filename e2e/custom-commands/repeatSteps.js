/**
 * @function
 * @name repeatSteps
 * @param {number} count - how many times to repeat the steps
 * @param {function} callback - Callback containing the steps to repeat (currentIteration)
 *
 * @description
 * Repeat a series of step(s) i.e. Nightwatch commands or code. The callback contains the current iteration (integer)
 *
 * @example
 * // Output i 3 times with values
 *   var i = 1
 *   client.repeatSteps(3, () => {
 *       console.log("Repeat Steps itteration: "  +i);
 *       i++;
 *   })
 */

exports.command = function(count, cb) {
  
  this.perform(() => {
    for (let i = 0; i < count; i++) {
      const currentIteration = i + 1;
      this.perform(() => {
          cb("Current Iteration = ", currentIteration);
      });
    }
  });
};
