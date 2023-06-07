// Please do not change the name of this function
function changeCalculator (num) {
  const change = {}
  const coins = [200, 100, 50, 20, 10, 5, 2, 1]

  for (let i = 0; i < coins.length; i++) {
    // check num / coin and floor it
    if (num >= coins[i]) {
      change[coins[i]] = Math.floor(num / coins[i])
      num = num % coins[i]
    }
    // if 1 or more
      // create new key:value in object - coin from array: floored division result
    // set num to modulo of num and current array coin
    
  }
  return change
    
  // return object
};

module.exports = changeCalculator;
