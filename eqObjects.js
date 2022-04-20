//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ✅✅✅ ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} 🛑🛑🛑 ${expected}`);
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

//Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);
  if (objKeys1.length !== objKeys2.length) {
    return false;
  }
  for (let i in object1) {
    if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
      if (eqArrays(object1[i],object2[i]) === true) {
        return true;
      }
    } else if (object1[i] !== object2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

//Test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
//eqObjects(ab, ba)

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
