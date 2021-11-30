// Задача

// Напишите функцию, которая принимает строку и возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие

// Пример:  "привет Мир" => "Привет мир"

'use strict';

const getString = str => {
  let lowerCase = str.toLowerCase();
  let splitted = lowerCase.split('');
  let upperCase = splitted[0].toUpperCase();
  let result = upperCase + lowerCase.substring(1);

  return result;
}

console.log(getString('привет Мир'));
