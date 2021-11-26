'use strict';

const sum = +prompt('Сумма', '');
let result;

switch (!Number.isNaN(sum)) {
  case sum < 15000:
    result = sum * 0.13;
    console.log(result);
    break;
  case sum >= 15000 && sum < 50000:
    result = sum * 0.2;
    console.log(result);
    break;
  case sum >= 50000:
    result = sum * 0.3;
    console.log(result);
    break;
  default:
    console.log('Ошибка');
}
