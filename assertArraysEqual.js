//eqArrays function
const eqArrays = function (Array1, Array2) {
  if (Array.isArray(Array1) &&
  Array.isArray(Array2)) {
    for (const [i, value] of Array1.entries()) {
      const value2 = Array2[i]
        if (value !== value2){
          return false;
        }
      }
    
  } return true;
};


//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console. Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.
const assertArraysEqual = function(Array1, Array2) {
  if (eqArrays(Array1, Array2)) {
    console.log(`Assertion Passed: ${Array1} âœ…âœ…âœ… ${Array2}`);
  } else {
    console.log(`Assertion Failed: ${Array1} ðŸ›‘ðŸ›‘ðŸ›‘ ${Array2}`);
  }
};