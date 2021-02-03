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
};

const eqArrays = function(ar1, ar2) {
  if (ar1 === ar2) {
    return true;
  } else if (ar1 === null || ar2 === null) {
    return false;
  } else if (ar1.length !== ar2.length) {
    return false;
  }
  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] !== ar2[i]) {
      return false;
    } 
  }
  return true;
};


const without = function(source, remove) {
  let newAr = source;
  for(let i = 0; i < remove.length; i++){
    newAr = newAr.filter(x => x !== remove[i]);
  }
  console.log(newAr);
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, "2", 3]) // => ["1", "3"]
without([4, 8, 12, 16], [12]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);