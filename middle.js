// Middle function
const middle = function(array) {
  const mid = (array.length / 2);
  const result = [];
  //checking if array length is 1 or 2
  if (array.length < 3) {
    return [];
    //checking if array is even
  
  } else if ((array.length % 2 === 0)) {
    result.push(array[mid - 1], array[mid]);
    //when array is neither and therefore odd
  } else {
    const midOdd = ((array.length - 1) / 2);
    result.push(array[midOdd]);
  } console.log(result);
  return result;
};

module.exports = middle;
middle([1,2,3,4,5,6])
