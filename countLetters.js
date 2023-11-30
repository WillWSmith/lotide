const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

countLetters = function(string) {
  const count = {}; //object to store letter count

  for (const char of string) {  //loops through each character of the string
    count[char] = (count[char] || 0) + 1; //keeps track of how many of each letter
  }
  return count; //returns the results
};

const result1 = countLetters("LHL");
assertEqual(result1.L, 2);
assertEqual(result1.H, 1);