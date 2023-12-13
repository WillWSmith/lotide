function flatten(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(array[i]);
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

module.exports = flatten;



