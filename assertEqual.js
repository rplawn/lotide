// FUNCTION IMPLEMENTATION Make the function compare the two values it takes in and print out a message telling us if they match or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} âœ…âœ…âœ… ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} ðŸ›‘ðŸ›‘ðŸ›‘ ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);