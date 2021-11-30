// Задача

// Напишите функцию, которая принимает строку и возвращает обратную строку

// Пример: "Привет мир" => "рим тевирП"

'use strict';

const reversedString = str => {
  let reversed = str.split('').reverse().join('');

  return reversed;
}

console.log(reversedString('Привет мир')); // рим тевирП


