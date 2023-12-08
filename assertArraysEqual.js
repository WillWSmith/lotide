const eqArrays = require(`./eqArrays`);

// This function compares two arrays for equality and logs the result
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Arrays are equal: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Arrays are NOT equal: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;