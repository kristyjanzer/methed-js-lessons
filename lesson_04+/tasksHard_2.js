// Задача

// Во многих странах иная прогрессивная шкала налогообложения и вычисляется она более сложным способом: 

// Налоговая ставка 13% на доход до 15 000 ₽
// Налоговая ставка 20% на доход выше 15 000 ₽ означает, что 20% уплачивается не со всей суммы, а лишь с той части, которая превосходит 15 000 ₽, но не выше 50 000 ₽
// Налоговая ставка 30% на доход выше 50 000 ₽ означает, что 30% уплачивается не со всей суммы, а лишь с той части, которая превосходит 50 000 ₽.

// Напишите программу, которая корректно сможет посчитать налог и вывести сумму налога в консоль.

// Не решена!!!!

'use strict';

const sum = +prompt('Сумма', '');
let result;
let littlePercent;
let middlePercent;
let bigPersent;
let res;
let re;
let re1;

switch (!Number.isNaN(sum)) {
  case sum < 15000:
    result = sum * 0.13;
    console.log(result);
    break;
  case sum >= 15000 && sum < 50000:
    littlePercent = 15000 * 0.13; // 1950;
    res = sum - 15000; // 40 000 - 15 000 = 25000;
    middlePercent = res * 0.2; // 25000 * 0.2 = 5000;
    result = littlePercent + middlePercent; // 6950
    console.log(result);
    break;
  case sum >= 50000:
    littlePercent = 15000 * 0.13; // 1950; 1
    res = sum - 15000; // 80 000 - 15 000 = 65000;
    re = res - 50000; // 65 000 - 50 000 = 15 000;
    middlePercent = re * 0.2; // 15000 * 0.2 = 3000; 2
    re1 = sum - 50000; // 80 000 - 50 000 = 30 000;
    bigPersent = re1 * 0.3; // 30 000 * 0.3 = 9 000; 2
    result = littlePercent + middlePercent + bigPersent; // 13 950
    console.log(result);
    break;
  default:
    console.log('Ошибка');
}