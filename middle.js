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

//Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(array) {
  const mid = (array.length / 2);
  const result = [];
  //checking if array length is 1 or 2
  if (array.length < 3) {
    return [];
    //checking if array is even
  
  } else if ((array.length % 2 === 0)) {
    result.push(array[mid], array[mid - 1]);
    //when array is neither and therefore odd
  } else {
    const midOdd = ((array.length - 1) / 2);
    result.push(array[midOdd]);
  } console.log(result);
  return result;
};

middle([3, 4, 5, 6, 7, 8, 9, 10]);