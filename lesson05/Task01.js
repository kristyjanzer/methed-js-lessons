'use strict';

const convert = money => {
  let dollar = money * 1.2;
  let ruble = dollar * 73;
  return ruble;
}

console.log(convert(100));