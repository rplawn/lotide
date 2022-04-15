const tail = require(`../tail`);
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


//Mocha & Chai Test
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); 
  });
});