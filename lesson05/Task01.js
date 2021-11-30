// Задача

// Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях
// 1 евро = 1.2 доллара,
// 1 доллар = 73 рубля.

'use strict';

const convert = money => {
  let dollar = money * 1.2;
  let ruble = dollar * 73;
  return ruble;
}

console.log(convert(100));