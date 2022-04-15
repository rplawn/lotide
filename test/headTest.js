const head = require(`../head`);
const assertEqual = require('../assertEqual');

//Test code
assertEqual(head([7,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);