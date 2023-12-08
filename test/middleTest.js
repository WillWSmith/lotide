const assertArraysEqual = require(`../assertArraysEqual`);
const middle = require(`../middle`);

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5, 6];
const array3 = [1, 2];
const array4 = [1, 2, 3, 4, 5, 6, 7];

assertArraysEqual(middle(array1), [3]); // ✅
assertArraysEqual(middle(array2), [3, 4]); // ✅
assertArraysEqual(middle(array3), []); // ✅
assertArraysEqual(middle(array4), [3, 4]); // ❌