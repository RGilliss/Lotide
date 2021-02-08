const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3); 
assertArraysEqual(tail(words), ["Lighthouse", "Labs"]);
assertArraysEqual(tail([1,2,3,4,5]), [2,3,4,5]);
