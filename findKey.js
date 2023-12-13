//Function

const findKey = function(object, callback) {
  for (const key in object) {
    //uses the callback to search for a match and returns the matching keys if there is any
    if (callback(object[key])) {
      return key;
    }
  }
  //returns undefined if no match is found
  return undefined;
};

module.exports = findKey;

