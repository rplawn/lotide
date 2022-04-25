const assertEqual = require('../assertEqual');
const eqArrays = require(`../eqArrays`);

//Test code
console.log(eqArrays([1,4],[2,3]));
assertEqual(1,3);
assertEqual(eqArrays([1, 2, 3], [2, 2, 2]), true);
assertEqual(eqArrays([1], [1]), true);
assertEqual(eqArrays(["test"], ["test", "ing"]), true);