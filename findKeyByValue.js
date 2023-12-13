const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object, search) {
  for (const key in object) {             //loops through keys in the object
    if (object[key] === search) {         // checks to see if there is a match
      return key;                         //returns a match if found
    }
  }
};

module.exports = findKeyByValue;
