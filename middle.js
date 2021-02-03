//Test assert functions
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

//Middle function
const middle = function(ar) {
  let length = ar.length;
  let mid = [];
  
  if (length <= 2) {
    return mid;
  } else if (length % 2 !== 0){
    let calc = (length - 1) / 2;
    mid = ar[calc];
    mid = [mid];
    return mid;
  } else if (length % 2 === 0) {
    let calc = (length / 2) - 1;
    let calc2 = (length / 2);
    let mid2 = [];
    mid = ar[calc];
    mid = [mid];
    mid2 = ar[calc2]
    mid.push(mid2);
    return mid;
  }

}

//Test Code
assertArraysEqual(middle([1, 5, 2, 19, 8, -1]), [2, 19]);
assertArraysEqual(middle([1, 5, 2, 19, 8, -1, 20]), [19]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([]), []);
assertArraysEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']);