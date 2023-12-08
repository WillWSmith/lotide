function eqArrays(array1, array2) {
  //simply checks to see if the lengths match as if they dont then obviously the elements wont match as well
  if (array1.length !== array2.length) {
    return false; 
  }
  //Checks the elements of each array using a loop to determine if they are an exact match
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  //if there are no differences found above the arrays must be equal
  return true;
}

module.exports = eqArrays;