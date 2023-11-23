const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false; //simply checks to see if the lengths match as if they dont then obviously the elements wont match as well
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false; //Checks the elements of each array using a loop to determine if they are an exact match
    }
  }

  return true; //if there are no differences found above the arrays must be equal
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

/* AI Notes

Can improve the efficiency of the code by breaking the loop after a mismatch is found.
This can be done using the following example below

for (let i = 0; i < array1.length; i++) {
  if (array1[i] !== array2[i]) {
    result = false;
    break; // stop the loop as soon as a mismatch is found
  }
}

Added Note: Try to make comments more concise

*/