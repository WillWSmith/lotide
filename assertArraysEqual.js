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
// Example
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]); // should print "Arrays are NOT equal!"
//Added the second example as per AI feedback