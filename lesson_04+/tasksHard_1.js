// // Задача

// // Необходимо написать программу для вычисления налога по прогрессивной шкале в зависимости от полученного заработка:

// // 13% на доход до 15 000 ₽
// // 20% на доход от 15 000 ₽ до 50 000 ₽
// // 30% на доход выше 50 000 ₽

// // Запросить у пользователя доход и вывести в консоль сумму налога


// 'use strict';

// const sum = +prompt('Сумма', '');
// let result;

// switch (!Number.isNaN(sum)) {
//   case sum < 15000:
//     result = sum * 0.13;
//     console.log(result);
//     break;
//   case sum >= 15000 && sum < 50000:
//     result = sum * 0.2;
//     console.log(result);
//     break;
//   case sum >= 50000:
//     result = sum * 0.3;
//     console.log(result);
//     break;
//   default:
//     console.log('Ошибка');
// }
