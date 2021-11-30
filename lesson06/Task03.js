// Задача:

// Напишите функцию reverseString,
// Она принимает строку и возвращает строку перевертыш
// Пример: "Цикл" => "лкиЦ"


function reverseString(str){
    let reversed = "";
    for (i = 0; i < str.length; i++) {
        reversed += str[(str.length - 1) - i];
    }
    return reversed;
 }

 console.log(reverseString('Цикл'));