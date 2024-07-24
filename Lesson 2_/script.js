////Арифметические операторы


// let x = 5;
// let y = 2;
// let z = x + y;
// let q = x * y;
// let t = q / y;

// x++;
// x--;

// let h = q % y;

// console.log(h);

////Логические операторы


// && (Логическое И);
// || (Логическое ИЛИ);
// ! (Логическое НЕ);


// let a = true;
// let b = false;

// let c = a && b;

// let d = a || b;

// let e = !a;

// console.log(e);


//// Операторы сравнения

// == - равенство (не строгое сравнение без приведения типов)
// != - неравенство (не строгое сравнение без приведения типов)
// === - строгое равенство (проверяет на тип данных и значение)
// !== - строгое неравенство (проверяет на тип данных и значение)
// >
// <
// >=
// <=

// let x = 5;
// let y = "5";

// let z = (x == y);
// let u = x === y;


// console.log(z);

// console.log(u);


/// Опретаоры присвоения

// = - присвоение
// += - присвоение суммы (также работает с другими ариф.операторами)
// -= - присвоение разности
// *= - присвоение произведения
//   /= - присвоение частного
// %= - присвоение остатка от деления


// let x = 5;

// x+=2;

// x*=2;

// x-=2;

// x/=2;

// x%=2;
// console.log(x);


/// Тернарные операторы

// let age = 20;
// let message = (age >= 18) ? console.log("Вы совершеннолетний")  : console.log("Вы несовершеннолетний");



// let login = "Lincode";
// const getLogin = prompt("Введите ваш логин");

// let result = (getLogin === login) ? console.log("Вы успешно авторизовались!") : console.log("Неверный логин");

// console.log(result);


///Объекты в JS

// Операторы для работы с объектами:

// . - оператор точка
// [] - квадратные скобки

// let persone = {
//     name: "John",
//     age: 30
// }

// // console.log(persone.name); // John

// // console.log(`Ваше имя: ${persone.name}, ваш возраст: ${persone.age} лет`); // Ваше имя: John, ваш возраст: 30 лет


// persone.name = "Mike";
// persone.age = 50;


// console.log(persone['name']); // John / Mike
// console.log(persone['age']); // 30 / 50


/// Массивы в JS


// [] - оператор доступа к элементу массива
// length - длина массива (свойство)

// let fruits = ["apple", "bananas", "orange"];

// // console.log(fruits[1]);

// // fruits.push("grape"); // ['apple', 'bananas', 'orange', 'grape']
// // fruits.pop();// ['apple', 'bananas', 'orange'] - удаляет последний элемент массива

// console.log(fruits.length); // 3 - кол-во элементов в массиве




// Условные операторы if-else

// let a = 3;


// if (a > 5) {
//     console.log("Переменная а больше 5");
// } else {
//     console.log("Переменная а меньше 5");
// }

/// Циклы 

/// Цикл for

// for (начальные значения; условие; действие после каждой итерации) {
//     // блок кода, который нужно выполнить 
// }

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }


// const arr = ["apple", "banana", "cherry"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// const n = 5;

// for (let i = 0; i < n; i++) {
//     console.log("Hello world!");
// }


/// Цикл while 

// while (условие) {
//     // Блок кода, который нужно выполнить
// }

// let i = 1;

// while (i < 5) {
//     console.log(i);
//     i++;
// }


// let num = 10;
// let isPrime = true;

// while (isPrime) {
//     num++;

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrime = false;

//             break;
//         }
//     }
// }

// console.log(num);


// Цикл Do-While

// do {
//     // блок кода который нужно выполнить
// } while(условие)

// let i =1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5)

//Блок кода Do выполнится хоть один раз, даже если результат условия будет false


// let num;

// do {
//     num = parseInt(prompt("Введите число"))
//     console.log(num);
// } while(num !== 0)


/// Функции в JS

// function <название функции> (список аргументов) {
//     // Блока кода, который выполняется при вызове функции
// }

// function sum (a, b) {
//     return console.log(a + b);
// }

// sum(10,3)

// function sum (a, b) {
//     return a + b;
// }

// const result = sum(8,3);

// console.log(result);

// function printNumber (n) {
//     for (let i = 1; i <= n; i++){
//         console.log(i);
//     }
// }

// printNumber(5);

// function printMessage (message, n) {
//     for (let i = 0; i < n; i++){
//         console.log(message);
//     }
// }

// printMessage("Hello, man!", 3);

// function squareArray (numbers) {
//     const result = [];

//     for (let i = 0; i < numbers.length; i++) {
//         result.push(numbers[i]**2);
//     }

//     return result;
// }

// const squares = squareArray([1,2,3,4,5])

// console.log(squares);