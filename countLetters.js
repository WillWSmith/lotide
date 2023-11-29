const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

countLetters = function(string) {
  const cleanString = string.replace(/[^a-zA-Z]/g, ''); //remove non letters
  
  const count = {}; //object to store letter count

  for (const char of cleanString) {  //loops through each character of the clean string
    count[char] = (count[char] || 0) + 1; //keeps track of how many of each letter
  }
  return count; //returns the results
};

console.log(countLetters(`LHL`));

const result1 = countLetters("LHL");
assertEqual(result1.L, 2);
assertEqual(result1.H, 1);