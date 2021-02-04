const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }

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
const eqObjects = function(object1, object2) {
  const objectOneLength = Object.keys(object1).length
  const objectTwoLength = Object.keys(object2).length
  if(objectOneLength === objectTwoLength) {
    for(const key in object1) {
      if(Array.isArray(object1[key])) {
        if(!eqArrays(object1[key], object2[key])) {
          return false;
        } 
      } else if (typeof object1[key] === 'object') {
        if(!eqObjects(object1[key], object2[key])) {
          return false;
        } 
      } else if(object1[key] !== object2[key]) {
          return false;
      }
    }
    return true;
  }
  return false;
}  

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false );

