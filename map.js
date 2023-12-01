function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false; //checks to see if the lengths of each array match
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false; //Checks for a match in elements of array
    }
  }

  return true; //if there are no differences found above the arrays must be equal
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Arrays are equal: ${array1} === ${array2}`); //edited based on AI feedback to also print the arrays compared
  } else {
    console.log(`❌ Arrays are NOT equal: ${array1} !== ${array2}`); //edited based on AI feedback to also print the arrays compared
  }
};




const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const expected1 = ["g", "c", "t", "m", "t"];
assertArraysEqual(results1, expected1);

const results2 = map(words, word => word.length);
const expected2 = [6, 7, 2, 5, 3];
assertArraysEqual(results2, expected2);

const results3 = map(words, word => word.toUpperCase());
const expected3 = ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"];
assertArraysEqual(results3, expected3);