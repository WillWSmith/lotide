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
    console.log("Arrays are equal!");
  } else {
    console.log("Arrays are NOT equal!");
  }
};

// Example
assertArraysEqual([1, 2, 3], [1, 2, 3]);
