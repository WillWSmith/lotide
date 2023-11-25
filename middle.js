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

function middle(source) {
  let mid = [];

  if (source.length <= 2) {
    return mid; //Array has 2 or less elements
  } else {
    if (source.length % 2 !== 0) {
      // Array has an odd number of elements
      mid.push(source[Math.floor(source.length / 2)]);
    } else {
      // Array has an even number of elements
      const middleIndex1 = source.length / 2 - 1;
      const middleIndex2 = source.length / 2;
      mid.push(source[middleIndex1], source[middleIndex2]);
    }
  }

  return mid;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5, 6];
const array3 = [1, 2];
const array4 = [1, 2, 3, 4, 5, 6, 7];

assertArraysEqual(middle(array1), [3]); // ✅
assertArraysEqual(middle(array2), [3, 4]); // ✅
assertArraysEqual(middle(array3), []); // ✅
assertArraysEqual(middle(array4), [3, 4]); // ❌