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
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// assertObjectsEqual(shirtObject, anotherShirtObject);  //should pass
// assertObjectsEqual(shirtObject, longSleeveShirtObject); //should fail

