function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Arrays are equal: ${array1} === ${array2}`); 
  } else {
    console.log(`❌ Arrays are NOT equal: ${array1} !== ${array2}`); 
  }
};

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

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const test = without([1, 2, 3], []);
assertArraysEqual(test, [1, 2, 3]);

const test1 = without([], [1, 2, 3]);
assertArraysEqual(test1, []);

const test2 = without([1, 2, 3, NaN], [NaN, 4]);
assertArraysEqual(test2, [1, 2, 3, NaN]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);