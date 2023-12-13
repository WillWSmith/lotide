# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @WillWSmith/lotide`

**Require it:**

`const _ = require('@willwsmith/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual.js: Asserts whether two arrays are equal.
* assertEqual.js: Asserts whether two values are equal.
* assertObjectsEqual.js: Asserts whether two objects are equal.
* countLetters.js: Counts the occurrences of each letter in a given string.
* countOnly.js: Counts specific items in an array based on given criteria.
* eqArrays.js: Checks if two arrays are equal.
* eqObjects.js: Checks if two objects are equal.
* findKey.js: Finds a key in an object where its value matches a given condition.
* findKeyByValue.js: Finds a key in an object based on a given value.
* flatten.js: Flattens a nested array into a single-level array.
* head.js: Retrieves the first element from an array.
* index.js: The entry point of the module, exporting all utility functions.
* letterPositions.js: Returns the indices in a string where each character is found.
* middle.js: Retrieves the middle element(s) of an array.
* tail.js: Returns all elements of an array except the first one.
* takeUntil.js: Creates a slice of an array with elements taken from the beginning until a predicate returns false.
* without.js: Creates an array excluding all given values​​.