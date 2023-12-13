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

