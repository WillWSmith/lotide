function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false; //checks to see if the lengths of each array match
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false; //Checks for a match in elements of array
    }
  }

  return true; //if there are no differences found above the arrays must be equal
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Arrays are equal: ${array1} === ${array2}`); //edited based on AI feedback to also print the arrays compared
  } else {
    console.log(`❌ Arrays are NOT equal: ${array1} !== ${array2}`); //edited based on AI feedback to also print the arrays compared
  }
};

//////////CHALLENGE/////////////

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char!== ` `) { //This ensures we skip spaces
      if (results[char]) {
        results[char].push(i);
      } else {                       //ensuring that same chars letter positions are each in their own array within the object
        results[char] = [i];
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);