const assertEqual = require('../assertEqual');
const eqArrays = require(`../eqArrays`);

//Test code
console.log(eqArrays([1,4],[1,3]));
assertEqual(1,3);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1], [1]), true);
assertEqual(eqArrays(["test"], ["test", "ing"]), true);