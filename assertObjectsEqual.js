const eqObjects = require(`./eqObjects`);

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅ Objects are equal: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Objects are NOT equal: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

