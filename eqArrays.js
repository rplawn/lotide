//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ✅✅✅ ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} 🛑🛑🛑 ${expected}`);
  }
};


//Takes in two arrays and returns true or false, based on a perfect match.
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

console.log(eqArrays([1,4],[1,3]));

assertEqual(1,3);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1], [1]), true);
assertEqual(eqArrays(["test"], ["test", "ing"]), true);