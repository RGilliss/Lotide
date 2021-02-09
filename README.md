# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gilliss/lotide`

**Require it:**

`const _ = require('@gilliss/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: Returns the first value in an array.
* `tail()`: Returns everything except the first value in an array.
* `middle()`: Returns the middle value in an array.
* `without()`: Returns an array that does not contain chosen elements.
* `map()`: Returns a new array that is the result of a function on the elements of the origional array.
* `letterPositions()`: Returns the index of a chosen letter.
* `findKeyByValue()`: Returns the key of an object based on a value.
* `findKey()`: Returns the key of an object based on an inputted function.
* `eqObjects()`: Checks whether two objects are equal.
* `eqArrays()`: Checks whether two arrays are equal.
* `countOnly()`: Returns the number of times a selected element in an object appears.
* `countLetters()`: Returns the number of times a selected letter occurs in a string.
* `assertObjectsEqual()`: Asserts whether two objects are equal or not.
* `assertEqual()`: Asserts whether the expected value is equal to the actual value.
* `assertArraysEqual()`: Asserts whether two arrays are equal.
