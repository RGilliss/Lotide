const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKey = (myObj, myFunc) => {
  let vals = Object.values(myObj);
  let keys = Object.keys(myObj);
  for (let i = 0; i < keys.length; i++) {
    if (myFunc(vals[i])) {
      return keys[i];
    }
    
  }
};

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars > 2), "Akaleri");

// assertEqual(findKey({
//   "Blue Hill": { words: 'hello' },
//   "Akaleri":   { words: "hola" },
//   "noma":      { words: "bonjour" },
//   "elBulli":   { words: "bye" },
//   "here":       { words: false },
//   "Akelarre":  { words: "denada" }
// }, x => x.words === false), "here");

module.exports = findKey;