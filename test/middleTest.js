const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it("should return [2, 19] for [1, 5, 2, 19, 8, -1]", () => {
    assert.deepEqual(middle([1, 5, 2, 19, 8, -1]), [2, 19]);
  });
  it("should return [19] for [1, 5, 2, 19, 8, -1, 20]", () => {
    assert.deepEqual(middle([1, 5, 2, 19, 8, -1, 20]), [19]);
  });
  it("should return [] when given an array with two values", () => {
    assert.deepEqual(middle([2, 3]), []);
  });
  it("should return [] when given an array with one value", () => {
    assert.deepEqual(middle([2]), []);
  });
  it("should return [] when given an empty array", () => {
    assert.deepEqual(middle([]), []);
  });
});

