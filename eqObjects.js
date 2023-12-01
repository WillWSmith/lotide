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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();

  // If the number of keys is not the same, FALSE
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if the sorted keys are the same
  for (let i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) {
      return false;
    }
  }

  // Check if the values associated with each key are the same
  for (const key of keys1) {
    // Check if the value is an array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // Use eqArrays for array comparison
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      // For non-array values, use simple equality check
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  // If all checks pass, objects are considered equal
  return true;
};
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true)
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false)