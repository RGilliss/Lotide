const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(['one', 2, 'four'], ['one', 2, 'for']);
assertArraysEqual(['one', 2, 'four'], ['one', 2, 'four']);
assertArraysEqual([1, 2, 3, 4], [1, 3, 2, 4]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);