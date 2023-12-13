// The map function takes an array and a callback function as arguments.
// It applies the callback function to each element of the array and returns a new array with the results.
const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;
