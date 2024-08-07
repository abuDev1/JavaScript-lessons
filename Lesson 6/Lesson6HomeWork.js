// 1.

// arr_1= [101, 202, 303, 404, 505];

// arr_2 = [606, 707, 808, 909];

// const superArr = [...arr_1, ...arr_2];

// console.log(superArr);

// // 2.

// console.log(Math.min(...superArr));

// 3. !!!!!!!!!!!!!!!!!!!!!!!! Недопонимаю ТЗ

// let obj = {
//     width: 300,
//     heigth: 550
// }

// let obj2 = obj.width * obj.heigth;

// console.log(obj2);

// 4.

// function sumNumb (...numbers) {
//     let sum = 0;
//     for (let numb of numbers)
//     sum += numb;
//     return sum;
// }

// console.log(sumNumb(1, 2, 3, 4, 5, 6, 7));

///////////////////////////////////////////// DOM

// Получить узел html

// let htmlTag = document.documentElement;
// console.log(htmlTag);

// // Поменять фоновый цвет всего документа на синий

// let backOfBody = document.body;
// backOfBody.style.backgroundColor = 'blue';

// // Пользуясь узлом document.body получить узлы <b> и <i>.

// let bTag = document.body.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling; // Получили доступ к тегу <b>
// console.log(bTag);

// let iTag = document.body.firstChild.nextSibling.lastChild.previousSibling.firstChild.nextSibling// Получили доступ к тегу <i>
// console.log(iTag);

// // Поменять текст в обоих узлах

// bTag.innerHTML  = "Changed text of tag b";

// iTag.innerHTML = "Changed text of tag i";

// // Задайте тегу <b> класс bold, а тегу <i> класс cursive

// bTag.classList.add('bold');

// iTag.classList.add('cursive');

// // Получить текстовый узел Линкод находящийся внутри тега <title>, и поменять его на 'Lincode’.

// let titleText = document.head.lastChild.previousSibling;

// titleText.innerHTML = 'Lincode';

// // Удалить узел <b>

// bTag.remove();

///////////////////////////////////// Promise

//Домашка по Promise

// 1. 

// const promise = new Promise ((resolve) => {
//     resolve(Math.random());
// })

// promise.then((random) => {
//     console.log(random);
// })

// 2.

// const promise = new Promise ((resolve, rejected) => {
//     let numb = 11;
//     if (numb < 10) {
//         resolve(console.log('Успех!'));
//     } else {
//         rejected(console.log('Ошибка!'));
//     }
// })

// promise.then((result) => {
//     return result;
// }).catch((error) => {
//     return error;
// })

// Комплексные задания

// Задание 1: Создание простого Promise

// let simplePromise = new Promise ((resolved) => {
//     resolved ("Succesfully, bro!");
// })

// simplePromise.then((result) => {
//     return console.log(result);
// })

// Задание 2: Использование setTimeout с Promise

// let promiseWithTimeOut = new Promise ((resolve) => {
//     setTimeout(() => resolve("Вывел Promise при помощи метода setTimeout()"), 2000);
// })

// promiseWithTimeOut.then((result) => {
//     return console.log(result);
// })

// Задание 3: Использование Promise.all

// let promise1 = new Promise ((resolve) => {
//     setTimeout(() => resolve("Promise1"), 1000);
// })

// let promise2 = new Promise((resolve) => {
//     setTimeout(() => resolve("Promise2"), 3000);
// })

// Promise.all([promise1,promise2]).then((results) => {
//     console.log(results);
// });

// Задание 4: Использование Promise.race

// let promise1 = new Promise ((resolve) => {
//     setTimeout(() => resolve("Promise1"), 1000);
// })

// let promise2 = new Promise((resolve) => {
//     setTimeout(() => resolve("Promise2"), 3000);
// })

// Promise.race([promise1,promise2]).then((results) => {
//     console.log(results);
// });

///////////////////////////////////// Деструктуризация

// Задание 1: Деструктуризация массива

// let numbers = [1,2,3];

// let [a,b,c] = numbers;

// console.log(a);
// console.log(b);
// console.log(c);

// Задание 2: Деструктуризация объекта

// let person = {
//     name: 'Khalid',
//     age: 33,
//     city: 'Grozny'
// }

// let {name, age, city} = person;

// console.log(name);
// console.log(age);
// console.log(city);

// Задание 3: Деструктуризация с использованием оставшихся элементов (rest)

// let letters = ['a', 'b', 'c', 'd', 'e'];

// let [first, second, ...rest] = letters;

// console.log(first);
// console.log(second);
// console.log(...rest);

// Задание 4: Вложенная деструктуризация

// let student = {
//     name: 'Muslim',
//     age: 17,
//     adress: {
//         city: 'Grozny',
//         country: 'Russia'
//     }
// }

// let {name, age, adress:{city,country}} = student;

// console.log(name);
// console.log(age);
// console.log(city);
// console.log(country);






