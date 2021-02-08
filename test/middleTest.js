const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(middle([1, 5, 2, 19, 8, -1]), [2, 19]);
assertArraysEqual(middle([1, 5, 2, 19, 8, -1, 20]), [19]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']);