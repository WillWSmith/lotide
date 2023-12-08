const assert = require('chai').assert;
const tail = require(`../tail`);

describe('tail', function() {
  it('should return a new array with the tail elements', function() {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it('should not modify the original array', function() {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });

  it('should return an empty array for a single-element array', function() {
    const singleElementArray = ["Hello"];
    const resultSingleElement = tail(singleElementArray);
    assert.deepEqual(resultSingleElement, []);
  });

  it('should return an empty array for an empty array', function() {
    const emptyArray = [];
    const resultEmptyArray = tail(emptyArray);
    assert.deepEqual(resultEmptyArray, []);
  });
});