const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(word) {
  let obj = {};
  for(const letter of word){
    if(letter === " "){
      
    } else if(letter in obj){
      obj[letter] += 1; 
    } else {
      obj[letter] = 1;
    }
  
  }
  console.log(obj);
  return obj;
};

const result = countLetters("meat eater");
const result1 = countLetters("lhl");
// assertEqual(result['m'], 1);
// assertEqual(result1['l'], 2);