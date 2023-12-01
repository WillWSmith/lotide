function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Arrays are equal: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Arrays are NOT equal: ${array1} !== ${array2}`);
  }
};

//Function implementation

const takeUntil = function(array, callback) {
  const results = [];

  for (const item of array) {
    if (callback(item)) {
      break;    //breaks the loop if truthy value is returned
    }

    results.push(item); //pushes items to results
  }

  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

const data3 = ["giggle", "snicker", "chuckle", "ROFL", "guffaw", "seriousness", "laugh", "giggle"];
const results3 = takeUntil(data3, word => word === "seriousness");
assertArraysEqual(results3, ["giggle", "snicker", "chuckle", "ROFL", "guffaw"]);