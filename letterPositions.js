//We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

//For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

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


// We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
//letterPositions function
const letterPositions = function(sentence) {
  //variable
  const results = {};
  //for loop to go through each occurrence
    for (let i = 0; i < sentence.length; i++) {
    if(results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
    }
      // logic to update results here
  delete results[" "];
  return results;
  }


module.exports = letterPositions;

//Test code 
assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("I have the cutest bunny"));