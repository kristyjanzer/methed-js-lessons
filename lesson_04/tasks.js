'use strict';

// Вторая задача:

const rain = Math.round(Math.random());

if (rain === 1) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else {
  console.log('Дождя нет!');
}

// Третья задача:

const maths = +prompt('Введите кол-во баллов по математике:', '');
const russian = +prompt('Введите кол-во баллов по русскому языку:', '');
const informatics = +prompt('Введите кол-во баллов по информатике:', '');

const result = maths + russian + informatics;

if (result >= 265) {
  alert('Поздравляю, вы поступили на бюджет!');
} else {
  alert('К сожалению, вы не набрали достаточное кол-во баллов для поступления на бюджет!');
}


// Четвёртая задача:

const money = 100;
const question = +prompt('Сколько денег вы хотите снять?', '');

if (question % 100 === 0) {
  console.log('Заберите ваши деньги');
} else {
  console.log('Таких купюр нет');
}


