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
const eqObjects = function(object1, object2) {
  const objectOneLength = Object.keys(object1).length;
  const objectTwoLength = Object.keys(object2).length;
  if (objectOneLength === objectTwoLength) {
    for (const key in object1) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (typeof object1[key] === 'object') {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// const dogs = {
//   breed: "pitbull",
//   coat: "brown",
//   name: "lilo",
// };

// const dogs1 = {
//   breed: "pitbull",
//   coat: "brown",
//   name: "lilo",
// };
// const cats = {
//   breed: "kitty",
//   coat: "bald",
//   name: "muffin",
// };



// assertObjectsEqual(dogs, dogs1);
// assertObjectsEqual(dogs, cats);

module.exports = assertObjectsEqual;