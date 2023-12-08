function without(source, itemsToRemove) {
  const result = [];

  for (let i=0; i < source.length; i++) {
    const element = source[i];

    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }
  return result;
} //function that takes in a source array and removed unwanted elements to return a new array

module.exports = without;

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// const test = without([1, 2, 3], []);
// assertArraysEqual(test, [1, 2, 3]);

// const test1 = without([], [1, 2, 3]);
// assertArraysEqual(test1, []);

// const test2 = without([1, 2, 3, NaN], [NaN, 4]);
// assertArraysEqual(test2, [1, 2, 3, NaN]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);