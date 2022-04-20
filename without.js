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


//assertArraysEqual function
const assertArraysEqual = function(Array1, Array2) {
  if (eqArrays(Array1, Array2)) {
    console.log(`Assertion Passed: ${Array1} ✅✅✅ ${Array2}`);
  } else {
    console.log(`Assertion Failed: ${Array1} 🛑🛑🛑 ${Array2}`);
  }
};


//Implement without which will return a subset of a given array, removing unwanted elements.
const without = function(Array1, Array2) {
  if (Array.isArray(Array1) &&
  Array.isArray(Array2)) {
    let newArray1 = [...Array1];
    for (const [i, value] of newArray1.entries()) {
      for (const [j, value2] of Array2.entries()) {
        if (value === value2) {
          newArray1.splice(i,1);
        }
      }
    }
    return newArray1;
  } else {
    console.log("Both are not arrays.");
  }
};

module.exports = without;

console.log(without([1,2,3],[1]));