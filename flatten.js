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

function flatten(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(array[i]);
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

// Test case 1: Basic test with positive numbers
const nestedArray1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const result1 = flatten(nestedArray1);
assertArraysEqual(result1, [1, 2, 3, 4, 5, 6, 7, 8, 9]); // ✅ 

// Test case 2: Basic test with mixed types
const nestedArray2 = [[1, "two", 3], ["four", 5, "six"], [7, "eight", 9]];
const result2 = flatten(nestedArray2);
assertArraysEqual(result2, [1, "two", 3, "four", 5, "six", 7, "eight", 9]); // ✅ 

// Test case 3: Flattening an empty nested array
const nestedArray3 = [];
const result3 = flatten(nestedArray3);
assertArraysEqual(result3, []); // ✅ 

// Test case 4: Test where flattening might fail (undefined variable)
const nestedArray4 = [[1, 2, 3], [4, 5, 6], [7, 8, "9"]]; //String "9" instead of element 9
const result4 = flatten(nestedArray4);
assertArraysEqual(result4, []); // ❌
