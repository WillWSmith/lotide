const assertEqual = require(`../assertEqual`);
const eqArrays = require(`../eqArrays`);

// Test case: Check if two arrays with the same elements in the same order are equal
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// Test case: Check if two arrays with the same elements in different orders are not equal
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// Test case: Check if two arrays with the same elements as strings are equal
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

// Test case: Check if an array of strings and an array of numbers are not equal
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);