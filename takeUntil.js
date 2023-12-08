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

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

// const data3 = ["giggle", "snicker", "chuckle", "ROFL", "guffaw", "seriousness", "laugh", "giggle"];
// const results3 = takeUntil(data3, word => word === "seriousness");
// assertArraysEqual(results3, ["giggle", "snicker", "chuckle", "ROFL", "guffaw"]);