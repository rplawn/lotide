const middle = require(`../middle`);
const assertArraysEqual = require(`../assertArraysEqual`);
const assert = require('chai').assert;

//Mocha & Chai Test
describe("#middle", () => {
  it("returns [4,3] for [1,2,3,4,5,6]", () => {
    assert.strictEqual(middle([1,2,3,4,5,6]), [4,3]); 
  });
});