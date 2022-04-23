// eqArrays function
const eqArrays = function(Array1, Array2) {
  if (Array.isArray(Array1) &&
  Array.isArray(Array2) && Array1.length === Array2.length) {
    for (const [i, value] of Array1.entries()) {
      const value2 = Array2[i];
      if (value === value2) {
        return true;
      }
    }
    
  } return false;
};

module.exports = eqArrays;

