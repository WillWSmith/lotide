const countLetters = function(string) {
  //object to store letter count
  const count = {};
  //loops through each character of the string
  for (const char of string) {
    //keeps track of how many of each letter 
    count[char] = (count[char] || 0) + 1;
  }
  //returns the results
  return count;
};

module.exports = countLetters;
