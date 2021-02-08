const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }

};

const assertArraysEqual = function(ar1, ar2) {

  if (ar1 === ar2) {
    
    return true;
  } else if (ar1 === null || ar2 === null) {
    console.log(`❌❌❌  Assertion Failed: ${ar1} !== ${ar2}`);
    return false;
  } else if (ar1.length !== ar2.length) {
    console.log(`❌❌❌  Assertion Failed: ${ar1} !== ${ar2}`);
    return false;
  }
  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] !== ar2[i]) {
      console.log(`❌❌❌  Assertion Failed: ${ar1} !== ${ar2}`);
      return false;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${ar1} === ${ar2}`);
  return true;
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
    } else if (sentence[i] in results) {
      results[sentence[i]].push(i);
    } else if (!(sentence[i] in results)) {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

const result = letterPositions('hello');

// assertArraysEqual(result['h'], [0]);
// assertArraysEqual(result['e'], [1]);
// assertArraysEqual(result['l'], [2, 3]);
// assertArraysEqual(result['o'], [4]);


module.exports = letterPositions;