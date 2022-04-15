const eqArrays = require(`./eqArrays`);

// assertArraysEqual function
const assertArraysEqual = function(Array1, Array2) {
  if (eqArrays(Array1, Array2)) {
    console.log(`Assertion Passed: ${Array1} ✅✅✅ ${Array2}`);
  } else {
    console.log(`Assertion Failed: ${Array1} 🛑🛑🛑 ${Array2}`);
  }
};

module.exports = assertArraysEqual;