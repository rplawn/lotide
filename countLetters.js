//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ✅✅✅ ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} 🛑🛑🛑 ${expected}`);
  }
};


//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
const countLetters = function(string) {
  let count = {};
  for (let i of string) {
    if (count[i]) {
      count[i]++;
    } else {
      count[i] = 1;
    }
  }
  delete count[" "];
  return count;
};


console.log(countLetters("LHL"));
console.log(countLetters("I have the cutest bunny"));