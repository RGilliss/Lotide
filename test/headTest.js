const assertEqual = require('../assertEqual');
const head = require('../head');
assertEqual(head([]), undefined);
assertEqual(head(["Hello"]), "Hello");
assertEqual(head([1, 2, 3, 4]), 1);