function middle(source) {
  let mid = [];

  if (source.length <= 2) {
    //Array has 2 or less elements
    return mid;
  } else {
    if (source.length % 2 !== 0) {
      // Array has an odd number of elements
      mid.push(source[Math.floor(source.length / 2)]);
    } else {
      // Array has an even number of elements
      const middleIndex1 = source.length / 2 - 1;
      const middleIndex2 = source.length / 2;
      mid.push(source[middleIndex1], source[middleIndex2]);
    }
  }

  return mid;
}

module.exports = middle;