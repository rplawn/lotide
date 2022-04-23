const middle = require(`../middle`);
const assertArraysEqual = require(`../assertArraysEqual`);
const assert = require('chai').assert;

//Mocha & Chai Test
describe("#middle", () => {
  it("returns [3, 4] for [1,2,3,4,5,6]", () => {
    assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]); 
  });
});