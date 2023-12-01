const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function

const findkey = function(object, callback) {
  for (const key in object) {
    //uses the callback to search for a match and returns the matching keys if there is any
    if (callback(object[key])) {
      return key;
    }
  }
  //returns undefined if no match is found
  return undefined;
};

const test1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
};
const results1 = findkey(test1, value => value === 30);
assertEqual(results1, "age");

const test2 = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  genre: "Science Fiction",
  year: 1979,
};
const results2 = findkey(test2, value => value === "Science Fiction");
assertEqual(results2, "genre");
