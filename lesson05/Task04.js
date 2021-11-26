'use strict';

const calculate = (sum, amount, promokod) => {
  let result = 0;
  let noDiscounts = result = sum;

  if (amount > 10) {
    result = sum - (sum * 0.03);
  } else {
    noDiscounts;
  };
  
  if (result >= 30000) {
    result = result - (result * 0.15);
  } else {
    noDiscounts;
  };
  
  if (promokod === 'METHED') {
    result = result - (result * 0.10);
  } else if (promokod === 'G3H2Z1' && result >= 2000) {
    result = result - 500;
  } else {
    noDiscounts;
  }
  
  return result;

};

calculate(20000, 11, 'METHED');
