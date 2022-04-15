// eqArrays function
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

module.exports = eqArrays;

