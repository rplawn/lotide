//const head = require(`../head`);
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const head   = require('../head');


//Mocha & Chai test
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 'hello' for ['hello', 'test']", () => {
    assert.strictEqual(head(['hello', 'test']), 'hello'); 
  });
});