// Задача

// Добавьте еще один файл в проект einstein.js
// Подключите его к index.html
// Создайте 2 константы myWeight и speedLight
// В myWeight запишите вашу массу тела (или кота), а в speedLight запишите скорость света 3e8
// Используя формулу E=mc2 посчитайте значение энергии вашего тела
// Результат выведите в консоль

'use strict';

const myWeight = 5;
const speedLight = 3e8;

const energy = myWeight * (speedLight ** 2);

console.log(energy);