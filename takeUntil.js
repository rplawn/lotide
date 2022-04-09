// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = function(arr, callback) {
  let results = [];
  for (let item of arr) {
    if (item === callback) {
      break;
    } else {
      results.push(item);
    }
  }
  return results;
}


console.log(takeUntil([1,2,3,4,5,6,7], 7));