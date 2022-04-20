//The map function will return a new array based on the results of the callback function.
const words = ["ground", "control", "to", "major", "tom"];

const map = (arr, callback) => {
  const results = [];
  for (let i of arr) {
    results.push(callback(i));
  }
  return results;
};
module.exports = map;

const results1 = map(words, word => word[0]);
console.log(results1);


//assertArraysEqual function
const assertArraysEqual = function(Array1, Array2) {
  if (eqArrays(Array1, Array2)) {
    console.log(`Assertion Passed: ${Array1} ✅✅✅ ${Array2}`);
  } else {
    console.log(`Assertion Failed: ${Array1} 🛑🛑🛑 ${Array2}`);
  }
};


//eqArrays function
const eqArrays = function(Array1, Array2) {
  if (Array.isArray(Array1) &&
  Array.isArray(Array2)) {
    for (const [i, value] of Array1.entries()) {
      const value2 = Array2[i];
      if (value !== value2) {
        return false;
      }
    }
    
  } return true;
};