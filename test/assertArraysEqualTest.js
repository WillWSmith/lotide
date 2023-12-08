const assertArraysEqual = require(`../assertArraysEqual`);

// Example
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]); // should print "Arrays are NOT equal!"
//Added the second example as per AI feedback