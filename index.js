
const sum = function(fromN, toN) {
  // Sum all the values from fromN up to toN
  let summation = fromN;
  if (summation === toN) {
    return summation;
  }
  return summation + sum(fromN +1, toN); // recursive and stops when summation = fromN.
};

module.exports = sum;
