const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

countLetters = function(string) {
  const cleanString = string.replace(/[^a-zA-Z]/g, '').toLowerCase(); //remove non letters and convert all letters to lowercase
  
  const count = {}; //object to store letter count

  for (const char of cleanString) {  //loops through each character of the clean string
    count[char] = (count[char] || 0) + 1; //keeps track of how many of each letter
  }
  return count; //returns the results
};

console.log(countLetters(`LHL`));

const result = countLetters(`LHL`);
const expectedResult = { l: 2, h: 1 };
assertEqual(JSON.stringify(result), JSON.stringify(expectedResult));