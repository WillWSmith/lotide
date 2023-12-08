const assert = require('chai').assert;
const middle = require(`../middle`);

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5, 6];
const array3 = [1, 2];
const array4 = [1, 2, 3, 4, 5, 6, 7];

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle(array1), [3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle(array2), [3, 4]);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle(array3), []);
  });

  it("returns [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle(array4), [4]);
  });

});