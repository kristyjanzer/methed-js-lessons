'use strict';

const getString = str => {
  let lowerCase = str.toLowerCase();
  let splitted = lowerCase.split('');
  let upperCase = splitted[0].toUpperCase();
  let result = upperCase + lowerCase.substring(1);

  return result;
}

console.log(getString('привет Мир'));
