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

const takeUntil = (array, callback) => {
  let result = [];
  let end;
  for (const item of array) {
    if (callback(item)) {
      end = array.indexOf(item);
    } else {
      result = array.slice(0, end);
    }
  }
  return result;
};


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// // console.log(results2);

// assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
// assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);

module.exports = takeUntil;