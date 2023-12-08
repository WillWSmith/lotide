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

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// const expected1 = ["g", "c", "t", "m", "t"];
// assertArraysEqual(results1, expected1);

// const results2 = map(words, word => word.length);
// const expected2 = [6, 7, 2, 5, 3];
// assertArraysEqual(results2, expected2);

// const results3 = map(words, word => word.toUpperCase());
// const expected3 = ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"];
// assertArraysEqual(results3, expected3);