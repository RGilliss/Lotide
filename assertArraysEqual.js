const eqArrays = require('./eqArrays');

const assertArraysEqual = function(ar1, ar2) {

  if(eqArrays(ar1, ar2)) {
    console.log(`✅✅✅ Assertion Passed: ${ar1} === ${ar2}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${ar1} !== ${ar2}`);
  };


  // if (ar1 === ar2) {
    
  //   return true;
  // } else if (ar1 === null || ar2 === null) {
  //   console.log(`❌❌❌  Assertion Failed: ${ar1} !== ${ar2}`);
  //   return false;
  // } else if (ar1.length !== ar2.length) {
  //   return false;
  // }
  // for (let i = 0; i < ar1.length; i++) {
  //   if (ar1[i] !== ar2[i]) {
  //     console.log(`❌❌❌  Assertion Failed: ${ar1} !== ${ar2}`);
  //     return false;
  //   }
  // }
  // return true;
};

module.exports = assertArraysEqual;