const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}; //assertEqual is setup to only be able to compare primitive values, not complex data types like arrays or objects


//allItems = an array of strings that we need to look through
//itemsToCount = an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}

  for (const item of allItems) { //looping through array of items
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;

}


//test cases
const firstNames = [  //declaration of firstName keys
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }); //declaring which countOnly firstNames will be true/false

assertEqual(result1["Jason"], 1);                            //testing the via assertEqual function
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);