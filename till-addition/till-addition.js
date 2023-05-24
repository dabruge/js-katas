// Please do not change the name of this function
function tillAddition (cash) {
  let cashCopy = {...cash}
  let penceTotal = 0
  
  for (let currency in cashCopy) {
    // check if coin
    if (currency.endsWith('p')) {
      const unit = +currency.slice(0, currency.length - 1)
      const quantity = cashCopy[currency]
      penceTotal += unit * quantity
    } else { 
      // otherwise is note
      const unit = (+currency.slice(1))*100
      const quantity = cashCopy[currency]
      penceTotal += unit * quantity
    }
    
  }
  return `£${(penceTotal/100).toFixed(2)}`
};

module.exports = tillAddition;
