
const sum = function(fromN, toN) {
  // Sum all the values from fromN up to toN
  let count = fromN;

  for (let i = fromN; i < toN; i++) {
    count = count + i + 1;

  }

  return count;
};

console.log(sum(3, 7));

module.exports = sum;
