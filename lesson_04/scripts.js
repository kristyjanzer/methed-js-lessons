'use strict';

{
  const name = 'coffee';
  const amount = 20;
  const category = 'grocery';
  const price = 100;

  // console.log(name);
  // console.log(amount * price);

}

{
  const name = 'ring';
  const amount = 20;
  const category = 'jewelry';
  const price = 100;

  // console.log(name);
  // console.log(amount * price);

}

// Первая задача:

// В прошлом задании вы от пользователя получали количество товара и цену.
// С помощью конструкции if (else) убедитесь, что пользователь ввёл число
// Если число, то всё должно работать как и в прошлом задании
// Если пользователь вёл не число, то вывести сообщение "Вы ввели некорректные данные"
// Других сообщений в консоли быть не должно.

{
  const question = prompt('Наименование товара');
  const amount = +prompt('Количество товара');
  const category = prompt('Категория товара');
  const price = +prompt('Цена товара');

  if (typeof amount !== 'number' || Number.isNaN(price)) {
    console.log('Вы ввели некорректные данные');
  } else {
    console.log(`На складе ${amount} единицы товара "${question}" на сумму ${price} деревянных`);
  }

}