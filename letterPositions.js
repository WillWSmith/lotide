//////////CHALLENGE/////////////

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char!== ` `) { //This ensures we skip spaces
      if (results[char]) {
        results[char].push(i);
      } else {                       //ensuring that same chars letter positions are each in their own array within the object
        results[char] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);