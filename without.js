function without(source, itemsToRemove) {
  const result = [];

  for (let i=0; i < source.length; i++) {
    const element = source[i];

    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }
  return result;
} //function that takes in a source array and removed unwanted elements to return a new array

module.exports = without;

