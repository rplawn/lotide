// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = function(arr, callback) {
  let results = [];
  for (let item of arr) {
    if (callback(item)) {
      break;
    } else {
      results.push(item);
    }
  }
  return results;
}

module.exports = takeUntil;

console.log(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x === 5));