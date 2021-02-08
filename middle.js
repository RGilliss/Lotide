const middle = function(ar) {
  let length = ar.length;
  let mid = [];
  
  if (length <= 2) {
    return mid;
  } else if (length % 2 !== 0) {
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
    mid2 = ar[calc2];
    mid.push(mid2);
    return mid;
  }
};



module.exports = middle;