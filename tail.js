//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} âœ…âœ…âœ… ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} ðŸ›‘ðŸ›‘ðŸ›‘ ${expected}`);
  }
};


//Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array
//Note* Splice changes original array and slice doesn't//
const tail = function(array) {
  return array.slice(1);
};



// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!